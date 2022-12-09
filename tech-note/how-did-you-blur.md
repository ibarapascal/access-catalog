---
title: How Did You Blur
date: December 2021
---

Basically, an element could be lost focus by the user action of

- clicking other places
- pressing the tab key to navigate through the page

Sometime if we want to detect in which way the user lost focus, we may need to add both listeners, since then we can extract that logic into our own hook shown as below with its usage.

- App.tsx

```tsx
export default function App() {
  const handleBlurBy = (type: BlurType) => {
    console.log(type);
  };
  const { ref } = useHowYouBlur({ onBlurBy: handleBlurBy });
  return (
    <div className="App">
      <input ref={ref} />
    ...
```

- useHowYouBlur.tsx

```tsx
export type BlurType = "tab" | "click";
export interface UseHowYouBlurReturn {
  ref: RefObject<any>;
}
export interface UseHowYouBlurProps {
  onBlurBy: (type: BlurType) => void;
}

export const useHowYouBlur = ({
  onBlurBy
}: UseHowYouBlurProps): UseHowYouBlurReturn => {
  const [isBlurByTab, setIsBlurByTab] = useState<boolean>(false);
  const ref = useRef<any>(null);

  const keydownHandler = useCallback(
    (e: KeyboardEvent<HTMLElement>) => {
      if (e.keyCode === 9) {
        setIsBlurByTab(true);
        onBlurBy("tab");
      }
    },
    [onBlurBy]
  );
  const blurHandler = useCallback(() => {
    if (!isBlurByTab) {
      onBlurBy("click");
    }
    setIsBlurByTab(false);
  }, [isBlurByTab, onBlurBy]);

  useEffect(() => {
    const node = ref.current;
    node.addEventListener("keydown", keydownHandler, true);
    return (): void =>
      node.removeEventListener("keydown", keydownHandler, true);
  }, [keydownHandler]);

  useEffect(() => {
    const node = ref.current;
    node.addEventListener("blur", blurHandler, true);
    return (): void => node.removeEventListener("blur", blurHandler, true);
  }, [blurHandler]);

  return { ref };
};
```
