## How to find DOM elements quickly?

Mark a DOM elements panel ans use it in your console. Chrome inspector keeps the `last five (5)` elements panel in history so that the final marked element displays as `$0`, the second to last marked element `$1` and so on.

## Use of console.time() and console.timeEnd()

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

## Use of `console.count()` and `console.countReset()`

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

## Use of `console.dir()`

console.dir() outputs the object with properties where console.log() shows the string output.

```js
console.dir(document.body);
console.log(document.body);
```

## Use of `console.dirxml()`

console.dirxml() displays the object in xml representation. console.dirxml() and console.log() is identical to output.

```js
console.dirxml(document.body);
```

## Use of `console.error()`

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

## Use of `console.group()`, `console.groupCollapsed()` and `console.groupEnd()`

## Get trace and print the stack trace a function calling

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

## Use of `console.table()`

This particular method is incredibly useful to describe an object or array content in a human-friendly table. It makes inspection and logging of nested and complex arrays/objects

```js
const users = [
  { name: 'Marco', age: 26 },
  { name: 'Leo', age: 24 },
];

// Log a table with the users information
console.table(users);
```

## Add a debugger in a function.

Use `debug(funcName)` in the console and script will stop when it reaches the function we passed in.

## Watch specific function calls and its arguments

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

## Use of `console.memory`

- If performance issue is even trickier, and we are looking for a sneaky memory leak then `cosole.memory` (property, not a function) to check out our heap size status.

```js
console.memory;
```

## Quickly access elements in the console

A faster way to do a querySelector in the console is with the dollar sign. `$('css-selector')` will return the first match of CSS selector. `$$('css-selector')` will return all of them. it we should use an element more than once, it's worth saving it as a variable.

## Miscellaneous

```js
console.log({ width }); // { width: 10 }
```
