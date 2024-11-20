## DOM Node Selection

### `$` – Shortcut for document.querySelector

```js
$('.item-01') // Selects the first element with the class 'item-01'.
```

### `$$` – Shortcut for document.querySelectorAll

```js
$$('h1') // Selects all <h1> elements in the DOM.
```

### `$x` – Selects elements via XPath expressions

```js
$x('/html/body/div') // Selects a <div> element inside <body>.
```

### How to find DOM elements quickly?

Mark a DOM elements panel and use it in your console. Chrome inspector keeps the `last five (5)` elements panel in history so that the final marked element displays as `$0`, the second to last marked element `$1` and so on.

## Standard Console API Shortcuts

### `dir`: Displays an object and its properties in a readable format.

console.dir() outputs the object with properties where console.log() shows the string output.

```js
dir(document.body) // Prints the properties of the <body> element.
```

### `table`: Formats data as a table

This particular method is incredibly useful to describe an object or array content in a human-friendly table. It makes inspection and logging of nested and complex arrays/objects

```js
table([{name: "Alice", age: 25}, {name: "Bob", age: 30}])
// Displays a table with "name" and "age" columns.

```

### `clear`: Clears the console.

```js
clear() // Clears all existing logs in the console.
```

### `profile / profileEnd:` Starts and stops the performance profiler.

```js
profile('MyProfile') // Starts profiling with the label 'MyProfile'.
profileEnd('MyProfile') // Stops profiling.
```

### Use of console.time() and console.timeEnd()

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

### Use of `console.count()` and `console.countReset()`

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

### Use of `console.dirxml()`

console.dirxml() displays the object in xml representation. console.dirxml() and console.log() is identical to output.

```js
console.dirxml(document.body);
```

### Use of `console.error()`

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

### Use of `console.group()`, `console.groupCollapsed()` and `console.groupEnd()`

### Use of `console.memory`

- If performance issue is even trickier, and we are looking for a sneaky memory leak then `console.memory` (property, not a function) to check out our heap size status.

```js
console.memory;
```

### console.trace()

`console.trace()` creates a views and triggers events, so eventually we'll want to know what caused the function call.
it's useful to get trace and print the stack trace a function calling.

## JavaScript Object Utilities

### `keys`: Shortcut for Object.keys

```js
const obj = { id: 1, name: 'Test', age: 30 };
keys(obj) // ['id', 'name', 'age']
```

### `values`: Shortcut for Object.values

```js
const obj = { id: 1, name: 'Test', age: 30 };
values(obj) // [1, 'Test', 30]
```


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

## Add a debugger in a function.

Use `debug(funcName)` in the console and script will stop when it reaches the function we passed in.

`undebug(funcName)`: Removes a breakpoint.

```js
function sayHello() { console.log('Hello'); }
debug(sayHello) // Adds a breakpoint to the `sayHello` function.


undebug(sayHello) // Removes the breakpoint from `sayHello`.
```

## Monitoring

### Monitoring Functions

`monitor(functionName)`: Logs function calls and their arguments

```js
var func1 = function (a, b, c) {
  //...
};

// write in chrome console
monitor(func1);
func1(1, 2);
```

`func1` expects 3 arguments, but only 2 is passed in.

`unmonitor(functionName)`: Stops monitoring a function.

```js
unmonitor(square) // Stops logging calls to `square`.
```

### Monitoring Events

- `getEventListeners(object)`: Lists all event listeners attached to an object

```js
getEventListeners(document.body) // Prints all event listeners attached to the <body>.
```

- `monitorEvents(object, eventType)`: Logs events of a specific type.

```js
monitorEvents(document.body, 'click') // Logs all 'click' events on the <body>.
```

- `unmonitorEvents(object)`: Stops monitoring events

```js
unmonitorEvents(document.body) // Stops logging 'click' events on the <body>.
```


## Quickly access elements in the console

A faster way to do a querySelector in the console is with the dollar sign. `$('css-selector')` will return the first match of CSS selector. `$$('css-selector')` will return all of them. it we should use an element more than once, it's worth saving it as a variable.

## Shorthand Variables

### $_: Refers to the result of the last executed expression

```js
2 + 2 // 4
$_ // 4
```

### $0: Refers to the currently selected DOM element in the inspector.

```js
// In the Elements tab, select an element. Then in the console:
$0 // Refers to the selected DOM element.
```

## Miscellaneous

```js
console.log({ width }); // { width: 10 }
```
