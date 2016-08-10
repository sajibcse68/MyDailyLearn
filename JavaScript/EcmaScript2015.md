## The new things of `ES-2015` or `ES6`

#### `var` vs `let` 
- JS was first publibshed in 1997
- One thing that JS does `before executing codes` is `move all the var declarations up to the top of the nearest elclosing
  function`, what is known as `hoisting`.
- `let` variables are scoped to the nearest `block` and are `not hoisted` (a block is any code selection within curly brances).
- `Unlike var`, variables declared with `let`, are not hoisted (Similar to other programming languages).

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
#### Promise
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























