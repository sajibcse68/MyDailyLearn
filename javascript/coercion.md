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
a && c  // null
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

==================

```js
[] == ![]; // true
[] + {};   // "[object Object]"
{} + [];   // 0

Number('');       // 0
Number(' ');      // 0
Number('\r\n\t'); // 0

Number('0');     // 0
Number('-0');    // -0
JSON.parse('-0') // -0

- 0;             // 0
Number('- 0');   // NaN

JSON.stringify(-0); // '0' !
String(-0);         // '0'
-0 + '';            // '0'

Number('0.');       // 0
Number('.0');       // 0
Number('.');        // NaN

Number(undefined)   // NaN
Number(null)        // 0

Number('0O0');      // 0
Number('0X0');      // 0

Number({});         // NaN
Number([]);         // 0

String({});         // "[object Object]"
String([]);         // ''

String(null);       // 'null'
String([null]);     // ''

String(undefined);  // 'undefined'
String([undefined]); // ''

String([null, null,]);   // ','

String([undefined, undefined,]); // ','

String([,,]);          // ','
```

```js
o1 = { hello: 'world'};

o2 = Object.create(null);
o2.hello = 'world';

o1 + '';  // '[object Object]'
o2 + ''; // TypeWError!
```

```js
Array(3);
// C
```