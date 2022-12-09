---
title: Long Press Issue
time: July 2021
corporation: Smartiful
---

For mobile devices, sometimes we want to check if the user has long-pressed an element or not. It's been natively supported by IOS and Android but seems to need a little bit of effort to implement it in browser.  

We quickly came to the idea of using `timeout` inside the Effect with a cleaner, then moving them into a customized hook to reuse.  

Below shows the hook we made for both browser and mobile usage.  

```tsx
const handleLongPress = () => {
  setValue((value) => value + 1);
}
const onLongPress = useLongPress(handleLongPress, 500);

<div {...onLongPress} />
```

- useLongPress.tsx

```tsx
import { useEffect, useRef, useState } from "react";

export const useLongPress = (callback: () => void, timeout: number = 300) => {

  const [startLongPress, setStartLongPress] = useState(false);
  const timerIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (startLongPress) {
      timerIdRef.current = window.setTimeout(() => {
        setStartLongPress(false);
        callback();
      }, timeout);
    } else if (timerIdRef.current) {
      clearTimeout(timerIdRef.current);
    }
    return () => {
      if (timerIdRef.current) {
        clearTimeout(timerIdRef.current);
      }
    };
  }, [callback, timeout, startLongPress]);

  return {
    onMouseDown: () => setStartLongPress(true),
    onMouseUp: () => setStartLongPress(false),
    onMouseLeave: () => setStartLongPress(false),
    onTouchMove: () => setStartLongPress(false),
    onMouseMove: (e) => {
      // Remove this condition could cause bug on Android
      if (e.movementX !== 0 || e.movementY !== 0) {
        setStartLongPress(false);
      }
    },
    onTouchStart: () => setStartLongPress(true),
    onTouchEnd: () => setStartLongPress(false)
  };
};
```

As the comment shown in the above code, we found a weird bug if the `onMouseMove` is defined like below.

```tsx
return {
  // ...
  onMouseMove: () => setStartLongPress(false),
  // ...
}
```

After a series of tests, we found out that the long-press malfunctioned only on Android devices but works well on IOS, browser, and browser simulators (both IOS and Android).  

>The test for long-press could require a lot of edge cases in multiple platforms, including move-in then move-out in-time/not-in-time cases, etc.  

If we press then keep the touch as well as move a little bit, then after the defined long-press time, typically, it should not count as a real long-press, but it was counted in the Android environment.  

So we came out with the idea to make a check inside the handler via the [mouseEvent.movementX](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/movementX) by ending the counting directly if there is a movement.

```tsx
return {
  // ...
  onMouseMove: (e: any) => {
    if (e.movementX !== 0 || e.movementY !== 0) {
      setStartLongPress(false);
    }
  },
  // ...
} 
```

After that, the long-press hook works as predicted for all the cases!

Maybe one thing we can adjust further is that there could be other implementation methods for this feature not overriding the props.  
