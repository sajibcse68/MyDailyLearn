#### Public class fields

```js
class IncreasingCounter {
  _count = 0;
  get value() {
    console.log('Getting the current value!');
    return this._count;
  }
  increment() {
    this._count++;
  }
}
```

#### Private class fields

- The new private fields syntax is similar to public fields, except `we mark the field as being private by using #`. We can think of the `#` as being part of the field name:

```js
class IncreasingCounter {
  #count = 0;
  get value() {
    console.log('Getting the current value!');
    return this.#count;
  }
  increment() {
    this.#count++;
  }
}
```

- Private fields are not accessible outside of the class body:

```js
const counter = new IncreasingCounter();
counter.#count;
// → SyntaxError
counter.#count = 42;
// → SyntaxError
```

#### Public and Static properties

- Class fields syntax can be used to create public and private static properties and methods:

```js
class FakeMath {
  // `PI` is a static public property.
  static PI = 22 / 7; // Close enough.

  // `#totallyRandomNumber` is a static private property.
  static #totallyRandomNumber = 4;

  // `#computeRandomNumber` is a static private method.
  static #computeRandomNumber() {
    return FakeMath.#totallyRandomNumber;
  }

  // `random` is a static public method (ES2015 syntax)
  // that consumes `#computeRandomNumber`.
  static random() {
    console.log('I heard you like random numbers…')
    return FakeMath.#computeRandomNumber();
  }
}

FakeMath.PI;
// → 3.142857142857143
FakeMath.random();
// logs 'I heard you like random numbers…'
// → 4
FakeMath.#totallyRandomNumber;
// → SyntaxError
FakeMath.#computeRandomNumber();
// → SyntaxError
```

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

- Second: Using the New Class Syntax (Object Oriented Flavour like other OOP language)
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
                              // ^ can access previously assigned instance variables
  }

  _buildLink(url) {     // Prefixing a method with an underscore is a convention for indicating that it should not be invoked from the public API (Private Method)
  }
}
```

#### Creating an Instance From a Class
- The class syntax in not introducing a new object model to JavaScript. It's just **syntactical sugar** over the
existing **prototype-based** inheritance.

```js
// syntactic Sugar              |  // Prototype Object Model
class SponsorWidget {           |  function SponsorWidget(name, description, url) {
  //...                         |    //...
}                               |  }

// Instances are created the same way
let sponsorWidget = new SponsorWidget(name, description, url);
SponsorWidget.render();
```

#### Class Inheritance

- We can use class inheritance to reduce code repetition. Child classes **inherit** and **specialize** behavior
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
}                                       |   let css = this._buildCSS(this.baseCSS);  // this.baseCSS is inherited properties
                                        |  }
                                        | }
```

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

x.foo.call(B); // one:B two:A  <--- Oops!!

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