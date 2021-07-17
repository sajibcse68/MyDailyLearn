#### Notes

- JavaScript was created by `Brendan Eich` while he was working for Netscape back in May `1995`. He created the first version of JavaScript in only `10 days` and named it **Mocha**. It was renamed to **LiveScript** on `September` 1995. And then by `December` 1995, it was renamed again to **JavaScript**.

- When browser find the `<script>` tag to download, all other parallel/concurrent downloading halts. (6 files can be downloaded by modern chrome browser)
- if we add `async` in `<script>` tag then it would be downloaded asynchronously
  - e.g. `<script type="text/javascript" src="http://www.abc.com/test.js" async></script>`
- Efficient choices for `string concatenation` is `+=`
  - e.g. const a = ''; a += 'b'; a += 'c';
- We can't .bind() a function multiple time.
- Use a document fragment to insert additions all at once. Fragments are invisible containers that hold multiple DOM elements without
  being a node itself.
- Every functions receives two additional parameters: `this`, `arguments`.
- When a function is stored as a property of an object, we call it a `method`. When a method is invoked, `this` is bound to that object.
- JavaScript has function scope only\*
- V8 transtales JavaScript code into more efficient machine code instead of using and interpreter. V8 doesn't produce bytecode or any intermediate code.
- Objects are built by constructor call (a function is called by `new` keyword). A constructor makes an object **linked to** its own `prototype`.
- Exciting features of ES6: destructuring, default parameter values, symbols, concise methods, computed properties, arrow functions, block scoping, promises, generators, iterators, modules, proxies, weakmaps, etc. etc.
- JS MUST Know: `Scoping`, `Closures`, `Hoisting`, `This`, `Data Structures: Objects and Arrays`, `Design Patterns`, `Callbacks and Promises`.

```javascript
var list = document.getElementById('kotwList');
var kotw = ['Jenna Rangespike', 'Neric Farthing', 'Darkin Stonefield'];

var fragment = document.createDocumentFragment();
// First we create a fragment, which will function as a staging area to hold all of our new `li` elements

const kotwLen = kotw.length;
for (var i = 0, len = kotwLen; i < len; i++) {
  var element = document.createElement('li');
  element.appendChild(document.createTextNode(kotw[i]));
  fragment.appendChild(element);
  // now we add each new `li` element to the staging fragment, instead of to the document itself
}
list.appendChild(fragment);
// Finally, we append all of our new text nodes in one fell swoop, using only one DOM touch!
```

- Every `var` keywords adds a look-up for the JavaScript parser that can be avoided with comma extensions.
- For concatenation over an array's contents,`join()` method is faster (inherited from the Array prototype)
- `console.time('timer name')` and `console.timeEnd('timer name')`
  - to unite timer boundaries into one timer, their parameter labels must match
  - output: timer name 0.036 ms
  - `console.time` automatically prefaces the time measurement with the label we passed in a `parameter, plus a colon`.
- The `triple-equal (===)` comparator compares both `type and contents`. `===` seeks a `strict` equality.
- The `instanceof` operator helps identity objects.
- `Exceptions`: are run time errors.
- JavaScript `with` keyword is somewhat unreliable and often expensive.
- Keyword `with` tries and technically does limit redundancy, but makes us rather unsure about scope.
- Use variables to cache objects (it is more clear than `with` and also no lengthy nested object names!)
- JavaScript's `eval` keyword may not be evil, but it can affect legibility, an ability to debug and performance.

## Track of What's new in JavaScript (ECMAScript)

### ECHMAScript 2020 (ES2020)

#### BigInt

```js
// MAX_SAFE_NUMBER (2^53 - 1) double-precision floating-point format

const a = Number.MAX_SAFE_NUMBER + 1; // 9007199254740992
const b = Number.MAX_SAFE_NUMBER + 2; // 9007199254740992

a === b; // true!! | 9007199254740992

// using BigInt

const x = BigInt(9007199254740994); // 9007199254740994
const y = BigInt(9007199254740998); // 9007199254740998
// shortcut
// const x = 9007199254740994n; // 9007199254740994
// const y = 9007199254740998n; // 9007199254740998

typeof x; // bigint
const l = 10;
typeof l; // number
const test = 10n + 10n; // 20
```

#### for .. in

`for..in` is not new but it's implementations has been changed.

```js
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(obj[key]); // 1, 2, 3
}
```

#### matchAll

