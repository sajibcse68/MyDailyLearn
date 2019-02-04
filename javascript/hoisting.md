#### Explain `Hoisting` in JavaScript
When you declare a variable in JavaScript (using "var"), that variable declaration is "hoisted" to the top of the current scope: meaning the top of the current function or the top of the script if the variable isn't in a function.

#### What is the output?

```js
var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
}
logIt();
```
**Answer:** `undefined`

**Explanation:** variable declarations are `hoisted` to the top of the current scope. Variable assignments, however, are not.

- The code gets interpreted as though it were

```js                     | So, we have a new variable text inside of logIt() that is initialized to undefined,
  var text = undefined;   | which is what it holds when we hit our log statement
  text = 'outside';       |
function logIt(){         |
    var text;             |
    console.log(text);    |
    text = 'inside';      |
};                        |
logIt();                  |
```

#### Why `Hoisting` is important?

- `Hoisting` is necessary for `Mutual Recursion`.
- In `C` language we include `header file` (e.g. include #stdio.h), it's one kind of Hoisting

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

##### First, memory is set aside for all necessary variables and `declared functions`
```js
function getMysteryNumber () {   |  // loads like this
  function chooseMystery() {    |  function getMysteryNumber() {
    return 12;                  |    function chooseMystery() {
  }                             |      return 12;
                                |    }
  return chooseMystery();       |   function chooseMystery() {  // it replaced the above chooseMystery function
                                |     return 7;
  function chooseMystery() {    |   }
    return 7;                   |   return chooseMystery(); // output: 7;
  }                             |
}                               |   }
```

##### Function Expressions are never hoisted! They are treated as assignments

```js                                 | // loads look like
function getMysteryNumber() {         | function getMysteryNumber() {
  var chooseMystery = function(){     |   var chooseMystery = undefined;
    return 12;                        |   var chooseMystery = undefined;  // replace the above 'chooseMystery'
  }                                   |   chooseMystery = function() {
  return chooseMystery();             |     return 12;
                                      |   }
  var chooseMystery = function() {    |   return chooseMystery();        // return 12;
    return 7;                         |   chooseMystery = function() {  // this section is unreachable
  }                                   |     return 7;                   // because it is below return statement
}                                     |   }
                                      |  }
```

##### Check if `return` statement is at the top

```js                                 | // loads look like
function getMysteryNumber() {         | function getMysteryNumber() {
  return chooseMystery();             |
  var chooseMystery = function(){     |   var chooseMystery = undefined;
    return 12;                        |   var chooseMystery = undefined;  // replace the above 'chooseMystery'
  }                                   |   return chooseMystery();         // ERROR
                                      |
                                      |   chooseMystery = function() { // this section is unreachable
                                      |     return 12;                 // because it is below return statement
                                      |   }
  var chooseMystery = function() {    |
    return 7;                         |   chooseMystery = function() { // this section is also unreachable
  }                                   |     return 7;                  // because it is below return statement
}                                     |   }
                                        }
```

##### Analyzing Hoisting Load Order I

```js
function theBridgeOfHoistingDoom() {  | Alrighty, here’s the hoisted version. The function looks for any variables to
  function fellowship() {             | create space for, finds sword, dwarf, fall, and ring, and sets them all to
    return "friends";                 | undefined. There’s only one declared function, fellowship, so that comes next.
  }                                   | In this case, there are no replacement declared functions. The executable code
  var sword = "sting";                | that assigns new values or functions to variable has all var keywords popped off.
  var dwarf = function() {            | Any executable code after the first return of sword is excluded from the answer.
    return "axe";                     |
  };                                  | function theBridgeOfHoistingDoom() {
  var fall = "Fly you fools!";        |   var sword = undefined;
  fellowship = function() {           |   var dwarf = undefined;
    return "broken";                  |   var fall = undefined;
  };                                  |   var ring = undefined;
  ring();                             |   function fellowship() {
  return sword;                       |     return "friends";
  fellowship = function() {           |   }
    return "mines"                    |   sword = "sting";
  };                                  |   dwarf = function() {
  sword = function() {                |     return "axe";
    return "glamdring";               |   };
  };                                  |   fall = "Fly you fools!";
  var ring = function() {             |   fellowship = function() {
    return "precious";                |     return "broken";
  };                                  |   };
}                                     |   ring();
                                      |   return sword;
                                      | }
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

#### Analyzing load order II

1. For all variable declarations, put the corresponding declarations at the top of the function. Assign them a value of `undefined` and maintain their order.
2. Now that variable declarations have been placed at the top, remove the original declarations, but leave any associated assignments.
3. Then, hoist all function declarations to immediately after your variable declarations, maintaining their order as well.
4. Any function expression assignment is treated here as executable code, and does not change the load order.
5. Remove any unreachable statements after the first return statement.

```js
function theBridgeOfHoistingDoom() {  | Alrighty, here’s the hoisted version. The function looks for any variables to
  function fellowship() {             | create space for, finds sword, dwarf, fall, and ring, and sets them all to
    return "friends";                 | undefined. There’s only one declared function, fellowship, so that comes next.
  }                                   | In this case, there are no replacement declared functions. The executable code
  var sword = "sting";                | that assigns new values or functions to variable has all var keywords popped off.
  var dwarf = function() {            | Any executable code after the first return of sword is excluded from the answer.
    return "axe";                     |
  };                                  | function theBridgeOfHoistingDoom() {
  var fall = "Fly you fools!";        |   var sword = undefined;
  fellowship = function() {           |   var dwarf = undefined;
    return "broken";                  |   var fall = undefined;
  };                                  |   var ring = undefined;
  ring();                             |   function fellowship() {
  return sword;                       |     return "friends";
  fellowship = function() {           |   }
    return "mines"                    |   sword = "sting";
  };                                  |   dwarf = function() {
  sword = function() {                |     return "axe";
    return "glamdring";               |   };
  };                                  |   fall = "Fly you fools!";
  var ring = function() {             |   fellowship = function() {
    return "precious";                |     return "broken";
  };                                  |   };
}                                     |   ring();
                                      |     return sword;
                                      |  }
```
Answer: console.log("ERROR"); // cause ring() is not a function, it's undefined.

#### Analyzing Load Order III

```js                                 |  // after hoisting
var a = b();                          |  function b() {
var c = d();                          |   return c;
                                      |  }
a;                                    | 
c;                                    |  var a;
                                      |  var c;
function b() {                        |  var d;
  return c;                           |  a = b();
}                                     |  c = d();
                                      |  a;           // ??
var d = function() {                  |  c;           // ??
  return b();                         |  d = function() {
};                                    |    return b(); 
                                      |  };
```

#### The variables declared with `let` or `const` are hoisted but stay **`uninitialised`**

- What is the output?

```js
function foo(bar) {
	if (bar) {
		console.log(baz); // Uncaught ReferenceError: baz is not defined
		let baz = bar;
	}
}

foo("bar");
```

**Note**

- Just like `var`, `let/const` declarations are hoisted to the top. Unlike `var` which is initialized as `undefined`, the `let` keyword is not initialized. So if we try to use a `let` variable before declaration, we'll get a **Reference Error**.

- The variables declared with `let / const` only get initialized when the `let/const/class` statement is evaluated, everything before (above) that is called the temporal `Dead Zone`.

[Ref-1](https://dev.to/sarah_chima/var-let-and-const--whats-the-difference-69e)

[Ref-2](https://stackoverflow.com/a/31222689/4133798)
