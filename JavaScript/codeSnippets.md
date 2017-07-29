### Get details of DNS
```js
console.log('document.URL : ', document.URL);                             // http://sub.mydomain.com:1234/a/b/c/d
console.log('document.location.href : ', document.location.href);         // http://sub.mydomain.com:1234/a/b/c/d 
console.log('document.location.origin : ', document.location.origin);     // http://sub.mydomain.com:1234  
console.log('document.location.hostname : ', document.location.hostname); // sub.mydomain.com
console.log('document.location.host : ', document.location.host);         // sub.mydomain.com:9999
console.log('document.location.pathname : ', document.location.pathname); // /a/b/c/d
```

#### indexOf() and splice() method
this.swords.indexOf(val) >== 0  
- swords is an array. The indexOf() will return the first found index of a value, or -1 if it's not found. 

this.swords.splice(this.swords.indexOf(val), 1)
- If the right sword is available, we will remove it from the swords array with some index cleverness. `[0]` denote from where search would be start and `1` denotes how many item(s) we want to remove.
- const soldiers = ["Knights", "Pikemen", "Archers"];
- soldiers.splice(1, 2); will delete "Pekemen" and "Archers" and returns ["Pekemen" , "Archers"]
 
#### jQuery `.clone()` method
- Create a deep copy of the set of matched elements.
- `clone()` vs `append()`

```js
// html 
<div class="container">
    <div class="hello">Hello</div>
    <div class="goodbye">Goodbye</div>
</div>

// .append() normally when an element is inserted somewhere in the DOM, it is moved from its old location
$('.hello').appendTo('.goodbye');

// The resulting DOM structure would be: (removed from previous location and in new position)
<div class="container">
  <div class="goodbye">
    Goodbye
    <div class="hello">Hello</div>
  </div>
</div>

// To prevent this and instead create a copy of the element, we could write the following:
$( ".hello" ).clone().appendTo( ".goodbye" );

// This would produce 
<div class="container">
  <div class="hello">Hello</div>
  <div class="goodbye">
    Goodbye
    <div class="hello">Hello</div>
  </div>
</div>
```

#### Check if JavaScript object is JSON
```
var objectConstructor = "test".constructor;
var arrayConstructor = [].constructor;
var objectConstructor = {}.constructor;

function whatIsIt(object) {
    if (object === null) {
        return "null";
    }
    else if (object === undefined) {
        return "undefined";
    }
    else if (object.constructor === stringConstructor) {
        return "String";
    }
    else if (object.constructor === arrayConstructor) {
        return "Array";
    }
    else if (object.constructor === objectConstructor) {
        return "Object";
    }
    else {
        return "don't know";
    }
}
```
[ref](http://stackoverflow.com/questions/11182924/how-to-check-if-javascript-object-is-json)
 
### A Common `Misconception`
```js
Foo.method = function() {
  function test() {
    // here `this` is set to "global object"
  }
  test();
}
```
- A common misconception is that `this` inside of `test` refers to `Foo`; While in fact, it does not.
- In order to gain access to `Foo` from within `test`, we can create a local variable inside of `method` that refers to `Foo`
```js
Foo.method = function() {
  var self = this;
  function test() {
    // Use `self` instead of this here
  }
  test();
 }
```
- `self` is just normal variable name, but it is commonly used for the reference to an outer `this`:
- In combination with `closures`, it can also be used to pass `this` values around.
- As of ECMAScript 5 we can use the `bind` method combined with an anonymous function to achieve the same result
```js
Foo.method = function() {
  const test = function() {
    // this now refers to Foo
  }.bind(this);
  test();
}
```

### Get user's current longitude and latitude
Every browser has an built in navigator that can give us user's langitude and latitude.
Browser will show a promt to allow/block this site from knowing user's current location.

```js
if( navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(pos) {
    $('#data').html("latitude: " + pos.coords.latitude + "<br>longitude: " + pos.coords.longitude);
  });
}
```

### Convert Integer value to Roman numerical string.

The Rules-
- When the symbol appears `after a larger` symbol it is `added`.
  - e.g. VI = V + I = 5 + 1 = 6
- But if the number appears `before a larger` symbol it is `subtracted`.
  - e.g. IX = X - I = 10 - 1 = 9
- Don't use the same symbol more than three times in a row.


```js
function convertToRoman(num) {
  var huns = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  var tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  var ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  console.log('>num', num);
  var res = "";
  while (num >= 1000) {
    res += "M";
    num -= 1000;
  }

  res += huns[Math.floor(num/100)]; num %= 100;

  res += tens[Math.floor(num/10)]; num %= 10;

  res += ones[num];

  return res;
}

convertToRoman(36);
```
 
### Fancy Codes

```js
// Create a new object (server response)
const o = Object.create(null);

// Convert browser into an Editor
document.body.contentEditable=true

// console.log, console.dir, console.table
- console.log prints the element in an HTML-like tree
- console.dir prints the element in an JSON-like tree
- console.table prints the values into a table

// Find events associated with an element in the DOM
const allEvents = getEventListeners($('selector'));

// Monitor Events, monitor all the events associated with the element
const monitorEvents = monitorEvents($('selector'));

// Arrange the values of a variable into a table
console.table('variableName');
console.table();                      // see all the data of curent state

// Inspect an element in the DOM
inspect($('selector'));

// List the properties of an element, returns an object with all of the properties associated with its DOM element
dir($('selector'));

// Retrieve the value of last result
$_

// Clear the console and Memory
clear()

// set the context for a function by .call() or .apply()
myfunc.call(this);
myfunc.apply(this);

// add DOM element and `class` inside that element
const li = document.createElement('li');
li.className = '<class-name>';

// UTC to human readable date
const date = new Date(<timestamp> * 1000);

// Get the full url
const fullUrl = window.location.href();
```







