`matchAll` is basically an improve version of `match`.

```js
let str = 'I love JavaScript yes I do JavaScript';

let result = str.match(/JavaScript/); // [ 'JavaScript', index: 7, input: ...]
let result = str.match(/JavaScript/g); // [ 'JavaScript', 'JavaScript']

// using matchAll
let result = str.matchAll(/JavaScript/g); // [Iterator]
console.log(...result);
// output
[
  index: 7,
  input: 'I love JavaScript yes I do JavaScript',
  groups: undefined
]
[
  index: 27,
  input: 'I love JavaScript yes I do JavaScript',
  groups: undefined
]
```

#### Promise.allSettled

```js
const promise1 = Promise.reject('reject');
const promise2 = Promise.resolve('resolve');
const promise1 = Promise.resolve('another resolve');

const promiseArr = [promise1, promise2, promise3];

Promise.all(promiseArr).then(a => console.log(a)); // catch reject

Promise.allSettled(promiseArr).then(a => console.log(a));
// [
//   {status: 'rejected', reason: 'reject},
//   {status: 'fulfilled', value: 'resolve},
//   {status: 'fulfilled', value: 'another resolve},
// ]
```

#### optional chaining

```js
const obj = { a: { erik: { name: 'Erik Hanchett' }}};

if (obj && obj.a && obj.a.erik && obj.a.erik.name) { ... }

// using optional chaining
const name = obj.a?.erik.name; // Erik Hanchett
const name = obj.a?.john.name; // undefined
```

#### Nullish coalescing operator

```js
let foo = false || 'erik'; // undefined
let foo = null || 'erik2'; // erik2

// using Nullish coalescing operator

foo = null ?? 'erik string'; // 'erik string'
foo = false ?? 'erik string'; // false

```

### ECHMAScript 2017 (ES8)

1. **Object.values()** is a new function that's similar to `Object.keys()` but returns all the values of the Object's own properties any value(s) in the prototypical chain.

```js
const ob = { a: 'foo', b: 12, c: true };

// ES2015
const values = Object.keys(ob).map((key) => ob[key]);
console.log(values); // ["foo", 12, true]

// ES2017
const values = Object.values(ob);
console.log(values); // ["foo", 12, true]
```

2. **Object.entries()** is related to `Object.keys`, but instead of returning just keys, it returns both keys and values.

```js
// Example 1
const ob = { a: 'foo', b: 12, c: true };

// ES 5.1
Object.keys(ob).forEach(function (key) {
  console.log('key: ' + key + ' value: ' + ob[key]);
});

// ES8
for (let [key, value] of Object.entries(ob)) {
  console.log(`key: ${key} value: ${value}`);
}
```

3. **String Padding:** Two instance methods were added to String -- `String.prototype.padStart` and `String.prototype.padEnd` -- that allow appending/prepending either and empty string or some other string to the start or the end of the original string.

```js
'someString'.padStart(numberOfCharacters [, stringForPadding]);

'5'.padStart(10)              // '         5'
'5'.padStart(10, '=*')        // '=*=*=*=*=5'

'5'.padEnd(10, '=*')        // '5         '
'5'.padEnd(10, '=*')        // '5=*=*=*=*='
```

4. **Object.getOwnPropertyDescriptors** method returns all the details (including getter `get` and setter `set` methods) for all the properties of a given object.
   The main motivation to add this is to allow shallow copying / cloning and object into another object that also copies getter and setter functions as opposed to `Object.assign`.

> Object.assign shallow copies all the details except getter and setter functions of the original source object.

```js
// Before
var Car = {
  name: 'BMW',
  price: 1000000,
  set discount(x) {
    this.d = x;
  },
  get discount() {
    return this.d;
  }
};
// print details of Car object's 'discount' property
console.log(Object.getOwnPropertyDescriptor(Car, 'discount));
// {
//   get: [Function: get],
//   set: [Function: set],
//   enumerable: true,
//   configurable: true
// }

// Copy Car's properties to ElectricCar using Object.assign
const ElectricCar = Object.assign({}, Car);

// Print details of ElectricCar object's 'discount' property
console.log(Object.getOwnPropertyDescriptor(Car, 'discount));
// {
//   value: undefined,
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

Note: the getter and setter method are missing in ElectricCar object for 'discount' property!


// Copy Car's properties to ElectricCar2 using Object.defineProperties
// and extract Car's properties using Object.getOwnPropertyDescriptors
const ElectricCar2 = Object.defineProperties({}, Object.getOwnPropertyDescriptors(Car));

// Print details of ElectricCar2 object's 'discount' property
console.log(Object.getOwnPropertyDescriptor(ElectricCar2, 'discount));
// {
//   get: [Function: get],
//   set: [Function: set],
//   enumerable: true,
//   configurable: true
// }

Note: getters and setters are present in the ElectricCar2 object for 'discount' property!
```

