#### Explain Event Delegation
 Js event listeners fire not only a single DOM but on all it's descendants
 
#### Describe Event Bubbling ('bubble up')
 Also known as "propogation". Events on an element will "bubble up" and also fire on all parents.

#### Difference between `target` and `currentTarget`    
 `target` is actual thing what is clicked and `currentTarget` is where the event listener is attached to.
 
#### Explain why the following doesn't work as an IIFE (Immediately Invoked Function Expression)
    function foo() {
        // code
    }();
    
Just put parentheses:      // JS interpretate everything what is in parentheses as
    
    ( function foo() {     // `expression` not a `statement`.
      //code               // So, it will run immediately
    } )();                 
 
#### Explain the difference on the usage of following -
  
  ```
  function foo() {
    // I am known as a definition or statement
  }
  ```
  
  ```
  var foo = function() {
    // i am an expression, i resolve to a value, even if just 'undefined'
    // expression = MDN - an expression is any valid unit of code that resolves to a value
  }
  ```
#### Explain `hoisting`
When you declare a variable in JavaScript (using "var"), that variable declaration is "hoisted" to the top of the
current scope: meaning the top of the current function or the top of the script if the variable isn't in a function.

#### Difference between a variable that is: null, undefined, or undeclared
- Undeclared: never used/defined before
  const bar = foo + 1;
  
  console.log(typeof bar); // undeclared, but also returns "undefined"
  
- Undefined:
    - variable declared but no defined value (not initialized)
    - object/array exists but nothing at that key/index
    - function exists but doesn't return anything
    - falsy
  
    let foo;
    const bar = foo;  // foo is undefined

    
    console.log(typeof foo); // "undefined" as a string
    console.log(foo === undefined) // true boolean
     
    const baz = 'undefined';
     console.log(baz === undefined); // false. Hooray, I guess
    
  
- null:
  - null has a value. It's value is null
  - null is a "nothing" value
  - not zero, not an empty string/object/array
  - falsy
  
  let foo = null;
  console.log(foo === null)  // true boolean
  
#### What is the output?

```js
var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};
logIt();
```
Answer: `undefined`
Explanation: variable declarations are "hoisted" to the top of the current scope. Variable assignments, however, are not.
- The code gets interpreted as though it were
```js                     | So, we have a new variable text inside of logIt() that is initialized to undefined,
  var text = 'outside';   | which is what it holds when we hit our log statement
function logIt(){         |
    var text;             |
    console.log(text);    |
    text = 'inside';      |
};                        |
logIt();                  |
```