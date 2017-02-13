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
  
  