5. Add **Trailing Commas** in the function parameters. It is added to help with tools like `git blame` to ensure only new developers get blamed.

```js
// ECHMAScript 2017
function Person(
  name,
  age // allow trailing commas
) {
  this.name = name;
  this.age = age;
}
```

6. **Async/Await:** `Async` allows us to not deal with callback hell and make the entire code look simple. The `async` keyword tells JavaScript compiler pauses whenever it reaches the `await` keyword within that function. It assumes that the expression after `await` returns a promise and waits until the promise is `resolved` or `rejected` before moving further.

```js
// ES2015 promise
function getAmount(userId) {
  getUser(userId)
    .then(getBankBalance)
    .then(amount => {
      console.log(amount);
    });
}

// ES2017
async function getAmount2(userId) {
  var user = await getUser(userId);
  var amount = await getBankBalance(user);
  console.log(amount);
}

getAmount('1');  // $1234
getAmount2('1'); // $1234

function getUser(userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('john');
    }, 1000)
  })
}

function getBankBalance(user) {
  return new Promise (resolve, reject) {
    setTimeout(() => {
      if (user === 'john') {
        resolve('$1000');
      } else {
        reject('unknown user');
      }
    }, 1000)
  }
}
```

```js
// Example 2: Parallel call
// Async functions themselves return a Promise!
async function doubleAndAdd(a, b) {
  [a, b] = await Promise.all([doubleAfter1Sec(a), doubleAfter1Sec(b)]);
  return a + b;
}

doubleAndAdd(1, 2).then(console.log);

function doubleAfter1Sec(params) {
  return new Promise((resolve) => {
    setTimeout(resolve(param * 2), 1000);
  });
}
```

