
- [Explain Event Delegation](#explain-event-delegation)
- [Describe Event Bubbling](#describe-event-bubbling)
- [What are benefits of a `named function` over a `anonymous function`?](#what-are-benefits-of-a-named-function-over-a-anonymous-function)
- [Difference between `target` and `currentTarget`?](#difference-between-target-and-currenttarget)
- [Explain why the following doesn't work as an IIFE](#explain-why-the-following-doesnt-work-as-an-iife-immediately-invoked-function-expression)
- [Difference between a variable that is: null, undefined, or undeclared](#difference-between-a-variable-that-is-null-undefined-or-undeclared)
---

### Explain Event Delegation
Js event listeners fire not only a single DOM but on all it's descendants

#### Describe Event Bubbling ('bubble up')
Also known as "propogation". Events on an element will "bubble up" and also fire on all parents.

#### What are benefits of a `named function` over a `anonymous function`?

- Handy function self-reference: necessary when referencing from inside the function, e.g. `recursion` 
- More debuggable stack traces: helpful when seeing `stack trace` while debugging
- More self-documenting code: when using the function as callback it is more documented

So, in production code we should use `Name Function` always.

#### Difference between `target` and `currentTarget`?
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

#### Q. Explain `Coercion` in JavaScript.
**Coercion** is used for unexpected type casting in JavaScript.

```js
14 + "";  // "14"
```
When we use `+` or `-` for adding or subtracting must be the same type. Now in the above example they obviously are not. So, in this case the number will cast to string then add them together. **Every `+` expression that involves a string will result in a string.**

But What will happen if we use `-`?

```js
"12" - 2; // 10
"12" - 0  // 12
"12" - "2"  // 10
```
subtracting (`-`) can be used on numbers only, so once again, JS will cast the values to be of the same type -- Numbers!

Now, let's try adding two arrays together.

```js
["foo", "bar"] + ["alice", "bob"]   // "foo, baralice, bob"
```
Little tricky!

Another interesting case is what happens when we use the `-` operation since it is reserved only for numeric types.

```js
[3] - [1]   // 2
["foo", "bar"] + ["alice", "bob"]   // NaN
```

So once again, the useful JS language will cast the values to numbers (if possible) and then execute that operation on the resulting values.

**Booleans** coercion is often used in if statement, loop, ternary, logical operators, etc.

```js
const a = 100
const b = "test"
const c = null

a || b  // 100
a && b  // "test"

a || c  // 100
a || c  // null
``` 

If the variable is not boolean then it will be coercion to one. When we use `||` operator, if the first value casts to true we will get that value returned. Otherwise, we will always get the second one.

In the case of `&&` we will get the second value if they are both coerced to true. If the first value cast to false then we will get it's  value returned. e.g.

```js
function greet(name) {
  name = name || 'visitor';
  console.log(`Hello, ${name}!`);
}

greet();  // Hello, visitor!
```

**Equality** operators and common misconceptions about them is that `==` compares values without checking types and `===` compares both values and types.

```js
42 == "42"  // true
42 === "42" // false
```

Actually, `==` use coercion to cast the values to be of the same type. On the other hand when we use strict equality `===` JS won't type cast the values (meaning that if they are of different types they're not equal). Simply, **== is comparison which allows coercion, === is comparison without coercion.** 

[See Reference](https://hackernoon.com/understanding-js-coercion-ff5684475bfc)

#### What is the two conditions of being a `Module`?

1. There must be an outer enclosing function that executes at least one.
2. From inside that functions return at least one inner function(s).

```js
// example 1
var myModule = (function() {
  'use strict';

  return {
    publicMethod: function() {
      console.log('Hello World!');
    }
  };
})();

myModule.publicMethod(); // Hello World!
```

```js
// example 2
define ("foo", function() { // define run the function automatically and assign the return value in 'foo'
  var o = { bar: "bar" };
  return {
    bar: function() {
      console.log(o.bar);
    }
  }
});
```

One important thing is to the **File content** is also a module. e.g. ES6 + module pattern

- By default, File based module is singletone, mean it has only one instance. If we import the File from inside different files it creates only one instance and share with all.

```js
// foo.js
var o = { bar: "bar" };

export function bar() {
  console.log(o.bar);
};

import { bar } from 'foo.js';

bar();  // bar

import * as foo from 'foo.js';

foo.bar();  // bar

```
#### Q. Explain `Hoisting` in JavaScript
When you declare a variable in JavaScript (using "var"), that variable declaration is "hoisted" to the top of the current scope: meaning the top of the current function or the top of the script if the variable isn't in a function.

#### What is the output?

```js
var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};
logIt();
```
**Answer:** `undefined`  
**Explanation:** variable declarations are `hoisted` to the top of the current scope. Variable assignments, however, are not.

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

#### What is `Debouncing` in JavaScript?

There are some browser events that can fire many times within a short timespan very quickly, such as resizing  a window or scrolling
down page. This can cause a serious performance issues.

`Debouncing` is one way to solve this issue by limiting the time that needs to pass by until a function is called. So, it limits the 
rate at which a function can fire.

```
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
```

This function - when wrapped around an event - will execute only after a certain amount of time has elapsed

```
// function to be called when user scrolls
function foo () {
  console.log('You are scrolling');
} 

// wrap our function in a debounce to fire once 2 seconds have gone by
let elem = document.getElementById('container');
elem.addEventListener('scroll', debounce(foo, 2000))
```

**Ref:** [MDN](https://davidwalsh.name/javascript-debounce-function), [FreeCodeCamp](https://medium.freecodecamp.org/3-questions-to-watch-out-for-in-a-javascript-interview-725012834ccb)

##### First, memory is set aside for all necessary variables and `declared functions`.

```js
function getMysterNumber () {  |  // loads like this
  function chooseMystery() {   |  function getMysterNumber() {
    return 12;                 |    function chooseMystery() {
  }                            |      return 12;
                               |    }
  return getMysterNumber();    |   function chooseMystery() {  // it replaced the above chooseMystery function
                               |     return 7;
  function chooseMystery() {   |   }
    return 7;                  |   return getMysterNumber(); // output: 7;
  }                            |
}                              |   }
```

##### Function Expressions are never hoisted! They are treated as assignments.

```js                                 | // loads look like
function getMysteryNumber() {         | function getMysteryNumber() {
  var chooseMystery = function(){     |   var chooseMystery = undefined;
    return 12;                        |   var chooseMystery = undefined;  // replace the above 'chooseMystery'
  }                                   |   chooseMystery = function() {
  return chooseMystery();             |     return 12;
                                      |   }
  var chooseMystery = function() {    |    return chooseMystery();        // return 12;
    return 7;                         |   chooseMystery = function() {  | // this section is unreachable
  }                                   |     return 7;                   | // because it is below return statement
}                                     |   }                             |
                                        }
```

##### Check if 'return' statement is at the top
```js                                 | // loads look like
function getMysteryNumber() {         | function getMysteryNumber() {
  return chooseMystery();             |
  var chooseMystery = function(){     |   var chooseMystery = undefined;
    return 12;                        |   var chooseMystery = undefined;  // replace the above 'chooseMystery'
  }                                   |   return chooseMystery();         // ERROR
                                      |
                                      |   chooseMystery = function() {  | // this section is unreachable
                                      |     return 12;                  | // because it is below return statement
                                      |   }                             |
  var chooseMystery = function() {    |            // return 12;
    return 7;                         |   chooseMystery = function() {  | // this section is also unreachable
  }                                   |     return 7;                   | // because it is below return statement
}                                     |   }                             |
                                        }
```

##### Analyzing Hoisting Load Order

```js
function theBridgeOfHoistingDoom() { | Alrighty, here’s the hoisted version. The function looks for any variables to
  function fellowship() {            | create space for, finds sword, dwarf, fall, and ring, and sets them all to
    return "friends";                | undefined. There’s only one declared function, fellowship, so that comes next.
  }                                  | In this case, there are no replacement declared functions. The executable code
  var sword = "sting";               | that assigns new values or functions to variable has all var keywords popped off.
  var dwarf = function() {           | Any executable code after the first return of sword is excluded from the answer.
    return "axe";                    |
  };                                 | function theBridgeOfHoistingDoom() {
  var fall = "Fly you fools!";       |   var sword = undefined;
  fellowship = function() {          |   var dwarf = undefined;
    return "broken";                 |   var fall = undefined;
  };                                 |   var ring = undefined;
  ring();                            |   function fellowship() {
  return sword;                      |     return "friends";
  fellowship = function() {          |   }
    return "mines"                   |   sword = "sting";
  };                                 |   dwarf = function() {
  sword = function() {               |     return "axe";
    return "glamdring";              |   };
  };                                 |   fall = "Fly you fools!";
  var ring = function() {            |   fellowship = function() {
    return "precious";               |     return "broken";
  };                                 |   };
}                                    |   ring();
                                     |    return sword;
                                     |  }
```
```js
function theBridgeOfHoistingDoom() { |
  var ring = undefined;              | Alrighty, here’s the hoisted version. The function looks for any variables to
  power = undefined;                 | create space for, finds ring and power, and sets them both to undefined. The
  function balrog() {                | order of declared functions is balrog, elf, balrog, wizard, and elf. When older
    return "fire";                   | versions of the loaded functions are replaced, we are left with balrog, wizard,
  }                                  | and then elf. The only executable code that actually ever runs are the lines
  var ring;                          | that precede and include the return of the call to wizard
  function elf() {                   |
    return "pointy ears";            |
  }                                  | function theBridgeOfHoistingDoom() {
  ring = wizard;                     |   var ring = undefined;
  wizard = balrog;                   |   var power = undefined;
  return wizard();                   |   function balrog() {
  function balrog() {                |     return "whip";
    return "whip";                   |   }
  }                                  |   function wizard() {
  function wizard() {                |     return "white";
    return "white";                  |   }
  }                                  |   function elf() {
  var power = ring();                |     return "immortal";
  return elf();                      |   }
  function elf() {                   |   ring = wizard;
    return "immortal";               |   wizard = balrog;
  }                                  |   return wizard();
}                                    | }
```

###### Analyzing load order II

1. For all variable declarations, put the corresponding declarations at the top of the function. Assign them a value of undefined and maintain their order.

2. Now that variable declarations have been placed at the top, remove the original declarations, but leave any associated assignments.

3. Then, hoist all function declarations to immediately after your variable declarations, maintaining their order as well.

4. Any function expression assignment is treated here as executable code, and does not change the load order.

5. Remove any unreachable statements after the first return statement.


```js
function theBridgeOfHoistingDoom() { | Alrighty, here’s the hoisted version. The function looks for any variables to
  function fellowship() {            | create space for, finds sword, dwarf, fall, and ring, and sets them all to
    return "friends";                | undefined. There’s only one declared function, fellowship, so that comes next.
  }                                  | In this case, there are no replacement declared functions. The executable code
  var sword = "sting";               | that assigns new values or functions to variable has all var keywords popped off.
  var dwarf = function() {           | Any executable code after the first return of sword is excluded from the answer.
    return "axe";                    |
  };                                 | function theBridgeOfHoistingDoom() {
  var fall = "Fly you fools!";       |   var sword = undefined;
  fellowship = function() {          |   var dwarf = undefined;
    return "broken";                 |   var fall = undefined;
  };                                 |   var ring = undefined;
  ring();                            |   function fellowship() {
  return sword;                      |     return "friends";
  fellowship = function() {          |   }
    return "mines"                   |   sword = "sting";
  };                                 |   dwarf = function() {
  sword = function() {               |     return "axe";
    return "glamdring";              |   };
  };                                 |   fall = "Fly you fools!";
  var ring = function() {            |   fellowship = function() {
    return "precious";               |     return "broken";
  };                                 |   };
}                                    |   ring();
                                     |    return sword;
                                     |  }

```

###### Analyze Load Order III
Q. What is the output of theBridgeOfHoistingDoom()?

1. If the result is undefined, log an "undefined" string to the console.
2. If the function is unable to complete, log an "ERROR" string to the console.

```js
function theBridgeOfHoistingDoom() {   | Answer: console.log("ERROR");
  var sword = undefined;               | // cause ring() is not a function, it's a string.
  var dwarf = undefined;               |
  var fall = undefined;                |
  var ring = undefined;                |
  function fellowship() {              |
    return "friends";                  |
  }                                    |
  sword = "sting";                     |
  dwarf = function() {                 |
    return "axe";                      |
  }                                    |
  fall = "Fly you fools!";             |
  fellowship = function() {            |
    return "broken";                   |
  }                                    |
  ring();                              |
  return sword;                        |
}                                      |
```                                    

###### Analyzing Load Order IV

```js                                  |  // after hoisting
var a = b();                           |  function b() {
var c = c();                           |  {
a;                                     | 
c;                                     |  var a;
                                       |  var c;
function b() {                         |  var d;
  return c;                            |  a = b();
}                                      |  c = d();
                                       |  a;           // ??
var d = function() {                   |  c;           // ??
  return b();                          |  d = function() {
};                                     |    return b(); 
                                       |  };
```

#### Why `Hoisting` is important?

- `Hoisting` is necessary for `Mutual Recursion`.
- In `C` language we include headerfile (e.g. include #stdio.h), it's one kind of Hoisting

```js
a(1);     // ??, Ans: 39  

function a(foo) {
  if (foo > 20) return foo;
  return b(foo+2);
}
function b(foo) {
  return c(foo) + 1;
}
function c(foo) {
  return a(foo*2);
}
```
#### How to determine what should be the `this` keyword value?

The sequence we should be think is: (priority: top to bottom)

1. Is the function called by **new**?
2. Is the function called by **call()** or **apply()**?
  - Note: `bind()` effectively uses `apply()`
3. Is the function called on a context object? e.g. ob.funcA
4. DEFAULT: global object(except strict mode)

#### Q. How does `this` keyword change in different context?

`this` is a keyword whose value changes depending on how a function gets called. There have `six` different ways where
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


6. **This** In Event Listeners
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

#### What type of scoping rule(s) does JavaScript have?
- Lexical scope
#### What are 3 different ways we can create a new scoped variable?
- `Let` inside a scope
- `Var` inside a function
- `err` in catch close: e.g. catch(err) { ... }

#### What are the **four** things the `new` keyword actually does when we put in front of a function call (**aka: constructor call**)?

1. Create a brand new empty object
2. Newly created object is linked to another object (construction function)
3. Newly created object gets the passed in the `this` keyword to the function call
4. Return the newly created object

#### What is the different between undeclared and undefined?
`Undeclared`: It's never been declared in any scoped we have accessed to
`Undefined`: It has beed in a scope but it does not have currently any value 

#### What is the only value in JS that is not equal to itself?
`NaN` is the only value that is not equal to itself.

```js
if (!Number.isNaN) {
  Number.isNaN = function isNaN(x) {
    return x !== x;
    // NaN === NaN -- false
  }
}
```
#### What does happen when we declare a variable with `var` and `let`?
Declaring with `var` two things are happened:  
1. Hoist the variable at **compile time**.
2. Initialize the Hoisted variable with `undefined` at **runtime**. 

Declaring with `let` only one thing is happened:
1. Hoist the variable

```js
function foo(bar) {                       | var a;      // undefined
  if (bar) {                              | if (bar) {
    console.log(baz);  // ReferenceError  |  let baz;   // uninitialized
    let baz = bar;                        |  console.log(baz);
    var a;                                |  let baz = bar;
  }                                       |
}                                         |
```
**So, `let` is hoisted but not initialized actually.**

#### Compare `null`, `undefined`, `NaN`

A **null** value represents nothing, nonexistent or invalid object or address. It converts to `0` in simple arithmetic operations and it's global object. `null == false` gives us false.

The global **undefined** property represents the primitive value `undefined`. It tells us something has not assigned value; isn't defined. **undefined** isn't converted into any number, so using it in maths calculations returns `NaN`.

**NaN (Not-A-Number)** represents something which is not a number, even though it's actually a number. It's not equal to itself and to check if something is NaN we need to use **isNaN()** function.

All of the above are falsy values so they convert to false.

[Ref](https://codeburst.io/understanding-null-undefined-and-nan-b603cb74b44c)

#### How to write optimized JavaScript

1. **Order of object properties:** always instantiate our object properties in the same order so that hidden classes, and subsequently optimized code, can be shared.
2. **Dynamic properties:** adding properties to an object after instantiation will force a hidden class change and slow down any methods that were optimized for the previous hidden class. Instead, assign all of an object's properties in its constructor.
3. **Methods:** code that executes the same method repeatedly will run faster than code that executes many different methods only once (due to inline caching).
4. **Arrays:** avoid sparse arrays where keys are not incremental numbers. Sparse arrays which don't have every element inside them are a `hash table`. Elements in such arrays are more expensive to access. Also, try to avoid pre-allocating large arrays. It's better to grow as you go. Finally, don't delete elements in arrays. It makes the keys sparse.
5. Tagged values: V8 represents objects and numbers with 32 bits. It uses a bit to know if it is an object (flag = 1) or and integer (flag = 0) called SMI (`SMall Integer`) because of its 31 bits. Then, if a numeric value is bigger that 31 bits, V8 will box the number, turning it into a double and creating a new object to put the number inside. Try to use 31 bit signed numbers whenever possible to avoid teh expensive boxing operation into a JS object. 

[Ref:](https://blog.sessionstack.com/how-javascript-works-inside-the-v8-engine-5-tips-on-how-to-write-optimized-code-ac089e62b12e)


#### What is a constructor call?
- Function call with a `new` keyword
#### What is **[[Prototype]]** and where does it come from?
- It means a object linkage. It comes when we create a new object.
#### How does **[[Prototype]]** affect the behavior of an object?
- When we call an method/property/object of an object, if it is not found then it is delegated the chaining by `[[Prototype]]`.
#### What is the 3 different ways to find where an object (say, `ob`) **[[Prototype]]** is linked to?
- `ob.__proto__`
- Object.getPrototypeOf(ob)
- ob.constructor.prototype

#### `__proto__`, `[[prototype]]` and `prototype`

- `[[Prototype]]` is an object specifies its prototype via the internal property.

```js
const foo = {
  getName: function() {
    return this.name;
  }
};

const a1 = {
  [[prototype]] = foo;
  name: 'sajib';
}

a1.getName(); // sajib
```

- `__proto__` brings direct access to [[Prototype]]
- `prototype` is the **object** that is used to build __proto__ when we create an object with `new`.
- `prototype` is not available on the instances themselves (or, other objects), but only on the constructor functions.
- `prototype` is only available on functions since they are copied from `Function` and `Object`, but in anything else it is not. However, `__proto__` is available everywhere.
- Any method declared directly to `Function` will be considered as `static method`, which means `it exists as local property of` that Function `only and won't available to its instances`.

```js
  function A() {
    function staticMethod() {
      // this is static method and can't access from the instance of A
    }
  }

  const ob = new A();
  ob.staticMethod(); 
  // TypeError: A.staticMethod is not a function
```


======================================================

Some questions to check:

OOP

- How does this changes in different context? How many contexts are there?  
- What is a prototype in JavaScript?  
- How do you create objects in JavaScript?  
- What is the module pattern? When do you use it?  
- What is the factory pattern? When do you use it?  
- FP
- What is immutability?  
- What array methods are immutable?  
- How do you change JavaScript properties while not mutating the object?  
- What is a pure function?  
- How many kinds of actions should a function contain?    
- What are side effects?  
- How do you handle side effects when you write pure functions?  
- AJAX
- What are JavaScript promises?  
- How do you chain promises?  
- How do you catch errors when using promises?  
- How do you use the Fetch API?  
- What does CRUD stand for?  
- How do you query Github’s API to get a list of your own repositories?  
- Best practices
- Why do you avoid global variables?
- Why use strict equality (===) instead of normal equality (==)?  
- How do you use ternary operators to help you write terser code?    
- What ES6 features help you write terser code?  
- What is event bubbling and capturing?  
- How do you delegate events?  
- How do you remove event listeners? When should you remove them?  