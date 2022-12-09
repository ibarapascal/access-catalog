---
title: Detect Screen Border
time: February 2022
corporation: WhaleFin Technologies Japan
---

To detect the screen border offset -> [mouseEvent.screenX](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/screenX)  

To detect if there are multiple screens -> [window.screenLeft](https://developer.mozilla.org/en-US/docs/Web/API/Window/screenLeft)  

Here is a real-world example showing how we make a collapse sidebar and let it auto-expand when user moves their mouse to the screen border.  

```tsx
const SIDER_TRIGGER_WIDTH = 48;
const SIDER_WIDTH = 256;

const handleMouseMove = (event) => {
  // mouseEvent.screenX to get the mouse position
  // window.screenLeft to get the screen offset if there are multiple screens
  const currentScreenX = event.screenX - window.screenLeft;
  if (currentScreenX <= SIDER_TRIGGER_WIDTH && isCollapsed) {
    setIsCollapsed(false);
  } else if (currentScreenX >= SIDER_WIDTH && !isCollapsed) {
    setIsCollapsed(true);
  }
};

<div onMouseMove={handleMouseMove}>
  ...
</div>
```

Notice that we always desire to define a buffer width between two change points to give a better user experience for such cases.  
