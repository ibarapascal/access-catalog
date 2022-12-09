---
title: Content-editable Div Related
date: February 2022
---

## This is an unfinished docs!

## Background

The reason for us to come to the approach using div with [contenteditable](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable) prop `true` to replace the normal [input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) or [textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) element is that we need the input field in our project to be

- vertical-align center  
- height auto-adjustable  

For example, if there is a textarea with a height of 3 lines, we want to make it vertical-align center at the beginning (for the cursor and for the initial text if have), and it could expand its height dynamically to show all the content if we input like 4 or 5 lines.  

>For a simple height auto-adjustable textarea, we can optionally use some existing libs like [react-textarea-autosize](https://www.npmjs.com/package/react-textarea-autosize), [react-autosize-textarea](https://www.npmjs.com/package/react-autosize-textarea) as a quick solution.

Further requirements need us to

- fully control the content (programmatically set its content)  
- control the cursor position (and the focus)  

We will start to describe the implementation from those two aspects.  

## Bind the data

Notice there is no `onChange` attribute for none form field elements like div, ref [here](https://stackoverflow.com/a/6676218/11872246), so we need to treat it as an [uncontrolled component](https://reactjs.org/docs/uncontrolled-components.html).  

Once we finish the input, we reset it back to normal div (`contentEditable` to `false`), and since the styles need to be adjusted for both cases, we use a state to control it.  

Then we can summarize the edition step below

- use an initValue to set the content before editing(focus)  
- content be uncontrolled during input  
- expose onChange callback to handle the content changes after editing(lost focus)  

Since we are actually using a div, we can directly access & mutate its content in multiple ways via Refs, like [Node.textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent), [HTMLElement.innerText](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText), and [HTMLElement.innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML).

The `textContent` and `innerText` fit our input situation, but they are actually different in multiple ways when we have multi-line content.  

- the necessity of `white-space` (`innerText` for contentEditable would add a `<br />` in DOM)  
- the length count method of line breaks (which could cause bugs when we control the cursor position later on)  

We choose `textContent` and the code could be seen below

```tsx
const handleInput = (e: ChangeEvent<HTMLDivElement>) => {
  onChangeContentValue(e.target.textContent ?? "");
};
```

TODO - show more code from the sandbox

### Control the cursor position

Notice that the range detection with line breaks in contentEditable needs to cross the nodes. We quickly searched out the solution and made it work with TS. Now we can Get & Set the cursor selection accordingly.  

>If not doing this, programmatically replace part of the content across lines would cause bugs.  

<details>

<summary>Click to check the code</summary>

```tsx
const createRange = (node: any, initChars: any, initRange?: any): any => {
  const chars = initChars;
  let range = initRange;
  if (!range) {
    range = document.createRange();
    range.selectNode(node);
    range.setStart(node, 0);
  }
  if (chars.count === 0) {
    range.setEnd(node, chars.count);
  } else if (node && chars.count > 0) {
    if (node.nodeType === Node.TEXT_NODE) {
      if (node.textContent.length < chars.count) {
        chars.count -= node.textContent.length;
      } else {
        range.setEnd(node, chars.count);
        chars.count = 0;
      }
    } else {
      for (let lp = 0; lp < node.childNodes.length; lp += 1) {
        range = createRange(node.childNodes[lp], chars, range);
        if (chars.count === 0) {
          break;
        }
      }
    }
  }
  return range;
};

const isChildOf = (node: any, parentElement: ReactNode): boolean => {
  let currentNode = node;
  while (currentNode !== null) {
    if (currentNode === parentElement) {
      return true;
    }
    currentNode = currentNode.parentNode;
  }
  return false;
};

export const setSelectionRange = (chars: number, element: ReactNode): void => {
  if (chars >= 0) {
    const selection = window.getSelection();
    const range = createRange(element, { count: chars });
    if (range && selection) {
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }
};

export const getSelectionRange = (parentElement: ReactNode): Array<number> => {
  const selection = window.getSelection();
  let start = -1;
  let end = -1;
  let node;
  if (selection?.focusNode) {
    if (isChildOf(selection.focusNode, parentElement)) {
      node = selection.focusNode;
      end = selection.focusOffset;
      while (node) {
        if (node === parentElement) {
          break;
        }
        if (node.previousSibling) {
          node = node.previousSibling;
          end += node.textContent?.length ?? 0;
        } else {
          node = node.parentNode;
          if (node === null) {
            break;
          }
        }
      }
    }
  }
  if (selection?.anchorNode) {
    if (isChildOf(selection.anchorNode, parentElement)) {
      node = selection.anchorNode;
      start = selection.anchorOffset;
      while (node) {
        if (node === parentElement) {
          break;
        }
        if (node.previousSibling) {
          node = node.previousSibling;
          start += node.textContent?.length ?? 0;
        } else {
          node = node.parentNode;
          if (node === null) {
            break;
          }
        }
      }
    }
  }
  return [start, end].sort((a, b) => a - b);
};
```

</details>

## Others

TODO -> add more description with code


programmatically set the content

- set the `textContent` as well  

merge with the keep-focus feature, change the value programmatically without losing focus

- set the `textContent` as well  
- conditionally trigger the onBlur to keep focus  

fix the initial cursor position issue when we set vertical-align center as `true`

- conditionally adjust the line-height
