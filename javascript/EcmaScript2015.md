## The new things of `ES-2015` or `ES6`

#### `var` vs `let` vs `const` 
- JS was first publibshed in 1997
- One thing that JS does `before executing codes` is `move all the var declarations up to the top of the nearest elclosing
  function`, what is known as **`hoisting`**.
- `let` variables are scoped to the nearest `block` and are `not hoisted` (a block is any code selection within curly brances).
- `Unlike var`, variables declared with `let`, are not hoisted (Similar to other programming languages).

```js
if (true) {
  let a = 2;
  let b = 3;
  
  if(true) {
    let a = 4;
    var c = 5;
    let d = 6;
    console.log(a);  // 4
    console.log(b);  // 3
  }
  console.log(a);  // 2, not 4
  console.log(c);  // 5, cause var
  console.log(d);  // undefined, cause let
}
```
- `const` is used to assign a constant value to the variable. So, the value can't be changed. Its fixed.

```js

```


#### `Var` and the `for` loops
- `var` is the reason behind a popular `gotcha` in `for` loops.
- `var` is hoisted to the top of the function and `shared` across `each iteration` of the loop. 

```js
const usernames = ['a', 'b', 'c', 'd'];
for (var i in userNames) {
  _fetchProfile('/users/', userNames[i], function() {
    console.log('i: ', i);      
  });
}

output: i: 3
        i: 3
        i: 3
        i: 3
```
- Here, `fetchProfile` is called 4 times `before any of the callbacks are invoked`.
- Solution, With `let` there's `no sharing` in `for` loops. A new variable is created on each iteration. And there is no
  sharing between defferent callback functions.
```js
const usernames = ['a', 'b', 'c', 'd'];
for (let i in userNames) {
  _fetchProfile('/users/', userNames[i], function() {
    console.log('i: ', i);      
  });
}
output: i: 0,  i: 1,  i: 2,  i: 3
```


- Variables declared with `let` can be reassigned, but `can't be redeclared` within the same scope.

#### Declarations with `const`
- The `const` keywords creates `read-olny` named constants. 
- Variables declared with `const` must be `assigned an initial value`.
- Variables declared with `const` are scoped to the `nearest block`.

#### Functions
- A common practice is to `check for presence` of arguments as the very first thing in the function.
```js
function loadProfiles(userNames) {
  let names = typeof userNames !== 'undefined' ? userNames : [];
  let namesLength = names.length;
}
// it's too `verbose`
```
- `Default parameter` values help move `default values` from the function body to the `function signature`
```js
function loadProfiles(userNames = []) { // uses empty array as default value when no argument is passed
  let namesLength = names.length;
  console.log(namesLength);
}
``` 
- Using `named parameters` for optional settings makes it easier to understand how a function should be invoked
```js
function setPageThread(name, {popular, expires, activeClass} = {}) {
    console.log('name: ', name);
    console.log('Popular: ', popular);
    console.log('Expires: ', expires);
    console.log('Active: ', activeClass);
}
``` 
- `Variadic functions` can accept any number of arguments.
- The new `rest parameter` syntax allows us to represent an `indefinite number of arguments` as an `Array`. This way,
  changes to function signature are `less likely to break code`.
- The 3 dots (...) make tags a rest parameter. It sould be last parameter of function.
- The `spread operator` allows us to `split an Array` argument into `individual elements`
```js
getRequest('/topics/17/tags', function(data) {
  let tags = data.tags;  // tags = ['HTML', 'Code', 'JS']
   displayTags('...tags'); // sending individual arguments not an array
})
```
- `Rest parameters` and the `spread operator` look the `same`, but the former is used in function `definations` and the
  later in function `invocations`
- `Arrow functions` bind to the scope of where they are `defined`, not where they are used.
  It is also known as `lexical binding`

## Object and Strings
#### Removing repetition From Creating Objects
- We can remove `duplicate` variable names from object properties when those properties have the `same name` as the
  variables being assigned to them (properties and value are the same name).

```js
return {first: first, last: last, fullName: fullName}
// similar to 
return {first, last, fullName} // way cleaner

```

- Object Destructuring: We can shorthand to `assign properties` from objects to `local variables` with the `same name`
```js
let user = buildUser("Sam", "Williams")
let first = user.first;
let last = user.last;
let fullName = user.fullName;
// shorthand
let {first, last, fullName} = buildUser("Sam", "Williams")
```   

