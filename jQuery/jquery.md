* Elaboration
  - DOM (Document Object Model)

##### Why should we use jQuery?
- find: elements in an HTML document
- change: HTML content
- listen: to what a user does and react accordingly.
- animate: content on the page
- talk: over the network to fetch new content.

##### Miscellaneous
```
- jQuery("h1") = $("h1")                    // short and sweet syntax
- $("h1").text("updating the text")         // text() is a method offered by jQuery
- $(document).ready(function(){
	<code>
});                                         // will only run this code once the DOM is "ready"
```
##### Searching in the DOM
```
- $("#id > li")                                  // only select direct descendants
- $(".class1, #id1")                             // comma allows to select multiple items
- $("#id li:first")                              // select first item of the list
- $("#id li:last")                               // select last item of the list
- $("#id li:even")                               // select only even list (index start from 0)
- $("#id li:odd")                                // select only odd list
- $(tr).children('td:eq(1)').text()              // select second 'td' from 'tr' in a table
```
##### Traversing
```
// traversal takes a bit more code, but it's faster
$("#id").find("li")                              // here, $("#id") is selection and find("li") is traversal
$("li").fast()                                   // same as li:first
$("li").last()                                   // same as li:last
$("li").first().next()                           // select the 2nd list item, it's method chaining
$("li").first().parent()                         // select the parent of unordered list, walking up the DOM
$("#id").children("li")                          // children(), unlike find(), only selects direct children, walking down the DOM
```
##### Manupulating the DOM
```
- var price = $('<p>Demo text</p>');
- $(this).closest('.className').append(price);
- $('.className').before(price)                  // puts the price node before .className
- $('.className').after(price)                   // puts the price node down .className
- $('.className').prepend(price)                 // puts the price node top (as a first child) of .className
- $('.className').append(price)                  // puts the price node bottom (as a last child) .className
- $('.className').before(price)                  // puts the price node before .className
- $('.className').after(price)                   // puts the price node down .className
- $('.className').prepend(price)                 // puts the price node top (as a first child) of .className
- $('.className').append(price)                  // puts the price node bottom (as a last child) .className

// same as before, reference point comes at the end, some people think this is more readable
$ price.insertBefore($('.className'));
$ price.insertAfter($('.className'));
$ price.prependTo($('.className'));
$ price.appendTo($('.className'));
```

##### Traversing and Filtering
```
$('.className').on('click', 'button', function(){});        // Only target a 'button' if it inside a '.className', here function() is our event handler function
$('.vacation').filter('.onsale')                            // finds elements with a call of .vacation and .onsale
$('.vacation').filter('.onsale').addClass('newClass')       // addClass() adding a .newClass
```
##### Redirect url onclick
```
$('.go-signup').on('click', function(e) {
  e.preventDefault();
  window.location.href = '/signup';
});
```
##### Retrieve data from html by jQuery
```
// jQuery Object Method
/*
Mouse Event: click, focusin, mousedown, mousemove, mouseover, mouseenter, dbclick, focusout, mouseup, mouseout, mouseleave
Keyboard Events: keypress, keydown, keyup
FormEvents: blur, select, change, focus, submit
*/
.data(<name>)                                    // get the value  (in html data-price)
.data(<name>, <value>)                           // set the value of an attribute
.slideDown()                                     // show it
.slideUp()                                       // hide it
.slideToggle                                     // toggle between show and hide
.val()                                           // to get the input value
.val(<new value>)                                // to set the input value
.fadeIn()
.fadeOut()
.fadeToggle()
.animate(<object>)                               // takes in a javaScript object similar to the .css() method
.hasClass(<className>)                           // checks if a class exist or not
```
##### HTML5 allows us to create our own **custom attributes** to store data
// We need to be prepended with the word 'data', and words are separated by dashes.
```
// html code
<p id="para" data-foo="bar" data-foo-bar="true">
    This is dummy text, dummy.
</p>
```
```javascript
// Fetch data with js
<script type=="text/javascript">
  var para = document.getElementById('para');
  para.getAttribute('data-foo');                        // Expect "bar"
  para.dataset.bar);                                    // Grabs "data-bar", expect "baz"
  para.dataset.fooBar);                                 // Grabs "data-foo-bar" (Magic!!), expect "true"
// jQuery's data() can read also HTML% attributes but it also does something that getAttribute() doesn't.
 $('#para').data('foo')                                 // Expect "bar"
 $('#para').data('fooBar')                              // Grabs "data-foo-bar" (Magic!!), expect "true"

// set a value
$('#para').data('foo',"sajib");                         // foo = "sajib" (setter)
</script>
```

