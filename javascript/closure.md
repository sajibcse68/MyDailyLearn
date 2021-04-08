#### `Closures` and `References`
- One of the JS most powerful features is closures.
- With `closures`, scopes `always` keep access to the outer scope, in which they were defined.

- Closure is when a **function** `remember` its lexical scope even when the **function** is executed outside that lexical scope -- [Ref](KyleSimpson-AdvancedJavaScript-FrontendMasters)

```js
function foo() {
  var bar = "bar";

  function baz() {
    console.log(bar);
  }

  bam(baz);
}

function bam(baz) {
  baz();             // "bar"
}

foo();
```

```js
var foo = (function() {
  var o = { foo: "bar" };

  return { obj: o };
})();

// it's not closure, its just object reference!
console.log(foo.obj.foo);
```



```js
// Emulating private variables
function Counter(start) {
  var count = start;
  return {
    increment: function() {
      count++;
    },
    get: function() {
      return count;
    }
  }
}
var foo = Counter(4);
foo.increment();
foo.get(); // 5
```
- Here, `Counter` returns `two closures`: `increment` & `get` functions.
- Both of these functions keep a `reference` to the scope of `Counter` and, therefore, always keep access to the `Count`
  variable that was defined in that scope.

```js
// Closures Inside Loops
for(var i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
```

- The above will not output the numbers `0 to 9`, but the number `10 ten times`
- The anonymous function keeps a reference to i. At the time 'console.log' gets called, the `for loop` has already finished, and
  the value of `i` has been set to `10`
- In order to get the desired behavior, it is necessary to create a `copy` of the value of `i`

```js
// 1. Avoiding the Reference Problem
for(var i = 0; i < 10; i++) {
  (function(e) {
    setTimeout(function() {
      console.log(e);
    }, 1000)
  })(i);
}
```
- The anonymous outer function gets called immediately with `i` as its first argument and will receive a copy of the value of `i` as it's parameter `e`
- The anonymous function that gets passed to `setTimeout` now has a reference to `e`, whose value does not get changed by the loop.

```js
// 2. Avoiding the Reference Problem
for(var i = 0; i < 10; i++) {
  setTimeout((function(e) {
    return function() {
      console.log(e);
    }
    })(i), 1000)
}
```

- There is another possible way of achieving this, which is to return a function from the `anonymous wrapper` that will then
  have the same behavior as the code above.

```js
// 3. Avoiding the Reference Problem
for(var i = 0; i < 10; i++) {
  setTimeout(function(e) {
    console.log(e);
  }, 1000, i)
}
```

- The other popular way to achieve this is to add an additional argument to the `setTimeout` function, which passes these arguments to the callback

```js
// 4. Avoiding the Reference Problem
for (let i = 0; i < 10; i++) {

  // using the ES6 let syntax, it creates a new binding
  // every single time the function is called
  // read more: http://exploringjs.com/es6/ch_variables.html#sec_let-const-loop-heads

  setTimeout(function() {
    console.log(i);
  }, 3000);
}
```

- When we declare a variable with let then, the it creates a new binding for each of it child scope (every single time the function is called)

```js
// 5. Avoiding the Reference Problem
for(var i = 0; i < 10; i++) {
  setTimeout(console.log.bind(console, i), 1000);
}
```

- There's yet another way to accomplish this by using `.bind`, which can bind a `this` context and arguments to function.

#### Closures Help in Function `Construction Zones`
- A closure wraps up an entire environment, binding necessary variables from other scopes.
- A closure can make the creation of very similar functions untra-efficient.

```js
function buildCoveTicketMaker(transport) {
  return function (name) {
    alert ('Here transport is ', + transport + 'and name is ' + name);
  }

var getSubmarineTicket = buildCoveTicketMaker('Submarine');       | return same, function (name) {
var getSubmarineTicket = buildCoveTicketMaker('Battaleship');     |   alert ('Here transport is ', + transport + 'and name is ' + name);
var getSubmarineTicket = buildCoveTicketMaker('Gaint Seagull');   | }
                                                                  | but every time each function has a closure 'buildCoveTicketMaker' function
                                                                  | with transport = Submarine/Battaleship/Gaint Seagull
}
```

#### Loops with Closure: A Cautionary Tale (Be A Closure Master!)
```js
function assignTorpedo (name, passengerArray) {
  var torpedoAssignment;
  for (var i = 0; i < passengerArray.length; i++) {
    if (passengerArray[i] == name {
      torpedoAssignment = function () {
        alert("Ahoy, " + name + "!\n" +
        " Man your post at Torpedo # " + (i+1) + "!");
      }
    }
  }
  return torpedoAssignment;
}

var subPassengers = ["Luke", "Leia", "Han", "Chewie", "Yoda", "Boba"];
var giveAssignment = assignTorpedo("Chewie", subPassengers);

giveAssignment();   // it shows "... Torpedo #6!" instead of "... Torpedo #4!"
```
```js
// solutions #1:
function assignTorpedo (name, passengerArray) {
  for (var i = 0; i < passengerArray.length; i++) {
    if (passengerArray[i] == name) {
      return function () {                                // immediately return the function
        alert("Ahoy, " + name + "!\n" +                   // so that i variable don't get the
        " Man your post at Torpedo # " + (i+1) + "!");    // chance of increment
      }
    }
  }
}
```

```js
// solutions #2:
function assignTorpedo (passengerArray) {
  return function(name) {
    for (var i = 0; i < passengerArray.length; i++) { // since we've put the loop inside the returned function,
        if (passengerArray[i] == name) {              // i variable will come directly from that local scope
          alert("Ahoy, " + name + "!\n" +
          " Man your post at Torpedo # " + (i+1) + "!");   
        }
      }
  }
}

var subPassengers = ["Luke", "Leia", "Han", "Chewie", "Yoda", "Boba"];
var giveAssignment = assignTorpedo(subPassengers);
giveAssignment("Chewie"); // 4
```

#### What does Closure give us?

Closure gives our functions persistent memories and entirely new toolkit for writing professional code:

`Helper Function:` Everyday professional helper functions like **once** and **memoize**

`Iterators and generators:` Which use lexical scoping and closure to achieve the most contemporary patterns for handling data in JavaScript

`Module Pattern:` Preserve state for the life of and application without polluting the global namespace

`Asynchronous JavaScript:` Callbacks and Promises rely on closure to persist state in an asynchronous environment