- Not all properties have to be `destructured` all the time. We can `explicitly select` the ones we need

```js
// only grabbing `fullName` from the return Object
let { fullName } = buildUser("Sam", "Williams" );

// grabbing `last` and `fullName` from the return object 
let {last, fullName } = buildUser("Sam", "Williams")

```

- We can also assign various values from an object using Destructuring:

```js
const foo = { x: 1, y: 2};

// store the values of foo.x into a and foo.y into b
const { x: a, y: b} = foo // a = 1, b = 2
// read like 'get the field of x and copy the value into a' and so on
```

- Use `Destructuring` assignment to assign variables from nested objects:

```js
const a = {
  start : { x: 5, y: 6}
}

const { start: { x: startX, y: startY }} = a;
console.log(startX, startY); // 5, 6 
```

- Use `Destructuring` assignment to assign variables from `Arrays`:

One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, we can't pick or choose whick elements we want to assign to variables.

```js
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2
```

we can also access the value at any index in an array with destructuring by using commas to reach the desired index:

```js
const [a,b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2, 5
```

#### Adding a Function to an Object
- In previous versions of JS, adding a function to an object required specifying the `property name` and then the `full function definition` (including the `function` keyword)
- In `ES6` a new shorthand notation is available a method to an object where the keyword `function` is no longer necessary. 

```js
function buildUser (first, last, postCount) {
  let fullName = first + " " + last;
  const ACTIVE_POST_COUNT = 10;
  
  return {
    first,
    last,
    fullName, 
    isActive() {  // isActive: function() // older version 
      return postCOunt >= ACTIVE_POST_COUNT
    }
  }
}
```

#### Removing Repetitiion From Creating Objects
- We can remove **duplicate** variable names from object properties when those properties
have the **same name** as the variables being assigned to them.

```js
function buildUser(first, last) {
  let fullName = first + " " + last;

  return { first, last, fullName }    // variable to object properties
  // instead, return { first: first, last: first, fullName: first }
}
```

- Object Destructuring: We can use shorthand to assign **properties** from objects to **local variables** with the **same name**

```js
let user = buildUser("Sajib, "Khan");

let first = user.first;
let last = user.last;
let fullName = user.fullName;

// simpified
let {first, last, fullName } = buildUser("Sajib", "Khan");   // assigning from object properties to variables
```

#### Writing Multi-line Strings
Template strings offer a new and *much better* way to write **multi-line strings**.

```js
let userName = "Sajib"
let admin = { fullName: "Sajib Khan"};
let veryLongText = `Hi ${userName},

this is a very
very

veeery
long text.

Regards,
  ${admin.fullName}

`;

## Object Assign
#### Using object.assign
```js
function countdownTimer(target, timeLeftm options = {}) {
  defaults = {
    // ...
  };
  let settings = Object.assign({}, defaults, options);
  // settings: Merged properties from defaults and options
  // {}: Target object is modified and used as return value
  // defauts/options: Source objects remain unchanged

  // let settings = Object.assign({}, defaults, options, options2, options2);
  defaults = options = optopns2 = options3 (execute right to left)
}

```
#### Object.assign in Practice
```js
// let's run countdownTimer() passing the value for container as argument
countdownTimer($('.btn-undo'), 60, { container: '.new-post-options'});

...and using the default value for everything else.
function countdownTimer(target, timeLeft, options = {}){
  let defaults = {
    container: '.timer-display',
    timeUnit: 'seconds',
    // ...
  }
};

let settings = Object.assing({}, defaults, options);

console.log( settings.container );
console.log( settins.timeUnit );
```

## Arrays
## Reading Values With Array Destructuring
- We can use destructuring to assign **multiple values** from an array to local variables.

```js
  let users = ["Sam", "Tyler", "Brook"];
  let [a, b, c] = users;
  console.log(a, b, c);      // Output: Sam Tyler Brook

  // values can be discarded
  let [a, ,b] = users;
      // ^ notice the blank space between the commans
  console.log(a, b);         // Output: Sam Brook (Tyler is discarded)