`
<li class="vacation onsale" data-price='399.99'>
</li>
$('.vacation').first().data('price')`                   // read from the 'data-price' attribute, we can retrieve data by data('price')

`$(this).closest('.confirmation').find('.ticket').slideDown()`  // closest() searches up through ancestors, find() searches down through children

##### Refactor using traversing
`$(this).closest('.vacation').append(price)`

##### Expanding on on()
`
var price = $(this).closest('.vacation').data('price');        // price = '399.99'
var price = +$(this).closest('.vacation').data('price');       // price = 399.99, convert the string into number
`
##### Link Layover
```
event.stopPropagation()                                        // the browser will still handle the click event but will prevent it from "bubbling up" to each parent node
event.preventDefault()                                         // the click event will "bubble up" but the browser won't handle it
```
##### Taming CSS
```
$(this).css({'background-color': '#24839',
			 'border-color': '1px solid #967'})                // passing in a js Object as an argument is a common jQuery pattern
$(this).find('.price').show();                                 // same as display: block
$(this).find('.price').hide()                                  // same as display: none
$(this).toggleClass('classname')                               // add the class if $(this) doesn't have it
```
##### Animation
```
$(this).animate({'top': '-10px'})                              // default 400
$(this).animate({'top': '-10px'}, 'fast')                      // speed 200
$(this).animate({'top': '-10px', '200'})
```
##### write a jQuery Plugin
```
$.fn.validation = function() {
// validation is the name of our plugin.
// using .fn makes this plugin in all jQuery object.
}
```

##### Promise (Pretty advanced)
```javascript
var promise = $.Deferred();            // jQuery method for creating a promise object
                                       //
promise.resolve(value);                // Calls the done callback
promise.done(function(value){});       // Similar to AJAX success callback
                                       
promise.reject(value);                 // Calls the fail callback
promise.fail(function(value){});       // Similar to AJAX error callback

// calling two/more promises in parallel
$.when(<promise1>, <promise2>, <promise3>...)      
.then(function(p1Data, p2Data), p3Data{});
// Here parameter can not be array, only promises `separated by commas`. Callback data is in the same order as the promises

```
`Rejections` heppen when a promise is explicitly rejected, but also implicitly if an error is thrown in the constructor callback.
```
    a1().then(fucntion() {                      |      a1 ---> success --> a2
        return a2();                            |      a1 ---> Fail    --> aRecovery1
    }).then (function() {                       |
        return a3();                            |      a2 ---> success --> a3
    }).catch(function(err) {                    |      a2 ---> Fail    --> aRecovery1
        return aRecovery1();                    |
    }).then(function() {                        |      a3 ---> success --> a4
        return a4();                            |      a3 ---> Fail    --> aRecovery1
    }, catch(function(err) {                 |
        return aRecovery2();                    |      aRecovery1 ---> success --> a4
    }).catch(function(err) {                    |      aRecovery1 ---> Fail    --> aRecovery2
       console.log('Don't worry about it!);     |
    }).then(function() {                        |      a4 ---> success --> All's done
       console.log('All's done');               |      a4 ---> Fail    --> Don't worry about it
    }                                           |
                                                |      aRecovery2 ---> success --> All's done
                                                |      aRecovery2 ---> Fail    --> Don't worry about it
                                                |
                                                |      Don't worry about it ---> success --> All's done
                                                |
```
Sample `example of promise`
```javascript
// vacation.js
var Vacation = {
  getPrice: function(location){
    var promise = $.Deferred();
    $.ajax('/vacation/prices', {
      data: {q: location},
      success: function(result){
        promise.resolve(result.price);
      }
    });
    return promise;
  }
}
```
```javascript
// photo.js
var Photo = {
  getPhoto: function(location){
    var promise = $.Deferred();
    $.ajax('/vacation/photos', {
      data: {q: location},
      success: function(result){
        promise.resolve(result.url);
      }
    });
    return promise;
  }
}
```
Now call using `$.when()` and `then()`

```javascript
// application.js
$(document).ready(function() {
  $('button').on('click', function(){
    var tour = $(this).parent();
    var location = tour.data('location');
    var resultDiv = tour.find('.results').empty();
    
    $.when(
      Vacation.getPrice(location),
      Photo.getPhoto(location)
    ).then(function(priceResult, photoResult) {
      $('<p>$'+priceResult+'</p>').appendTo(resultDiv);
      $('<img />').attr('src', photoResult).appendTo(resultDiv);
    });
  });
});

```

#### Animation using CSS
```
in css:                                 // make sure browser supports transition
.vacation {
transition: -10px;
}
.highlighted {
	top: -10px;
}
```