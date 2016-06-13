##### Notes
- When browser find the `<script>` tag to download, all other parallel downloading halts. (6 files can be downloaded by modern browser)
- if we add `async` in <script> tag then it would be downloaded asynchronously
    - e.g. <script type="text/javascript" src="http://www.abc.com/test.js" async></script
- Efficient choices for `string concatenation` is `+=`
    - e.g. const a = ''; a += 'b'; a += 'c';
- Use a document fragment to insert additions all at once. Fragments are invisible containers that hold multiple DOM elements without
  being a node itself.
```javascript
var list = document.getElementById('kotwList');
var kotw = ["Jenna Rangespike", "Neric Farthing", "Darkin Stonefield"];

var fragment = document.createDocumentFragment();
// First we create a fragment, which will function as a staging area to hold all of our new `li` elements


for (var i=0, len = kotw.length; i<len; i++) {
    var element = document.createElement('li');
    element.appendChild(document.createTextNode(kotw[i]));
    fragment.appendChild(element);
// now we add each new `li` element to the staging fragment, instead of to the document itself
}
list.appendChild(fragment);
// Finally, we append all of our new text nodes in one fell swoop, using only one DOM touch!
```
- Every `var` keywords adds a look-up for the JavaScript parser that can be avoided with comma extensions.
- For concatenation over an array's contents,`join()` method is faster (inherited from the Array prototype)
- `console.time('start a timer')` and `console.timeEnd)('start a timer')`                      -> (to unite timer boundaries into one timer, their parameter labels must match)
    - e.g. start a timer: 0.036 ms   
    // `console.time` automatically prefaces the time measurement with the label we passed in a `parameter, plus a colon`.
- The `tripple-equla (===)` comparator compares both `type and contents`. `===` seeks a `strict` equality.
- The `instanceof` operator helps identity objects.
- `Exceptions`: are run time errors.
- JavaScript `with` keyword is somewhat unreliable and often expensive.
- Keyword `with` tries and technically does limit redundancy, but makes us rather unsure about scope.
- Use variables to cache objects (it is more clear than `with` and also no lengthy nested object names!)

- JavaScript's `eval` keyword may not be evil, but it can affect legibility, an ability to debug and performance.
- 

#### Change the tooltip value with js when button is clicked
```
// html part
  <a class="btn" data-toogle="tooltip" data-placement="top" data-original-title="Copy">Click me</span></a>
/*
  N.B. `data-original-title` is changing(Copy/Copied) dynamically by js,
 can also use `title`, `title` originally converted to `data-original-title`
*/

// Trigger this code for `click` event
  const html = e.target.closest('.tooltip-show');
  $(html).removeAttr('data-original-title').attr('data-original-title', 'Copied');
  $(html).tooltip('show');

// Trigger this code for `mouseleave` event
  $(('.tooltip-show')).removeAttr('data-original-title').attr('data-original-title', 'Copy');
```

#### Check if specific html portion is visible or not!
 ``` 
 var html = $(this).closest('.box');
  html.find('.file-data').toggle();
  const btnTake = html.find('.show-hide-btn');
  if(html.find('.file-data').is(':visible')) {
     btnTake.text('Hide');
  } else {
     btnTake.text('Show');
  }
```

#### Why `Eval` should be avoided!
```
function regimentmotto(number, motto) {
    eval('regiment' + number + ".motto = '" + motto + "'");
}
// here the `eval` method will take a string as a parameter, start the JS compiler, and treat that string as if it were
// a line of code to execute  
regimentmotto(1, 'The king's motto');  // will give compile error for `king's` "'" comma, compiler treats as incomplete string. 

// Fix compile error
eval('regiment' + number).motto = motto;
// Try to minimize the operations that your new mini-program needs to engage in... which will also have the benefit of
// improving your debug compability.

```
- Eval is most often misused for just this kind of `mapping number's to objects`, but an is much more efficient. 
- Eval might be usefull for dynamic code or uncontrollable data, but it's still treating the string as a program to expensively compile 
- Use `JOSN,parse()` to ensure only json is accepted. JOSN.parse or a parser library that recognizes JSON, helps to avoid both th security
  and performance issues posed by `eval`
- Leaving of {}. Please use {} even when we have only one statement of `if` or `for`.
  

#### JavaScript: The Good Parts
- 100 and 1e2 are the same number
- `NaN` is not equal to any value, including itself. Detect `NaN` with the `isNaN(number)` function.
- `Infinity` is any value greater that 1.79769313486231570e+308.
-