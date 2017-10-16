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

#### How does `this` keyword change in different context?

`this` is a keyword whose value changes depending on how a function gets called. There `six` different ways where
`this` can take take new values. They are:

1. `this` in global context
2. `this` in object construction
3. `this` in an object method
4. `this` in a simple function
5. `this` in an arrow function
6. `this` in an event listener


1. **`This` In a Global Context**
When `this` is called outside of any function, in a global context, this defaults to the `window` object in the browser.

2. **`This` In Object Constructor**
When we create a new instance of an object with the `new` keyword, `this` refers to the instance.

```js
function Human(age) {
    this.age = age;
}

const alice = new Human(10);
const bob = new Human(20);

console.log(alice); // this.age = 10
console.log(bob); // this.age = 20
```

3. **`This` In An Object Method**
Methods are fancy words for functions that are associated with an object. e.g.

```js
const ob = {
    // A method
    sayThis() {
        console.log(this);
    }
}
ob.sayThis(); // ob
```

4. `This` In A Simple Function
Inside simple functions `this` refers to `Window`. Simple functions are functions we know extremely well. Anonymous functions written in the same form are also considered
simple functions.

```js
function simpleFunc() {
    console.log(this);  // Window
}

const o = {
    sayThis() {
        simpleFunc()
    }
}

simpleFunc();  // Window
o.sayThis();   // Window
```

Consider the following code.

```js
const o = {
    doSomethingLater() {
        setTimeout(function(){
           this.speakLeet();    // error
        }, 1000)
    }
    speakLeet() {
        console.log('Method of 'o' not Window');
    }
}
```
**Unfortunately**, the code above results in an error. The error occurs because `this` is set to `Window` in the `setTimeout`
methods. **`Window` does not have a `speakLeet` method**.

**Exception:** In strict mode, rules are different. Context remains as whatever it was set to. e.g.

**Another example:**

```js
function Counter() {
  this.num = 0;
  
  this.timer = setInterval(function add() {
    this.num++;
    console.log(this.num);
  }, 1000);
}

var b = new Counter();
// NaN
// NaN
// NaN
// ...
```
Our `setInterval` function is not called on a declared object. It also isn't being called with the `new` keyword (only the `Counter()` function is)
And lastly, we are not using `call`, `bind`, or `apply`. **setInterval** is just a normal function(). So, the value of
`this` is being bound to **global object**!

**N.B.** The arrow function does not create its own `this`, the `this` value of the enclosing execution context is used. Thus, in the
following code, the `this` within the function that is passed to `setInterval` has the same values as `this` in the enclosing function. 

**Solve the issue using Arrow function
```js
function Counter() {
  this.num = 0;
  
  this.timer = setInterval(() => {
    this.num++;
    console.log(this.num);
  }, 1000);
}

var b = new Counter();
// 1
// 2
// 3
// ...
```
The original `this` binding created by the `Counter` constructor function is preserved. Inside the `setInterval` function,
`this` is still bound to our newly created `b` object! 

```js
function f2 () {
  'use strict';
  
  return this;
}

console.log(f2() === window);     // False 
console.log(f2() === undefined);  // True
```

`this` was not defined, so it's remained **`undefined`**.

5. `This` is in Arrow Functions
In a arrow functions `this` is always the same as `this` around it (in its immediate scope, also called lexical scope).
So, the `this` context stays as the object, not `Window`.

With arrow functions, the `speakLeet` example above could be written:

```js
const o = {
    doSomethingLater() {
        setTimeout(() => this.speakLeet(), 1000);
    }
    speakLeet() {
        console.log('Method of 'o' not Window');
    }
}
```

**N.B:** We can also set `this` inside a method using `bind`, `call`, `apply`.

```js
var bar = 'bar of global';

var foo = {
  bar: 'bar of foo';
};
  
function f2() {
  return this.bar;
}
  
console.log(f2());             // bar of global
console.log(f2.call(foo));     // bar of foo
console.log(f2.apply());       // bar of foo


var bound = f2.bind(document)
var bound2 = f2.bind({ a: 15 });

console.log(bound());            // undefined, there is no variable in document object
console.log(bound.call(window)); // undefined, no variable in document object. In this situation, call can't change the context
console.log(bound2());           // 15, created a new object { a: 15 } and called f2() in this context        
```

**Exceptional:** Since `this` is not bound in arrow functions, the methods `call()` or `apply()` can only pass in parameters. **`this` is ignored**.

```js
var adder = {
  base: 1,

  add: function(a) {
    var f = v => v + this.base;

    return f(a);
  },

  addThroughCall: function(a) {
    var f = v => v + this.base;
    var b = {
      base: 2
    };

    return f.call(b, a);
  }
};
```
console.log(adder.add(1));  // output: 2
console.log(adder.addThruCall(1));  // output: 2


5. **This** In Event Listeners
`this`  is set the element that fired the event in an event listener.

```js
let button = document.querySelector('button');

button.addEventListener('click', function() {
    console.log(this)     // button
})
```

#### Convert a string to `spinal string`. Spinal string case is all-lowercase-words-joined-by-dashes.

Input:
This Is Spinal Tap
thisIsSpinalTap
The_Andy_Griffith_Show
Teletubbies say Eh-oh
AllThe-small Things

Output: 
this-is-spinal-tap
this-is-spinal-tap
the-andy-griffith-show
teletubbies-say-eh-oh
all-the-small-things


Solutions: 

```js
function spinalCase(str) {
  // Create a variable for the white space and underscores
  var regex = /\s+|_+/g
  
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  
  // Replace space and underscore with -
  return str.replace(regex, '-').toLowerCase();
}

// test here
spinalCase('This Is Spinal Tap');
```

======================================================

Some questions to check:

OOP
How does this changes in different context? How many contexts are there?
What is a prototype in JavaScript?
How do you create objects in JavaScript?
What is the module pattern? When do you use it?
What is the factory pattern? When do you use it?
FP
What is immutability?
What array methods are immutable?
How do you change JavaScript properties while not mutating the object?
What is a pure function?
How many kinds of actions should a function contain?
What are side effects?
How do you handle side effects when you write pure functions?
AJAX
What are JavaScript promises?
How do you chain promises?
How do you catch errors when using promises?
How do you use the Fetch API?
What does CRUD stand for?
How do you query Github’s API to get a list of your own repositories?
Best practices
Why do you avoid global variables?
Why use strict equality (===) instead of normal equality (==)?
How do you use ternary operators to help you write terser code?
What ES6 features help you write terser code?
What is event bubbling and capturing?
How do you delegate events?
How do you remove event listeners? When should you remove them?