[See Reference](https://medium.freecodecamp.org/here-are-examples-of-everything-new-in-ecmascript-2016-2017-and-2018-d52fa3b5a70e)

### ECHMAScript 2016 (ES7)

1. **Array.prototype.includes:** `includes` is a simple method on the Array and helps to easily find if the items is in the Array (including `NaN` unlike indexOf).

```js
const arr = [1, 2, 3, 4, NaN];

// Instead of
if (arr.indexOf(3) >= 0) {
  console.log(true);
}

// Use
if (arr.includes(3)) {
  console.log(true);
}

// Note: the indexOf does not work for searching NaN
arr.includes(NaN); // true
arr.indexOf(NaN); // -1 (doesn't work for NaN)
```

**N.B.** The JS spec people wanted to name it `contains`, but this was apparently already used by **Mootools** so they used `includes`.

2. **Exponentiation infix operator:** Math operation like addition and subtraction have infix operators like `+` and `-`, respectively. Similar `**` operator was introduced instead of `Math.pow`.

```js
// Instead of
Math.pow(7, 2); // 49

// Use
7 ** 2; // 49
```

## Closures and Event Listeners

#### The Problem:

```js
var nums = [1, 2, 3];
var len = nums.length;

for (var i = 0; i < len; i++) {
  var nowNum = nums[i];

  // Creating a DOM element for the number                  // Specifically, we're alerting the `nowNum` variable that's defined
  var div = document.createElement('div'); // outside of this inner function. Each of these inner functions are
  div.textContent = nowNum; // pointing to the same `nowNum` variable... the one that changes on
  // each iteration, and which equals 3 at the end of the loop.
  // when click, alert the value of `num`                   // Whenever the anonymous function is called on the click event, the
  div.addEventListener('click', function () {
    // function will reference the same `nowNum` (which now equals 3)
    alert(nowNum);
  });

  // finally add the `div` element to the document
  document.body.appendChild(div);
}
```

Output: 3 3 3 (when we click on 1, 2, 3 !!)

#### Solve the problem:

```// function(numCopy) is outer function and invoking immediately
elem.addEventListener('click', (function(numCopy) {  // by wrapping it in parentheses and calling it right away, passing
      return function() {                            // in `nowNum`. Inside the outer function the value is known as `numCopy`
        alert(numCopy);                              // Now, if doesn't matter that `nowNum` changes later down the line.
      };                                             // We stored the value of `nowNum` in `numCopy` inside our outer function.
})(nowNum));                                         // Lastly, the outer function returns the inner function to the event listener.
                                                    // Because of the way JavaScript scope works, that inner function has access to
                                                    // `numCopy` which will never change.

```

#### Returning from a `finally` block (with try/catch)

If the `finally` block returns a value, this value becomes the `return` value of the entire `try-catch-finally` block production, regardless of any `return` statements in the `try` and `catch` blocks. This includes exceptions thrown inside of the `catch` block:

```
(function() {
  try {
    try {
      throw new Error
    } catch( err ) {
      console.error('inner', err.message);
      throw err;
    } finally {
      console.log('finally');
      return;
    }
  }
  catch(ex) {
    console.error('outer: ', ex.message);
  }
})();

// Output:
// 'inner' 'oops'
// finally
```

The `outer 'oops'` is not thrown because of the return in the finally block. The same would apply to any value returned from the catch block.

## Object Oriented JavaScript (Udacity)

#### Extend vs Object.create(): Property Lookup of Delegated Objects

```js
const gold = { a: 1 };
console.log(gold.a); // 1
console.log(gold.z); // undefined

const blue = extend({}, gold); // copy one time
blue.b = 2;
console.log(blue.b); // 2
console.log(blue.z); // undefined

var rose = Object.create(gold); // ongoing lookup time delegation
console.log(rose.a); // 1
console.log(rose.b); // undefined, no `b` in both rose or gold
rose.b = 3;
console.log(rose.b); // 3
console.log(rose.z); // undefined, no `z` in both rose or gold

gold.z = 3;
console.log(blue.z); // undefined, no 'z' in blue, here 'extend' was one time copy from 'gold'
console.log(rose.z); // 3, since there is no 'z' in rose, delegation goes through to gold, which does have gold.z
```

#### Object Decorator Pattern

```js                                       | var amy = carlike({}, 1);
var carlike = function(obj, loc){           | amy.move();
  obj.loc = loc;                            |
  obj.move = function(){                    | var ben = carlike({}, 9);
    obj.loc++;                              | ben.loc++;
  }                                         |
  return obj;                               |
}
```

#### Functional Classes

- Building functions within code execution rather than at program load time

```js
function funcName(a, b) {
  // this is declared function
  // this function is loaded in memory when the program/code is run and held there until we use it
}

var funcName = function (a, b) {
  // ^ the function keyword will now assign the following function to the variable
  // loads only when the program reaches the line of code
  // Note the semicolon, it assigns the entire function to a variable
};
```

## JavaScript Module CheatSheet

#### Different Ways to Export and Import

```js
// Name Export | Name Import
export const name = 'value';
import { name } from '...';

// Default Export | Default Import
export default 'value';
import anyName from '...';

// Rename Export | NameImport
export { name as newName }
import { newName } from '...';

// Name + Default | Import All
export const name = 'value'
export default 'value
import * as anyName from '...'

// Export List + Rename | Import List + Rename
export {
  name1,
  name2 as newName2
}
import {
  name1 as newName2,
  newName2
} from '...'
```

[Ref](https://dev.to/samanthaming/javascript-module-cheatsheet-5b4o)

## Debugging Tips

#### How to find DOM elements quickly?

Mark a DOM elements panel ans use it in your console. Chrome inspector keeps the `last five (5)` elements panel in history so that the final marked element displays as `$0`, the second to last marked element `$1` and so on.

#### Use of console.time() and console.timeEnd()

It can be super useful to know exactly how long something has taken to execute when debugging slow tools.

```js
console.time('Timer1');

var items = [];
for (var i = 0; i < 10000; i++) {
  items.push({ index: i});
}

console.timeEnd('Timer1');

// Output:
Timer1: <15.920>ms
```

#### Use of `console.count()` and `console.countReset()`

Logs are the number of times that this particular call to `count()` has been called. This function takes an optional argument `label`.

```js
var user = '';

function greet() {
  console.count(user);
  return 'hi ' + user;
}

user = 'bob';
greet();
user = 'alice';
greet();
greet();
console.count('alice');

// Output:
('bob: 1');
('alice: 1');
('alice: 2');
('alice: 3');
```

`console.countReset()` is used to clear a counter.

#### Use of `console.dir()`

console.dir() outputs the object with properties where console.log() shows the string output.

```js
console.dir(document.body);
console.log(document.body);
```

#### Use of `console.dirxml()`

console.dirxml() displays the object in xml representation. console.dirxml() and console.log() is identical to output.

```js
console.dirxml(document.body);
```

#### Use of `console.error()`

console.error() displays a message to the console with an error style (error icon + font color red).

```js
$.ajax({
  url: 'test.url.sajib.bd',
  type: 'GET',
  error: function (resp) {
    console.log(resp.statusText);
    console.error(resp.statusText);
  },
});
```

#### Use of `console.group()`, `console.groupCollapsed()` and `console.groupEnd()`

#### Get trace and print the stack trace a function calling

`console.trace()` creates a views and triggers events, so eventually we'll want to know what caused the function call.

```js
function app() {
  function doSomething() {
    var a = 1;
    var b = 2;
    alert(sumFunction(a, b));
  }

  function sumFunction(a, b) {
    console.trace('Tracing sumFunction');
    return a + b;
  }

  doSomething();
}

app();
```

#### Use of `console.table()`

This particular method is incredibly useful to describe an object or array content in a human-friendly table. It makes inspection and logging of nested and complex arrays/objects

```js
const users = [
  { name: 'Marco', age: 26 },
  { name: 'Leo', age: 24 },
];

// Log a table with the users information
console.table(users);
```

#### Add a debugger in a function.

Use `debug(funcName)` in the console and script will stop when it reaches the function we passed in.

#### Watch specific function calls and its arguments

In the chrome console, we can keep an eye on specific functions. Every time the function is called, it will be logged with the values that it was passed in.

```js
var func1 = function (a, b, c) {
  //...
};

// write in chrome console
monitor(func1);
func1(1, 2);
```

`func1` expects 3 arguments, but only 2 is passed in.

#### Use of `console.memory`

- If performance issue is even trickier, and we are looking for a sneaky memory leak then `cosole.memory` (property, not a function) to check out our heap size status.

```js
console.memory;
```

#### Quickly access elements in the console

A faster way to do a querySelector in the console is with the dollar sign. `$('css-selector')` will return the first match of CSS selector. `$$('css-selector')` will return all of them. it we should use an element more than once, it's worth saving it as a variable.

## Miscellaneous

#### Change the `tooltip` value with js when button is clicked

```
// html part
  <a class="btn" data-toogle="tooltip" data-placement="top" data-original-title="Copy">Click me</span></a>
/*
  N.B. `data-original-title` is changing(Copy/Copied) dynamically by js,
 can also use `title`, `title` originally converted to `data-original-title`
*/

// Trigger this code for `click` event
  const html = e.target.closest('.tooltip-show');
  $(html).removeAttr('data-original-title').attr('data-original-title', 'Copied');
  $(html).tooltip('show');

// Trigger this code for `mouseleave` event
  $(('.tooltip-show')).removeAttr('data-original-title').attr('data-original-title', 'Copy');
```

#### Check if specific html portion is visible or not!

```js
var html = $(this).closest('.box');
html.find('.file-data').toggle();
const btnTake = html.find('.show-hide-btn');
if (html.find('.file-data').is(':visible')) {
  btnTake.text('Hide');
} else {
  btnTake.text('Show');
}
```

#### Check if an object has a key

```js
if (Object.prototype.hasOwnProperty.call('myObject', 'key') {
  return true;
}

Or,

if ('key' in 'myObject') {
  return true;
}
```

#### Implement a function which allows us iterate over first `n` numbers.

In JavaScript, `iterator` is a design pattern that allows us to traverse over a list or collection.

**String, Array, Map, Set, TypedArrays** follow the iterator protocol.

- `Iterable` Protocol: the object must define a special method **@@iterator** (as `Symbol.iterator` key) which takes zero arguments and returns an object which itself should follow the `iterator` protocol.

- `Iterator` Protocol: the object must define a method named `next`, which itself returns an object with two properties.
  1. `value`: the current item in iteration
  2. `done`: a boolean, that represents whether the iteration is finished or not. `done=true` means iteration is finished

```js
function makeIterable(end = 50) {
  let i = 0;
  const iteratorFunc = () => {
    const iterator = {
      next() {
        i += 1;
        if (i <= end) {
          return {
            value: i,
            done: false
          }
        }
        return { done: true }
      },
    };
    return iterator;
  };
  return {
    [Symbol.iterator]: iteratorFunc,
  };
}

const numbersTill100 = makeIterable(100);
for (const i for numbersTill100) {
  // 1, 2, 3, ........, 99, 100
}
```

The `@@iterator` method is only called once at the beginning of the `for..of` loop. So, we can write:

```js
for (const i for makeIterable(100)) {
  // 1, 2, 3, ........, 99, 100
}
```

#### Why `Eval` should be avoided!

```
function regimentmotto(number, motto) {
    eval('regiment' + number + ".motto = '" + motto + "'");
}
// here the `eval` method will take a string as a parameter, start the JS compiler, and treat that string as if it were
// a line of code to execute
regimentmotto(1, 'The king's motto');  // will give compile error for `king's` "'" comma, compiler treats as incomplete string.

// Fix compile error
eval('regiment' + number).motto = motto;
// Try to minimize the operations that your new mini-program needs to engage in... which will also have the benefit of
// improving your debug compability.

```

- Eval is most often misused for just this kind of `mapping number's to objects`, but an is much more efficient.
- Eval might be usefull for dynamic code or uncontrollable data, but it's still treating the string as a program to expensively compile
- Use `JOSN,parse()` to ensure only json is accepted. JOSN.parse or a parser library that recognizes JSON, helps to avoid both th security
  and performance issues posed by `eval`
- Leaving of {}. Please use {} even when we have only one statement of `if` or `for`.

- Decimals number in js is `wacky`
  - js uses binary floating point values to handle all of its decimal based operations. e.g. console.log(0.1 + 0.2), output: 0.30000000000000004
  - Method `toFixed()` allow us to select the exact amount of decimal places to display.
  ```js
  var num = 0.1 + 0.2 + 0.3;
  console.log(num.toFixed(1)); // output: 0.6;
  console.log(num.toFixed(4)); // output: 0.6000;
  ```
  - `parseFloat()` Turns Strings with Decimals into Numbers.
  - `parseInt()` also converts numerical strings. But it seeks the first available integer at the front of a string.
  ```js
  parseInt("88 keys on a piano"); // output: 88
  parseFloat("1.234 keys on a bag"); // output: 1.234
  parseInt("There are 88 keys on a piano"); // NaN, cause string does not begin with a acceptable value
  parseInt("7.89") // output: 7, trim up descimals without `rounding`
  parseInt("1.23", 10) // parseInt(string, radix), it allows any `radix` value from `2 to 36`.
  ```

  - If unsure about `data type`, but highly reliant on a `Number` use `typeof` and `isNaN()` as a best practice
    - function checkNumber(data) { return typeof data === "number" && !isNaN(data); }
    - checkNumber(640) // output: true
    - checkNumber("640") // output: false, false by typeof data === "number"
    - checkNumber("NaN") // output: false, false by !isNaN()

  - An object that groups and protects related data and methods in JavaScript files is called a `Namespace`.

  - If built well, `namespaces` remain `agnostic` of other namespaces.

  - `Namespaces` reduce global `footprint` while also keeping data grouped around their intended functionality.

  - `Closure` of js is used to cause some properties to be private, bound only to a surrounding function's local scope,
    and some properties to be public, accessible by all holders of the namespace.

  - `Private` properties are `created` in the local scope of the `function expression`. `public` properties are built withtin
    the `object` which is then `returned` to become the `namespace`. Access to `private` data is thus prossible only
    because of `closure` within the larger `module`.

  - If a module reference globally-scoped variable, it's a best practice to bring them into the scope of anonymous closure
    through the use of a `imports` technique.

  - Our `imports` ensures clarity of `scope` within a `module`. By using a `parameter`, we protect the `global` data
    that might have been `overwritten`. All imported data becomes `locally` scoped to the `anonymous function`, to be used in
    `closure`. Thus, when compared with `searching` the entire `scopre chain`, `imports` are both clearer and faster.

  - `Augmentation` provides extra properties for existing modules.

  - In simple `augmentation`, the `module` file and the augmentation file `module` share their `private state`.
    Augmentation module `properties` may only `access` the `private` data from their file's `closure`. `Private` data
    from the `original` closure `will not` be lost, and `will` be accessible to all original `properties`.

#### Scope Chain (how js works!)

- Everything is executed in an Execution Context
- Function invocation creates a new Execution Context
- Each Execution Context has:
  - Its own Variable Environment
  - Special `this` object
  - Reference to its Outer Environment
- Global scope does not have an Outer Environment as it's the most outer there is.
- Execute flows -

```
Referenced (not defined) variable will be searched for in its current scope first.
If not found, then Outer Reference will be searched.
If not found, the Outer Reference's Outer Reference will be searched, etc.
This will keep going until the Global scope.
If not keep going scope, the variable is undefined.
```

#### JavaScript: The Good Parts

- 100 and 1e2 are the same number
- `NaN` is not equal to any value, including itself. Detect `NaN` with the `isNaN(number)` function.
- `Infinity` is any value greater that 1.79769313486231570e+308.
- JS does not have an integer type
  - integers are a subset of doubles instead of a separate data type
- JS defines `7` built-in types
  - `Object` and `6 Primitives`
- Object type is a collection of name/value pairs
- Primitive type can contain a `single, immutable` value
- Undefined means variable memory has been allocated but no value has ever been explicitly set yet.
- What is `False` to JS ?
  - `false`, `null`, `undefined`, `""`, `0`, `NaN`
- In JS, primitives are passed by value, `objects` are `passed by referenece`

```
var a = { x: 7 };
var b = a;
console.log(a);   // output: 7
console.log(b);   // output: 7

b.x = 5;
console.log('After b.x update:');
console.log(a);   // output: 5  (a is also changed!)
console.log(b);   // output: 5

```

- When we have an `inner function` within another function,
  this keyword starts pointing to the `global object (window)`.

```

// Object literals and `this`
var literalCircle = {
  radius: 10,

  getArea: function() {
    console.log(this);       // Object {radius: 10}

    var increaseRadius = function () {
      this.radius = 20;
      // Here, this is referring to global object `window` because of inner function [getArea() -> increaseArea()]
    };
    increaseRadius();
    console.log(this.radius);

    return Math.PI * Math.pow(this.radius, 2);
  }
};
console.log(literalCircle.getArea());
```

- Immediately Invoked Function Expression (`IIFE`)

```
(function () {
  console.log('This function will be invoked immediately');
})();
```

- `Function.prototype.call()` - The `call()` method calls a function with a `given this` value and arguments provided individually.
  - A different `this object` can be assigned when calling an existing function. this refers to the current object, the calling object.
    With `call`, you can write a method once and then inherit it in another object, without having to rewrite the method for the new object.
- With `call() or apply()` we can set the value of `this`, and invoke a function as a new method of an existing object.
- Using call to invoke a function and specifying the `context` for `this`. In below example, when we will call great the value of this
  will be bind to boject `i`.

```
function greet() {
    var reply = [this.person, 'Is An Awesome', this.role].join(' ');
    console.log(reoly);
}

var i = {
    person: 'Douglas Crockford',
    role: 'Javascript Developer'
}

greet.call(i); // output: Douglas Crockford Is An Awesome Javascript Developer
```

#### Common Misconception about JSON

- JSON is a lightweight data representation
- Great format for passing data from server to client & back
- Syntax is based on JS object literal
  - But JSON is NOT JS object literal
  - JSON is just a string
- Need to convert JSON into a JS object
- Converting JSON to String & Back to JSON
  - var obj = JSON.parse(jsonString); // converts from json string to object
  - var str = JSON.stringify(obj); // converts from object to JSON

---

#### Generate a Random ID

```js
Math.random().toString(36).substr(2, 9);
// toString(36) converts a string to base36
```

## Format Number

#### Format a number to two significant digits

```js
myNumber.toPrecision(2)
// 0.0010000 -> "0.0010"

Number(myNumber.toPrecision(2))
// 0.0010000 -> 0.001
```

#### Format a number with comma separated and with minimum fractional digits

```js
Number(parseFloat(3000).toFixed(2)).toLocaleString('en', {
    minimumFractionDigits: 2
});
// result 3,000.00

Number(parseFloat(123233.12).toFixed(2)).toLocaleString('en', {
    minimumFractionDigits: 2
});
// result 123,233.12
```

#### JavaScript Resources

- https://developer.mozilla.org/en-US/docs/Web/JavaScript (MDN: mozilla developer network)
- https://github.com/rwaldron/idiomatic.js (code styling)
- www.ecma-international.org/ecma-262/5.1/
