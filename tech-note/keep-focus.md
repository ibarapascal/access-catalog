---
title: Keep Focus
date: December 2021
---

Sometimes we want to keep the focused element continue to be focused after clicking some other buttons.  

>Based on the [Web Accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/) requirements, we may consider this a special feature only needed for certain input fields/elements when necessary.  

This leads us to think about [event.relatedTarget](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/relatedTarget). We can use it to find out if the next focused element is suspicious.  

Notice that sometimes the element could be nested, and could be focused on different levels, we could use both [matches](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches) and [querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) to ensure us to find it out.  

```tsx
/**
 * Check if is/contain the node based on the selector
 * @param e focus event
 * @param selector the string selector
 * @returns contains or not
 */
export const isContainSelection = (
  e: React.FocusEvent<HTMLElement>,
  selector: string
): boolean => {
  return (
    e.relatedTarget !== null &&
    (e.relatedTarget.querySelectorAll(selector).length > 0 ||
      e.relatedTarget.matches(selector))
  );
};
```

We can use [data-*](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*) the global attributes to help our identification.  

Now we can update our blur handler to achieve this feature!

```tsx
export default function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (isContainSelection(e, "[data-keep-focus-input]")) {
      console.log("let's keep focus!");
      inputRef!.current!.focus();
    } else {
      // do something else normally
    }
  };
  return (
    <div className="App">
      <input onBlur={handleBlur} ref={inputRef} />
      <button>button</button>
      <button data-keep-focus-input>button keeps focus</button>
    </div>
  );
}
```

Since we are not doing anything tricky mutating the handler itself, we can still write our customized logic inside the onBlur handler to approach real-world requirements later, for example

- nesting with multiple conditions for the focus control  
- manually control the input cursor pointer position back to the input once lost focused on certain elements  
