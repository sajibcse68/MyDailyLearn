## Misc

#### When we should use `useLayoutEffect` instead of `useEffect`?

- **useLayoutEffect:** if you need to mutate the DOM and/or `do need` to perform measurements. This runs synchronously immediately after React has performed all DOM mutations. This can be useful if you need to make measurements (like getting the `scroll` position or other styles for an element) and then make DOM mutations **or** trigger a synchronous re-render by updating state

- **useEffect:** if you don't need to interact with the DOM at all or your DOM changes are unobservable

**Explanation:**

The `useEffect` runs _after_ react renders and ensures that effect callback does not block browser painting.This differs from the behavior in class components where `componentDidMount` and `componentDidUpdate` run `synchronously` after rendering.

However, if your effect is mutating the DOM (via a DOM node `ref`) and the DOM mutation will change the appearance of the DOM node between the time that it is rendered and your effect mutates it, then you **don't** want to use `useEffect` instead use `useLayoutEffect` otherwise the user could see a **`flicker`** when your DOM mutations take effect!

[Ref:](https://kentcdodds.com/blog/useeffect-vs-uselayouteffect)