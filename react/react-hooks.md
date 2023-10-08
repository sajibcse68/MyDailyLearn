# Misc

## Which is preferred, `useLayoutEffect` or `useEffect`?

###  useLayoutEffect vs useEffect

| useLayoutEffect                                      |  useEffect                                  |
| ----------------------------------                   | -------------                               |
| works Synchronously                                  | works Asynchronously                        |
| runs Before the browser repaints the screen          | runs After the browser repaints the screen  |
| Blocking, blocks the UI updates (visual changes)     | Non-blocking, does not block UI updates     |
| use when need control before painting the UI updates | use in API call, side effects, etc.         |

### What would happen if user clicks on a 'count button' on UI?

1. The user clicks the count button
2. React updates the `count state` variable internally
3. React handles the DOM mutation
4. The `useLayoutEffect` hook is fired
5. The browser waits for `useLayoutEffect` to finish and then paints the DOM changes to the browser screen
6. The `useEffect` function is fired after browser has painted the DOM changes


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
- animations, transitions, get the scroll position, 
- component flickers when the state is updated, that means it first renders in a partially-ready state before re-rendering it its final state right away
- need synchronous control before painting the DOM changes on UI

[Ref:](https://kentcdodds.com/blog/useeffect-vs-uselayouteffect)