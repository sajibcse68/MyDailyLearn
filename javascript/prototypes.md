## Prototypes!
- A constructor makes an object ~~"based on"~~ its own **prototype**. (JS doesn't do copy).
- A constructor makes an object `linked to` its own `prototype`.

#### What is a constructor call?
- Function call with a `new` keyword

#### What is **[[Prototype]]** and where does it come from?
- It means a object linkage. It comes when we create a `new object`.

#### How does **[[Prototype]]** affect the behavior of an object?
- When we call an method/property/object of an object, if it is not found then it is delegated the chaining by `[[Prototype]]`.

#### What is the 3 different ways to find where an object (say, `ob`) **[[Prototype]]** is linked to?
- `ob.__proto__`
- Object.getPrototypeOf(ob)
- ob.constructor.prototype

#### Discuss: `__proto__`, `[[prototype]]` and `prototype`

- `[[Prototype]]` is an object specifies its prototype via the internal property.

```js
const foo = {
  getName: function() {
    return this.name;
  }
};

const a1 = {
  [[prototype]] = foo;
  name: 'sajib';
}

a1.getName(); // sajib
```

- `__proto__` brings direct access to [[Prototype]].
- `prototype` is the **object** that is used to build `__proto__` when we create an object with `new`.
- `prototype` is not available on the instances themselves (or, other objects), but only on the **constructor functions**.
- `prototype` is only available on functions since they are **copied** from `Function` and `Object`, but in anything else it is not. However, `__proto__` is available everywhere.
- Any method declared directly to `Function` will be considered as `static method`, which means `it exists as local property of` that Function `only and won't available to its instances`.

```js
  function A() {
    function staticMethod() {
      // this is static method and can't access from the instance of A
    }
  }

  const ob = new A();
  ob.staticMethod(); 
  // TypeError: A.staticMethod is not a function
```


#### Two mechanism always exists in JavaScript codes -- Lexical Scopes & Prototype Chain:

<img src="../images/lexical-scope-and-prototypes-chain.png" alt="lexical-scope-and-prototypes-chain" width="400px"/>