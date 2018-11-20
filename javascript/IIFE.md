#### Explain why the following doesn't work as an IIFE (Immediately Invoked Function Expression)
    function foo() {
        // code
    }();
    
Just put parentheses:

```js
    ( function foo() {
      //code
    } )();
// JS interpretate everything what is in parentheses as `expression` not a `statement`.
// So, it will run immediately
```