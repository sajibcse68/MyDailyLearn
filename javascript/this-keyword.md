## Q. How does `this` keyword change in different context?

`this` is a keyword whose value changes depending on how a function gets called. This is know as the `context`.

Let's see `six` different cases where `this` can take new values:

1. `this` in global context
2. `this` in object construction
3. `this` in an object method
4. `this` in a simple function
5. `this` in an arrow function
6. `this` in an event listener

### **1. `This` In a Global Context**

In a global context, this defaults to the `window` object in the browser e.g. `this` is called outside of any function.

Here, `sayName()` is called as a standalone function (not as a method of an object), so `this` refers to the **global** object (`window`).

```js
function sayName() {
  console.log(this.name);
}

const name = 'Global';
sayName(); // 'Global'
```

### **2. `This` In Object Constructor**

When we create a new instance of an object with the `new` keyword, `this` refers to the instance.

> when a function is used as a constructor with the "new" keyword, a new object is created and the "this" keyword inside the function refers to the newly created object, which is returned implicitly by the constructor function.

```js
function Human(age) {
  this.age = age;
}

const alice = new Human(10);
const bob = new Human(20);

console.log(alice); // this.age = 10
console.log(bob); // this.age = 20
```

### **3. `This` In An Object Method**

When `this` keyword inside an object method refers to the object that the method is a property of.

```js
const ob = {
  name: 'Sajib',
  sayThis: function () {
    console.log(this);
  },
};
ob.sayThis(); // Sajib
```

However, the value of `this` can **change** if the method is invoked using a different context or, if the method is assigned to a variable and invoked as a standalone function.

```js
let ob = {
  name: 'Sajib',
  sayName: function () {
    console.log(this.name);
  },
};
let anotherOb = { name: 'Frontend' };
let sayName = ob.sayName;

sayName(); // undefined, this = window
sayName.call(anotherOb); // 'Frontend', this = anotherOb
```

### 4. `This` In A Simple Function

Inside simple functions `this` refers to `Window`. Simple functions are functions we know extremely well.

Example 1:

```js
function simpleFunc() {
  console.log(this); // Window
}

const ob = {
  sayThis() {
    simpleFunc();
  },
};

simpleFunc(); // Window
ob.sayThis(); // Window
```

Anonymous functions written in the same form are also considered as simple functions.

Example 2:

```js
const o = {
  speakLeet() {
    console.log('Hello World!');
  },
  doSomethingLater() {
    setTimeout(function () {
      this.speakLeet(); // error
    }, 1000);
  },
};
```

**Unfortunately**, the code above results in an error. The error occurs because `this` is set to `Window` in the `setTimeout` methods. **`Window` does not have a `speakLeet` method**.

**Exception:** In strict mode, rules are different. Context remains as whatever it was set to.

Example 3:

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

Our `setInterval` function is not called on a declared object. It also isn't being called with the `new` keyword (only the `Counter()` function is) And lastly, we are not using `call`, `bind`, or `apply`. Here, **setInterval** is just a normal function() so, the value of `this` is being bound to **global object**!

**N.B.** The arrow function does not create its own `this`, the `this` value of the enclosing execution context is used. Thus, in the following code, the `this` within the function that is passed to `setInterval` has the same values as `this` in the enclosing function.

We can solve the issue using Arrow function.

Example 4:

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

The original `this` binding created by the `Counter` constructor function is preserved. Inside the `setInterval` function, `this` is still bound to our newly created `b` object!

Example 5:

```js
function f2() {
  'use strict';

  return this;
}

console.log(f2() === window); // False
console.log(f2() === undefined); // True
```

`this` was not defined, so it's remained **`undefined`**.

### 5. `This` is in Arrow Function

In a arrow functions `this` is always the same as `this` around it (in its immediate scope, also called lexical scope).
So, the `this` context stays as the object, not `Window`.

With arrow functions, the `speakLeet` example above could be written:

```js
const ob = {
  doSomethingLater: function () {
    setTimeout(() => this.speakLeet(), 1000);
  }
  speakLeet: function () {
    console.log("Method of 'ob' not Window");
  }
}

ob.doSomethingLater(); // Method of 'ob' not Window
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

  add: function (a) {
    var f = (v) => v + this.base;

    return f(a);
  },

  addThroughCall: function (a) {
    var f = (v) => v + this.base;
    var b = {
      base: 2,
    };

    return f.call(b, a);
  },
};

console.log(adder.add(1)); // output: 2
console.log(adder.addThruCall(1)); // output: 2
```

### **6. This** In Event Listeners

When the event listener fires, `this` is set to the HTML element that fired the event.

```js
let button = document.querySelector('button');

button.addEventListener('click', function () {
  console.log(this); // button
});
```

## Default Rules

- if we are in `Strict` mode then `this = undefined` otherwise `this = global object`

```js
function foo() {
  console.log(this.bar);
}

var bar = 'bar1';
var o2 = { bar: 'bar2', foo: foo };
var o3 = { bar: 'bar3', foo: foo };

foo(); // bar1
o2.foo(); // bar2
o3.foo(); // bar3
```

## Hard Binding

```js
function foo() {
  console.log(this.bar);
}

var o1 = { bar: 'bar' };
var o2 = { bar: 'bar2' };

var foo2 = foo;

foo3 = function () {
  foo2.call(o1);
};
// foo = function(){ foo2.call(o1); };

foo3(); // bar
foo3.call(o2); // bar !! cause it is hard binding to o1

// foo();
// foo.call(o2); // bar !! cause it is hard binding to o1
```

- Using `custom bind` utility function

```js
function bind(fn, o) {
  return function () {
    fn.call(o);
  };
}

function foo() {
  console.log(this.bar);
}

var o1 = { bar: 'bar' };
var o2 = { bar: 'bar2' };

var foo2 = foo;

foo = bind(foo, o1);

foo3(); // bar
foo3.call(o2); // bar !! cause it is hard binding to o1
```

## Priority of `this` binding (top -> bottom: high -> low)

1. Was the function called with `new`?
2. Was the function called with `call` or `apply` specifying an explicit `this`?
3. Was the function called via a containing/owning object (context)?
4. DEFAULT: global object (except strict mode)
