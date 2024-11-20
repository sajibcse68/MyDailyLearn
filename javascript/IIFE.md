#### Explain why the following doesn't work as an IIFE

An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

```js
  function foo() {
    // code
  }();
```

Just put parentheses:

```js
  ( function foo() {
    //code
  } )();
// JS interpret everything what is in parentheses as `expression` not a `statement`.
// So, it will run immediately
```