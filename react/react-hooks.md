# Misc

## Which is preferred, `useLayoutEffect` or `useEffect`?

###  useLayoutEffect vs useEffect

| useLayoutEffect                                      |  useEffect                                  |
| ----------------------------------                   | -------------                               |
| works Synchronously                                  | works Asynchronously                        |
| runs Before the browser repaints the screen          | runs After the browser repaints the screen  |
| Blocking, blocks the UI updates (visual changes)     | Non-blocking, does not block UI updates     |
| use when need control before painting the UI updates | use in API call, side effects, etc.         |

### What would happen if a user clicks on a 'count button' on the UI?

1. The user clicks the count button
2. React updates the `count state` variable internally
3. React handles the DOM mutation
4. The `useLayoutEffect` hook is fired
5. The browser waits for `useLayoutEffect` to finish and then paints the DOM changes to the browser screen
6. The `useEffect` function is fired after the browser has painted the DOM changes


```js
  useEffect(() => {
    console.log("log 1")
  }, [])
  useLayoutEffect(() => {
    console.log("log 2")
  }, [])

/** 
 * // output
 * log 2
 * log 1
*/

```

### When to use `useLayoutEffect` instead of `useEffect`?

- if you need to modify or, measure the DOM layout
- animations, transitions, get the scroll position, etc.
- component flickers when the state is updated, which means it first renders in a partially-ready state before re-rendering its final state right away
- need synchronous control before painting the DOM changes on UI

[Ref:](https://kentcdodds.com/blog/useeffect-vs-uselayouteffect)

## What is `useImperativeHandle` hook?

The `useImperativeHandle` hook in React is a way to **customize the instance value that is exposed to parent components when using refs**. It allows you to have more control over what parts of a child component the parent can access and interact with.

### Why use useImperativeHandle?

- **Encapsulation:** It helps you hide the internal implementation details of a child component and expose only a specific API to the parent.
- **Controlled Interaction:** You can define exactly which methods or properties the parent can access, preventing accidental or unintended modifications.
- **Refactoring:** It makes it easier to refactor the child component's internal workings without affecting the parent component, as long as the exposed API remains the same.

### How it works?

1. ref: You create a ref in the parent component using useRef.

2. useImperativeHandle in the child: In the child component, you use useImperativeHandle with the following arguments:
    - **ref:** The ref created in the parent.
    - **createHandle:** A function that returns an object. This object defines the API that will be exposed to the parent.
    - **dependencies (optional):** An array of dependencies. If any of the dependencies change, the createHandle function will be re-executed.

### How can we focus a child component's input element using `useImperativeHandle`?

```js
// ParentComponent.js
import React, { useRef } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const childInputRef = useRef(null);

  const handleClick = () => {
    if (childInputRef.current) {
      childInputRef.current.focusInput(); // Call the exposed method
    }
  };

  return (
    <div>
      <ChildComponent ref={childInputRef} />

      <button onClick={handleClick}>Focus Child Component's Input</button>
    </div>
  );
}

// ChildComponent.js
import React, { forwardRef, useImperativeHandle } from 'react';

const ChildComponent = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
  }));

  return <input type="text" ref={inputRef} />;
});
```

In this example, the parent component can call the `focusInput` method on the child component's ref, which is exposed through `useImperativeHandle`.

### When to use `useImperativeHandle`?

- **Focus Management:** Controlling focus on input fields or other elements within a child component.
- **Complex UI Components:** Exposing specific methods for controlling the behavior of a complex UI component (e.g., a custom modal or dropdown).
- **Third-Party Libraries:** Integrating with third-party libraries that require imperative access to DOM elements or component methods.