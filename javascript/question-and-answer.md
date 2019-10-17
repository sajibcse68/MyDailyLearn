- [Explain Event Delegation](#explain-event-delegation)
- [Describe Event Bubbling](#describe-event-bubbling)
- [What are benefits of a `named function` over a `anonymous function`?](#what-are-benefits-of-a-named-function-over-a-anonymous-function)
- [Difference between `target` and `currentTarget`?](#difference-between-target-and-currenttarget)
- [Explain why the following doesn't work as an IIFE](#explain-why-the-following-doesnt-work-as-an-iife-immediately-invoked-function-expression)
- [Difference between a variable that is: null, undefined, or undeclared](#difference-between-a-variable-that-is-null-undefined-or-undeclared)

---

#### What is asynchronous programming, and why is it important in JavaScript?

- `Synchronous` programming means that, barring conditionals and function calls, code is executed sequentially from top-to-bottom, blocking on long-running tasks such as network requests and disk I/O.
- `Asynchronous` programming means that the engine runs in an event loop. When a blocking or, long time operation is needed, the request is started, and the code keeps running without blocking for the result (running in other place). When the response is ready, and interrupt is fired, which causes an event handler to be run, where the control flow continues. In this way, a single program thread can handle many concurrent operations.
- User interfaces are asynchronous by nature!
- Good to hear:
  - An understanding of what is blocking means, and the performance implications.
  - An understanding of event handling, and why its important for UI code
- Red flags:
  - Unfamiliar with the terms asynchronous or synchronous
  - Unable to articulate performance implications or the relationship between asynchronous code and UI code.

[Ref](https://trello.com/c/5TzQwzMJ/80-what-is-asynchronous-programming-and-why-is-it-important-in-javascript)

#### Explain Event Delegation

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

#### Explain the difference on the usage of following -

```js
function foo() {
  // I am known as a definition or statement
}
```

```js
var foo = function() {
  // i am an expression, i resolve to a value, even if just 'undefined'
  // expression = MDN - an expression is any valid unit of code that resolves to a value
};
```

#### What is `Factory Function`?

Any function that returns a `new object` which is not a Constructor function (not called with `new` keyword).

#### Difference between a variable that is: null, undefined, or undeclared

- Undeclared: never used/defined before
  const bar = foo + 1;

  console.log(typeof bar); // undeclared, but also returns "undefined"

- Undefined:

  - variable declared but no defined value (not initialized)
  - object/array exists but nothing at that key/index
  - function exists but doesn't return anything
  - falsy

    ```js
    let foo;
    const bar = foo; // foo is undefined
    console.log(typeof foo); // "undefined" as a string
    console.log(foo === undefined); // true boolean
    const baz = 'undefined';
    console.log(baz === undefined); // false. Hooray, I guess
    ```

- null:

  - null has a value. It's value is null
  - null is a "nothing" value
  - not zero, not an empty string/object/array
  - falsy

  ```js
  let foo = null;
  console.log(foo === null); // true boolean
  ```

## What does JavaScript `get` or `getter` keyword do?

The `get` syntax **binds an object property to a function** that will be called when that property is looked up.

**Note:**

- It can have an identifier which is either a number or a string
- It must have exactly zero parameters
- It must not appear in an object literal with another `get` or with a data entry for the same property. e.g. `{ get x() }, get x() {})` and `{ x: ..., get x() {}}` are forbidden.

**Examples:**

#### Defining a getter on new objects in object initializers

````js
const obj = {
  log: ['foo', 'bar'],
  get latest() {
    if (this.log.length === 0) return undefined;
    return this.log[this.log.length - 1];
  }
}
console.log(obj.latest); // "bar"

  ```

- Deleting a getter using the `delete` operator

```js
delete obj.latest;
````

#### Defining a getter on existing objects using `defineProperty`.

```js
var o = { a: 0 };
Object.defineProperty(o, 'b', {
  get: function() {
    return this.a + 1;
  }
});

console.log(o.b); // runs the getter, which yeilds a + 1
```

#### Using a `computed` property name

```js
const name = 'foo';

const o = {
  get [name]() {
    return 'bar';
  }
};

console.log(o.foo); // "bar"
```

#### **`Get vs defineProperty()`**

When using `get` the property will be defined on the property of the object while using `Object.defineProperty()` the property will be defined on the instance it is applied to.

```js
class Foo {
  get hello() {
    return 'world';
  }
}

const o = new Foo();
console.log(o.hello); // "world"

console.log(Object.getOwnPropertyDescriptor(o, 'hello')); // undefined

console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(o), 'hello'));
// // { configurable: true, enumerable: false, get: function get hello() { return 'world'; }, set: undefined }
```

## Miscellaneous

#### Output of following snippet?

```js
function foo() {
  let a = b = 0;
  // declares a local variable 'a' and a global variable 'b'. There is no variable 'b' declared in the foo() scope or global scope. So JS interprets 'b=0' expression as window.b = 0
  a++;
  return a;
}

foo();
typeof a; // ???
// 'undefined' -> 'a' is declared within 'foo()' scope
typeof b; // ???
// 'number' -> 'b' is global variable with value 0
```

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
define('foo', function() {
  // define run the function automatically and assign the return value in 'foo'
  var o = { bar: 'bar' };
  return {
    bar: function() {
      console.log(o.bar);
    }
  };
});
```

One important thing is to the **File content** is also a module. e.g. ES6 + module pattern

- By default, File based module is singletone, mean it has only one instance. If we import the File from inside different files it creates only one instance and share with all.

```js
// foo.js
var o = { bar: 'bar' };

export function bar() {
  console.log(o.bar);
}

import { bar } from 'foo.js';

bar(); // bar

import * as foo from 'foo.js';

foo.bar(); // bar
```

#### How to get `Unique` values of an Array?

```js
const uniqueValues = [...new Set([1, 2, 3, 3])];
console.log(uniqueValues);
// [1, 2, 3]
```

#### How can remove all `falsy` values from an Array?

```js
const onlyTrueValues = [0, 1, "Alice", undefined, null, false, "Bob"
  .map(item => {
    // ...
  }).filter(Boolean);

console.log(onlyTrueValues);
// [1, "Alice", "Bob"]
```

#### How to create an Empty Objects?

```js
let emptyArr = Object.create(null);
// emptyArr.__proto__ === "undefined"
```

#### How to require function parameters by force?

```js
const isRequired = () => {
  throw new Error('param is required');
};

const sayHello = (name = isRequired()) => {
  console.log(`Hello ${name}`);
};

sayHello(); // throw an error
sayHello(undefined); // throw an error

sayHello(null); // no error!!
sayHello('Sajib'); // no error
```

#### How to get Query String Parameters?

```js
// say, "?post=1234&action=edit"
const urlParams = new URLSearchParams(window.location.search);

console.log(urlParams.has('post')); // true
console.log(urlParams.get('action')); // "edit"
console.log(urlParams.getAll('action')); // ["edit"]
console.log(urlParams.toString()); // "?post=1234&action=edit"
console.log(urlParams.append('active', '1')); // "?post=1234&action=edit&active=1"
```

#### What is `Debouncing` in JavaScript?

There are some browser events that can fire many times within a short timespan very quickly, such as resizing a window or scrolling
down page. This can cause a serious performance issues.

`Debouncing` is one way to solve this issue by limiting the time that needs to pass by until a function is called. So, it limits the
rate at which a function can fire.

```js
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// another implementation
const debounce = (func, timer) => {
  let timeId = null;
  return (...args) => {
    if (timeId) {
      clearTimeout(timeId);
    }
    timeId = setTimeout(() => {
      func(...args);
    }, timer);
  };
};

document.querySelector('input').addEventListener(
  'keyup',
  debounce(e => {
    console.log('e: ', e);
  }, 1000)
);
```

This function - when wrapped around an event - will execute only after a certain amount of time has elapsed

```js
// function to be called when user scrolls
function foo() {
  console.log('You are scrolling');
}

// wrap our function in a debounce to fire once 2 seconds have gone by
let elem = document.getElementById('container');
elem.addEventListener('scroll', debounce(foo, 2000));
```

**Ref:** [MDN](https://davidwalsh.name/javascript-debounce-function), [FreeCodeCamp](https://medium.freecodecamp.org/3-questions-to-watch-out-for-in-a-javascript-interview-725012834ccb)

#### How to determine what should be the `this` keyword value?

The sequence we should be think is: (priority: top to bottom)

1. Is the function called by **new**?
2. Is the function called by **call()** or **apply()**?

- Note: `bind()` effectively uses `apply()`

3. Is the function called on a context object? e.g. ob.funcA
4. DEFAULT: global object(except strict mode)

#### Convert a value to String

Here, 5 ways are described to covert a value to String:

```js
const value = 12345;

// Concat Empty String
value + '';

// Template Strings
`${value}`;

// JSON.stringify
JSON.stringify(value);

// toString()
value.toString();

// String()
String(value);

// RESULT
// '12345'
```

Let's compare some different type of variables converting to String

```js
// string
const string = 'hello';
string + ''; // 'hello'
`${string}`; // 'hello'
JSON.stringify(string); // '"hello"'
string.toString(); // 'hello'
String(string); // 'hello'

// number
const number = 123;
number + ''; // '123'
`${number}`; // '123'
JSON.stringify(number); // '123'
number.toString(); // '123'
String(number); // '123'

// boolean
const boolean = true;
boolean + ''; // 'true'
`${boolean}`; // 'true'
JSON.stringify(boolean); // 'true'
boolean.toString(); // 'true'
String(boolean); // 'true'

// array
const array = [1, '2', 3];
array + ''; // '1,2,3'
`${array}`; // '1,2,3'
JSON.stringify(array); // '[1,"2",3]'
array.toString(); // '1,2,3'
String(array); // '1,2,3'

// object
const object = { one: 1 };
object + ''; // '[object Object]'
`${object}`; // '[object Object]'
JSON.stringify(object); // '{"one":1}'
object.toString(); // '[object Object]'
String(object); // '[object Object]'

// symbol
const symbolValue = Symbol('123');
symbolValue + ''; // ❌ TypeError
`${symbolValue}`; // ❌ TypeError
JSON.stringify(symbolValue); // undefined
symbolValue.toString(); // 'Symbol(123)'
String(symbolValue); // 'Symbol(123)'

// undefinedValue
const undefinedValue = undefined;
undefinedValue + ''; // 'undefined'
`${undefinedValue}`; // 'undefined'
JSON.stringify(undefinedValue); // undefined
undefinedValue.toString(); // ❌ TypeError
String(undefinedValue); // 'undefined'

// nullValue
const nullValue = null;
nullValue + ''; // 'null'
`${nullValue}`; // 'null'
JSON.stringify(nullValue); // 'null'
nullValue.toString(); // ❌ TypeError
String(nullValue); // 'null'
```

We can see that `String()` handle the `null` and `undefined` quite well. No errors are thrown - unless that what we want. If we are not sure about our data type then `String()` is always good by default.

[Reference](https://medium.com/dailyjs/5-ways-to-convert-a-value-to-string-in-javascript-6b334b2fc778)

#### Convert a string to `spinal string`.

Spinal string case is all-lowercase-words-joined-by-dashes

```js
// Input:
This Is Spinal Tap
thisIsSpinalTap
The_Andy_Griffith_Show
Teletubbies say Eh-oh
AllThe-small Things

// Output:
this-is-spinal-tap
this-is-spinal-tap
the-andy-griffith-show
teletubbies-say-eh-oh
all-the-small-things
```

Solutions:

```js
function spinalCase(str) {
  // Create a variable for the white space and underscores
  var regex = /\s+|_+/g;

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

#### What are the **`four`** things the `new` keyword actually does when we put in front of a function call (**aka: constructor call**)?

1. Create a brand new empty object (aka constructed) out of thin air.
2. Newly created/constructed object is linked to (`[[Prototype]]`) the function's prototype.
3. Newly created/constructed object is set as the `this` binding for that function call.
4. Unless the function returns its own alternate object, the new-invoked call will automatically return the newly constructed object.

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
  };
}
```

#### What does happens when we declare a variable with `var` and `let`?

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

#### Implement an `Event Emitter` that supports standard operations

Using `ES2015` classes:

```js
class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(event, listener) {
    if (typeof this.events[event] !== 'object') {
      this.events[event] = [];
    }
    this.events[event].push(listener);
    return () => this.off(event, listener);
  }
  off(event, listener) {
    if (typeof this.events[event] === 'object') {
      const idx = this.events[event].indexOf(listener);
      if (idx > -1) {
        this.events[event].splice(idx, 1);
      }
    }
  }
  emit(event, ...args) {
    if (typeof this.events[event] === 'object') {
      this.events[event].forEach(listener => listener.apply(this, args));
    }
  }
  once(event, listener) {
    const remove = this.on(event, (...args) => {
      // tricky, think how it's working!
      remove();
      listener.apply(this, args);
    });
  }
}
```

Using `plain prototype` with factory function

```js
const anEventEmitter = {
  events: {},
  on(event, listener) {
    if (this.events[event] !== 'object') {
      this.events[event] = [];
    }
    this.events[event].push(listener);

    return () => this.off(event, listener);
  }

  off(event, listener) {
    if(this.events[event] === 'object') {
      const idx = this.events[event].indexOf(listener);
      if (idx > -1) {
        this.events[event].splice(idx, 1);
      }
    }
  }

  emit(event, ...args) {
    if (this.events[event] === 'object') {
      this.events[event].forEach(listener => listener.apply(this, args));
    }
  }

  once(event, listener) {
    const remove = this.on(event, (...args) => {
      remove();
      listener.apply(this, args);
    });
  }
};

const EventEmitter = () => ({
  __proto__: anEventEmitter,
  events: {}
})
```

[Ref](https://gist.github.com/mudge/5830382#gistcomment-2623252)

#### Live Reloading vs Hot Reloading

- `Live Reloading` relaods or refreshes the entire app when a file changes. For example, if we have four links deep into our navigation and saved a change, live reloading would restart the app and load the app back to the initial route.
- `Hot Reloading` only refreshes the files that were changed without losing the state of the app. If we have four links deep into our navigation and saved a change to some styling, the state would not change, but the new styles would appear on the page without having to navigate back to the page we are on because we would still be on the same page

[Reference](https://stackoverflow.com/a/41429055/4133798)

#### How to write optimized JavaScript

1. **Order of object properties:** always instantiate our object properties in the same order so that hidden classes, and subsequently optimized code, can be shared.
2. **Dynamic properties:** adding properties to an object after instantiation will force a hidden class change and slow down any methods that were optimized for the previous hidden class. Instead, assign all of an object's properties in its constructor.
3. **Methods:** code that executes the same method repeatedly will run faster than code that executes many different methods only once (due to inline caching).
4. **Arrays:** avoid sparse arrays where keys are not incremental numbers. Sparse arrays which don't have every element inside them are a `hash table`. Elements in such arrays are more expensive to access. Also, try to avoid pre-allocating large arrays. It's better to grow as you go. Finally, don't delete elements in arrays. It makes the keys sparse.
5. Tagged values: V8 represents objects and numbers with 32 bits. It uses a bit to know if it is an object (flag = 1) or and integer (flag = 0) called SMI (`SMall Integer`) because of its 31 bits. Then, if a numeric value is bigger that 31 bits, V8 will box the number, turning it into a double and creating a new object to put the number inside. Try to use 31 bit signed numbers whenever possible to avoid teh expensive boxing operation into a JS object.

[Ref:](https://blog.sessionstack.com/how-javascript-works-inside-the-v8-engine-5-tips-on-how-to-write-optimized-code-ac089e62b12e)

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