```
#### Combining Destructuring With Rest Params
- We can **combine** destructuring with rest parameters to **group values** into other arrays
```js
  let users = ["Sam", "Tyler", "Brook"];
  let [ first, ...rest] = users
            // ^ Groups remaining arguments in an array
  console.log(first, rest);   // Output: Sam ["Tyler", "Brook"];
```

#### Destructive Arrays From Return Values
- When returning arrays from **functions**, we can assign to **multiple variables** at once.
```
function activeUsers() {
  let users = ["Sam", "Alex", "Brook"];
  return users;

  // returns an array, as expected...
  let active = activeUsers();
  console.log( active );     // Output: ["Sam", "Alex", "Brook"]
  return active;

  // ...or assigns to **individula variables**. Handy!
  let [a, b, c] = activeUsers();
  console.log( a, b, c);      // Output: Sam Alex Brook
}
```
#### Using for..or to Loop Over Arrays
The **for..of** statements iterates over **property values**, and it's better way to loop over arrays
and other **iterable objects**.

```js
let names = ["Sam", "Tyler", "Brook"];

for (let index in names) {
  console.log( names[index] );
  // two steps first: assign index value to index value, second: use index variable to get actual element
};

for(let name of names) {
  console.log( name );
  // only one step: Reads element directly and with less code involved
}
```

#### Limitations of for..of and Objects
- The for..of statement **cannot** be used to iterate over properties in plain javascript objects out-of-the-box.
```js
  let post = {
    title: "New Features in JS"
    replies: 19,
    lastTeplyFrom: "Sam"
  };

  for (let property of post) {
    console.log("Value: ", property) // TypeError: post[Symbol.iterator] is not a function
  }

  console.log( typeof names[Symbol.iterator] ); // Output: undefined
  // Nothing is assigned to Symbol.iterate. so the post object will not work with for..of
```
- In order to work with **for..of**, objects need a special function assigned to the **Symbol.iterator**
property. The presence of this property allows us to know whether an object is **iterable**.

```js
let names = ["Sam", "Tyler", "Brook"];

console.log( typeof names[Symbol.iterator] );

for(let name of names) {
  console.log(name);
}
```

#### Finding an Element in an Array
- Array.find returns the **first element** in the array that satisfies a provided a testing function.

```js
let users = [
  { login: 'Sam', admin: false},
  { login: 'Brook', admin: true},
  { login: 'Tyler', admin: true}
];

let admin = users.find((user) => {  // Returns first object for which
  return user.admin;                // user.admin is true
});
console.log(admin);   // Output: {"login": "Brook", "admin": true};

Or, one-liner arrow function
let admin = users.find(user => user.admin );
console.log(admin);   // Output: {"login": "Brook", "admin": true};

```
## Maps
#### Issues With Using Objects as Maps
- **Maps** are a **data structure** composed of a collection of **key/value** pairs. They are very useful to store simple
data, such as property values.
- When using **Objects** as maps, its *keys* are always converted to strings

```js
  let user1 = { name: "Sam"};
  let user2 = { name: "Tyler"};

  let totalReplies = {};
  totalReplies[user1] = 5;     // Both objects are converted to
  totalReplies[user2] = 42;    // the string "[object Object]"

  console.log( totalReplies[user1]);   // Output: 42
  console.log( totalReplies[user2]);   // Output: 42

  console.log( Object.keys(totalReplies) );    // Output: ["[object object]"]
```

#### Storing Key/Values With Map
- The **Map** object is a simple **key/value** data structure. **Any value** may be used as either a key or a value, and
objects are **not converted** to strings.

```js
  let user1 = {name: 'Sam'};
  let user2 = {name: 'Tyler'};

  let totalReplies = new Map();
  totalReplies.set( user1, 5);   // we use the get() and set() methods
  totalReplies.set( user2, 42);  // to access values in Maps

  console.log(totalReplies.get(user1));   // Output: 5
  console.log(totalReplies.get(user2));   // Output: 42
```

#### Iterating Maps With for..of
**Maps** are iterable, so they can be used in a **for..of** loop. Each run of the loop returns a **[key, value]**
pair for an entry in the **Map**

```js
let mapSettings = new Map();

mapSettings.set('user', 'Sam');
mapSettings.set('topic', 'ES2015');
mapSettings.set('replies', ['Can't wait!', 'So Cool'] );

for (let [key, value] of mapSettins){
  console.log(`${key} = ${value}`);    // Output: user = Sam \n topic = ES2015 \n replies = Can't wait!, So Cool
}
```

#### WeakMap
- The WeakMap is a type of **Map** where **only objects** can be passed as keys. Primitive data types -- such as strings,
numbers, booleans, etc. -- are **not allowd**.

```js
let user = {};
let comment = {};

let mapSettings = new WeakMap();
mapSettins.set( user, "user");
mapSettins.set( user, "comment");

mapSettins.set( "title", "ES2015"); // error: invalid value used as weak map key
               // ^ premitive data types are not allowed
```

#### Map vs WeakMap
- All available methods on a **WeakMap** require access to an **object used as a key**.

```js
let user = {};
let mapSettings = new WeakMap();
mapSettings.set( user, "ES2015");

console.log( mapSettins.get(user));    // Output: ES2015
console.log( mapSettins.has(user));    // Output: true
console.log( mapSettins.delete(user)); // Output: true
```

- **WeakMap** are **not iterable**, therefore they cann't be used with **for..of**

```js
for (let [key, value] of mapSettings) {
  console.log(`${key} = ${value}`);     // error: mapSettings[Symbol.iterator] is not a function
}
```

- **WeakMap** are better with memory. Individual entries in a **WeakMap** can be **garbase collected** while the Weakmap
itself still exists.

- **WeakMap** don't prevent the garbage collector from collecting objects currently used as keys, but that are no longer
referenced anywhere else in the system

```js
let user = {};                     // all objects occupy memory space

let userStatus = new WeakMap();
userStatus.set( user, "logged");
              // ^ Object reference passed as key to the WeakMap
//...
someOtherFunction( user );  // Once it returns, user can be garbage collected
```
#### Sets
- The **Set** object stores **unique** values of **any type**, whether primitive values or object references.
- **Set** objects are **iterable**, which means they can be useed with **for..of** and destructuring.

```js
let tags = new Set();
tags.add("JavaScript");
tags.add("Programming");
tags.add({ varsion: "2015" });
tags.add("Web");

for(let tag of tags) {
  console.log(tag);     // Output: JavaScript \n Programming \n {version: "2015"} \n Web
}

let [a, b, c, d ] = tags;
console.log(a, b, c, d);  // Output: JavaScript \n Programming \n {version: "2015"} \n Web
```

#### WeakSet
- Similar as WeakMap
- The **WeakSet** is a type of `Set` where only objects are allowed to be stored

```js
  let weakTags = new WeakSet();
  weakTags.add("JavaScript");       // Typerror: Invalid value used in weal set
  weakTags.add("JavaScript");

  // two necessary methods
  weakTags.has(iOS);       // returns true/fales whether the object is added in the WeakSet
  weakTags.delete(iOS);    // returns true/fales after deleting the object if exist
```

- WeakSet **cannot** be used with **for..of** and they offer **no methods** for reading values from it.
```js
  for (let wt of weakTags) {
    console.log(wt);         // TypeError: weakTags[Symbol.iterator] is not a function
  }
```

#### Showing Unread Posts With WeakSets
- We can use `WeakSets` to create special groups from existing objects **without mutating them**. Favoring **immutable**
objects allows for much **simpler** code with **no unexpected side effects**.

```js
  let readPosts = new WeakSet();

  //... when post is clicked on
  postList.addEventListener('click', (event) => {
    //...
    readPosts.add(post);   // adds object to a group of read posts
  })

  //...rendering posts
  for (let post of postArray) {
    if (!readPosts.has(post)) {
      _addNewPostClass(post.element);
    }
  }
```

## Classes
#### Adding a Sponsor to the Sidebar
- First: Using a Function Approach
```js
function SponsorWidget(name, description, url) {   // Constructor functions are invoked with
  this.name        = name;                         // the 'new' operator
  this.description = description;                  
  this.url         = ulr;                          
}

SponsorWidget.prototype.render = function() {
  //...
}

// Invoking the SponsorWidget function looks like this:
let sponsorWidget = new SponsorWidget(name, description, url);
sponsorWidget.render();
```

- Second: Using the New Class Syntax (Object Oriented Flavour like oher OOP language)
- To define a class, we use the **class** keyword followed by the name of the class. The body of a class is the part
between curly braces.

```js
class SponsorWidget {
  constructor(name, description, url) {
  //...
  this.description = description;    // don't forget to use 'this' to access instance poperties and methods
  this.url = url;
}

  render() {
    let link = this._buildLink(this.url);
    //...                     // ^ can access previously assigned instance variables
  }

  _buildLink(url) {     // Prefixing a method with an underscore is a convention for indicating that it should not be
    //...               // invoked from the public API (Private Method)
  }
}
```
#### Creating an Instance From a Class
- The class syntax in not introduceing a new object model to JavaScript. It's just **syntactical sugar** over the
existing **prototype-based** inheritance.

```js
// syntactic Sugar              |  // Prototype Object Model
class SponsorWidget {           |  function SponsorWidget(name, description, url) {
  //...                         |    //...
}                               |  }

// Instances are created the same way
let sponsorWidget = new SponsorWidget(name, description, url);
sponsoorWidget.render();
```

#### Class Inheritance
- We can use class inheritance to reduce code repetitiion. Child classes **inherit** and **specialize** behavior
defined in parent classes.
- The **extends keyword is used to create a class that inherits methods and properties** from another class. The
**super** method runs the constructor function from parent class.
```js
// parent class                         | // child class
class Widget {                          | class SponsorWidget extends Widget {
  constructor() {                       |  constructor(name, description, url) {
    this.baseCSS = "site-widget";       |    super();
  }                                     |    //...
  parse(value) {                        |  }
    //...                               |  render(){
  }                                     |   let parseName = this.parse(this.name);   // this.parse is inherited method
}                                       |   let css = this._buildCSS(this.baseCSS);  // this.baseCSS is ingerited properties
```                                     |  }
                                        | }
#### Overriding Inherited Methods
- Child classes can invoke methods from their **parent** classes via the **super** object
```js
// parent class                         | // child class
class Widget {                          | class SponsorWidget extends Widget {
  constructor(){                        |   constructor() {
    this.baseCSS = "site-eidget";       |     super()
  }                                     |     //...
}                                       |   }
  parse() {                             |
  //...                                 |  parse(){  // method overriding
  }                                     |    let parsedName = super.parse(this.name);
}                                       |                     // ^ calls the parent version of the parse() method
                                        |    return `Spnsor: ${parsedName}`;
                                        |  }
                                        |
                                        | render() {
                                        |   //...
                                        | }

```

#### Caution: `super` keyword can't bind `.call()`, `.bind()` or `.apply()`

```js
class A {
  one() { console.log("one:A"); }
  two() { console.log("two:A"); }
}

var B = {
  one() { console.log("one:B"); }
  one() { console.log("two:B"); }
}

class C extends A {
  foo() {
    this.one();
    super.two();
  }
}

var x = new C();

x.foo();       // one:A two:A  <--- ok

x.foo.call(B); // one:B two:A  <--- Oops!

```

#### We have to call `super` first in `constructor()`

```js
class Foo {
  constructor(who) {
    this.me = who;
  }

  identify() {
    return "I am " + this.me;
  }
}

class Bar extends Foo {
  constructor(who) {
    this.x = 1; // <-- error!
    super(who); // <-- this must come first
  }
}
```

## Module

#### Why we need to use `Module`?

- Maintainability
- Reusability
- Namespacing

#### importing Named Exports
- Functions from **named** exports must be assigned to variables with **the same name** enclosed in cruly braces
```js
// flash-message.js                           | // app.js
export function alertMessage(message) {       | import {alertMessage, logMessage} from './flash-message'
  alert(message);                             | 
}                                             | alertMessage('Hello from alert');
export function logMessage(message) {         | logMessage('Hello from log');
  console.log(message);                       |
}                                             |
```

#### Importing a Module as an Object
- We can **import the entire module** as an object and call each function as a **property** from this object.

```js
// flash-message.js                           | // app.js
function alertMessage(message) {              | import * as flash from './flash-message'
  alert(message);                             |
function logMessage(message) {                | flash.logMessage('Hello from log');         // functions become object properties
}                                             | flash.alertMessage('Hello from alert');
  console.log(message);                       |
}

export {alertMessage, logMessage};
```
#### Exporting Constants
- Placing constants on their own module allows them to be reused across other modules and **hdies implementation details** (a.k.a., encapsulation)

```js                            | // load-profiles.js
// constants.js                  | import { MAX_REPLIES, MAX_REPLIES} from './constants.js';
const MAX_USERS = 3;             | function loadProfiles(userNames){
const MAX_REPLIES = 3;           |   if (userNames.length ? MAX_USERS) {  //... }
                                 |
export                           |   if (someElement > MAX_REPLIES) { //... }
{ MAX_USERS, MAX_REPLIES }       | }
```

## Promises
- Example 1:-

```
var timer = function(length) {

    return new Promise(function (resolve, reject) {
        console.log('Init Promise');
        setTimeout(function () {
            console.log('Timeout done.');
            resolve();
        }, length);
    });
}

timer(4000).then(() => alert('All done!'));
```

## Iterators
#### What We Know about Iterables So Far
- Arrays are **iterable** objects, which means we can use them with **for..of**.
```js
let names = ['Sams' 'Tyler', 'Brook'];

for (let name of names) {
  console.log( name );
}

- Plain JavaScript objects are **not iterable**, so they **do not work** with for..of out-of-the-box

```js
let post = {
  title: 'New Features in JS',
  replies: 19
};

for (let p of post) {
  console.log(p);     // TypeError: post[Symbol.iterator] is not a function
}
```

- Iterables Return an **Iterator** object. This object knows how to **access items from a collection** 1 at a time,
while **keeping track of its current position** within the sequence.

```js                                     | // Whats really happening behind the scenes
let names = ['Sams', 'Tyler', 'Brook'];   | let iterator = names[Symbon.iterator]();
                                          |
for (let name of names ) {                | let firstRun = iterator.next();  // {done: false, value: 'Sam'}
  console.log(name);                      | let name = firstRun.value;
}                                         |
                                          | let secondRun = iterator.next(); // {done: false, value: 'Tyler'}
                                          | let name = iterator.value;
                                          |
                                          | let thirdRun = iterator.next();  // {done: false, value: 'Brook'}
                                          | let name = thirdRun.value;
                                          |
                                          | let fourthRun = iterator.next(); // {done: true, value: undefined}
                                          | let name = fourthRun.value;      // breaks out the loop when done is true
                                          |
                                          | // done: will be faluse if the iterator is able to return a value from the collection
                                          | // value: any value returned by the iterator. When done is true, this returns undefined
                                          |
                                          |
```

#### Returning Custom Iterator, returning done and value
- We use `count` to keep track of the sequence and also to fetch values from the `properties` array.

```js
let post = {title: 'New Features in JS', replies: 19};

post[Symbol.iterator] = function(){
  let properties = Object.keys(this); // returns an array with property names
  let count = 0;
  let isDone = false;

  let next = () => {
    if (count >= properties.length) {
      isDone = true;
    }
    return {done: isDone, value: this[properties[count++]] };
                                // ^ refers to the post object
  }
  return { next };
}

  for (let p of post) {
    console.log(p);      //  New Features in JS \n 19
  }
```

## Generators
- The function * decleration defines **generator functions**. These are special functions from which we can use the
**yield** keyword to return **iterator** objects.

```js
function *nameList(){
  yield 'Sam';           // {done: false, value: 'Sam'}
  yield 'Tyler';         // {done: false, value: 'Tyler'}
}
```

#### Generator Objects and for..of
- Generator functions return objects that provide the same **next** method expected by **for..of**, the **spread operator**
and the **destructuring assignment**.

```js
function *nameList(){
  yield 'Sam';           // {done: false, value: 'Sam'}
  yield 'Tyler';         // {done: false, value: 'Tyler'}
}

// calling the function returns a generator object
for (let name of nameList()) {
  console.log(name);            // Sam \n Tyler
}

let names = [...nameList()];
console.log(names);            // ["Sam", "Tyler"]

let [first, second] = nameList();
console.log(first, second);      // Sam Tyler

```

#### Refactoring Custom Iterator with Generator

```js
let post = {title: 'New Features in JS', replies: 19};

post[Symbol.iterator] = function *(){
  let properties = Object.keys(this); // returns an array with property names

  for (let p of properties) {     | // same as manually returning each property value
    yield this[p];                | post[Symbol.iterator] = function *() {
  }                               |   yield this.title;
}                                 |   yield this.replies;
                                    }
  for (let p of post) {
    console.log(p);      //  New Features in JS \n 19
  }
```






















