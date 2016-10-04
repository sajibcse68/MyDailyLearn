## Lavel 1
---
#### Why Sass ?
- Syntactically Awesome Stylesheets (Sass). Sass, Not SASS
- Looks like CSS, but add features to combat shortcomings.
- preprocessor, like CoffeeScript & Haml:
- Created by `Hampton Catlin` (also creator of Haml)

- Sassy CSS (.scss) is the default file extension
- A second syntax (.sass) exits, but we'll focus on SCSS.
- Since CSS doubles as valid SCSS, try writing styles normally & slowly incorporate new techniques.
- Sass adds `//` for single line comments - not output after compile

#### @import of SCSS vs .scss
- The SCSS `@import` rule has been avoided: prevents parallel downloading
- `@import` with .scss or .sass happens `during compile` rather than client-side
- File extension is optional

#### Partials
- Adding an underscore creates a `partial`. Partials can be imported, but will not compile to .css.
 
```
// application.css (file name)
@import "buttons";
```

- applications.scss and buttons.scss creates application.css and buttons.css (buttons.css is created even if we're importing)
- applications.scss and `_buttons.scss` creates only application.css.

#### Nesting Selectors

```
// application.scss (file-name)
.content {
  border: 1px solid #ccc;
  padding: 20px;
  h2 {
    font-size: 3em;
    margin: 20px 0;
  }
  p {
    font-size: 1.5em;
    margin: 15px 0;
  }
}

// application.css (converted from application.scss)
.content {
  border 1px solid #ccc;
  padding: 20px;
}
.content h2 {
  font-size: 3em;
  margin: 20px 0;
}
.content p {
  font-size: 1.5em;
  margin: 15px 0;
}
```
 
- Certain properties with matching namespaces are nestable.

```
// application.scss
.btn {
  text: {
    decoration: underline;
    transform: lowercase;
  }
}

// application.css
.btn {
  text-decoration: underline;
  text-transform: lowercase;
}
```

- While nesting, the `&` symbol references the parent selector:
 
- Selectors can also be added `before the &` referene:

```
// application.scss
.sidebar {
  float: right;
  width: 300px;
  .users & {
    width: 400px;
  }
}

// application.css (compiled)
.sidebar {
  float: right;
  width: 300px;
}
.users .sidebar {
  width: 400px
}
```
`another example`

```
// application.scss
.sidebar {
  float: right;
  width: 300px;
  h2 {
    color: #777;
    .users & {
      color: #444
    }
  }
}

// application.css
.sidebar {
  float: right;
  width: 300px;
}
.sidebar h2 {
  color: #777;
}
.users .sidebar h2 {
  color: #444;
}
```

- Nesting is easy, but `dangerous`
- Do not nest unnecessarily
- (Tip) - Try limiting nesting to 3 or 4 levels and consider refactoring anything deeper.


## Lavel 2 
---
#### Variable declaration + Use
- Native CSS variable support is still in its infancy,but Sass affords us a way to set reusable values
- Variable names begin with `$` followed by name, like $base.

`The Default Flag`: Variable definations can optionally take the `!default` flag.

#### Types
- Booleans
    - $rounded: false;
    - $shadow: true;
- Numbers - can be set with or without units:
    - $rounded: 4px;
    - $line-height: 1.5;
    - $font-size: 3rem; 
- Colors
    - $base: purple;
    - $border: rgba(0, 255, 0, 0.5);
    - $shadow: #333;
- Strings - can be set with or without quotes
    - $header: 'Helvetica Neue';
    - $callout: Arial;
    - $message: "Loading...";
- Lists
    - $authors: nick, dan, aimee, drew;
    - $margin: 40px 0 20px 100px;
- Null
    $shadow: null;
    
#### Scope
- Variable `set` inside a declaration (within { }) aren't usable outside that block
- Setting `new` values to values to variable set outside a declaration changes future instances.
- If a variable is assigned outside the declaration and change it within a declaration, it change that variable globally.

#### Interpolation
- Use the `Ruby-esque#{$variable}` to shim variables into selectors, property names, and strings

```js
// applications.scss
sup {
    position: relative;
    #{$side}: -0.5em;
}
.callout-#{$side} {
    background: #777;
}

// application.css
sup {
    position: relative;
    top: -0.5em;
}
.callout-top {
    background: #777;
}
```
- Be considerate of variable naming. $color-base gets a lot more mileage than $color-blue.

## Level 3 (Mixin Setup + use)
- Blocks of reusable code that take optional arguments:

```
// _buttons.scss
@mixin button {
  border: 1px soid #ccc;
  font-size: 1em;
  text-transform: uppercase;
}
.btn-a {
  @include button;
  background: #777;
}
.btn-b {
  @include button;
  background: #ff0;
}

// application.css
.btn-a {
  border: 1px solid #ccc;
  font-size: 1em;
  text-transform: uppercase;
  background: #777;
}
.btn-b {
  border: 1px solid #ccc;
  font-size: 1em;
  text-transform: uppercase;
  background: #ff0;
}
```
```
// application.css
.btn-a,
 .btn-b {
  border: 1px solid #ccc;
  font-size: 1em;
  text-transform: uppercase;
  background: #777;
}
.btn-b {
  background: #ff0;
}
``` 
- Make sure the @mixin block comes before the @include, expecially when importing files containing mixins.
- `@include` = use a mixin
- `@import` = import a file

#### Adding Arguments 
- Values passed into a mixin, potentially altering output
- Optionally, what arguments wil default to if not included

#### Multiple Arguments
- Arguments are comma separated and passed in order.
- We can use the values of the arguments in our mixin to create `key value` pairs in our call like so.
- `key value` arguments allow passing in any order.
- Arguments without default values need to `come before` arguments with default values.

```
@mixin button($radius, $color: #0000) {
  border-radius: $radius
  color: $color;
}
.btn-a {
  $include button($color: #777777, $radius: 5px);
}
```
#### Variable Arguments
- Adding `...` to an argument creates a `variable arguments` (vararg)

```
@mixin transition($val...) {
  webkit-transition: $val;
  -moz-transition: $val;
  transition: $val;
}
.btn-a {
  @include transition(color 0.3s ease-in, background 0.5x ease-out);
}
```
- Variable arguments in reverse also allow

```
@mixin button($radius, $color) {
  border-radius: $radius;
  color: $color;
}
$properties: 4px, #000;
.btn-a {
  @include button($properties...);
}

```
#### Interpolation + Mixins

```
@mixin highlight($color, $side) {
  border-#($side)-color: $color;
}
.btn-a {
  @include highlight(#f00, right);
}
```

## Level 4 (Extend)
- Sass will track and automatically combine selectors for us

#### Extend Setup + Use

```
// _button.scss
.btn-a {
  background: #777;
  border: 1px solid #ccc;
  font-size: 1em;
  text-transform: uppercase;
}
.btn-b {
  @extend .btn-1;
  background: #ff0;
}

// application.css
.btn-a, 
.btn-b {
  background: #777;
  border: 1px solid #ccc;
  font-size: 1em;
  text-transform: uppercase;
}
.btn-b {
// adds a second declaration for unique values
  background: #ff0;
}
```

#### Nesting + Extend

```
// application.scss
.content {
  border: 1px solid #ccc;
  padding: 20px;
  h2 {
    font-size: 3em;
    margin: 20px 0;
  }
}
.callout {
  @extend .content;
  background: #add;
}

// application.css
.content,
.callout {
  border: 1px solid #ccc;
  padding: 20px;
}
.content h2,
.callout h2 {
  font-size: 3em;
  margin: 20px 0;
}
.callout {
  background: #ddd;
}
```
#### Extend Pitfalls

```
// application.scss
.btn-a {
  background: #777;
  border: 1px solid #ccc;
  font-size: 1em;
  text-transform: uppercase;
}
.btn-b {
  @extend .btn-a;
  background: #ff0;
}
.sidebar .btn-a {
  text-transform: lowercase;
  }
  
// application.css
.btn-a,
.btn-b {
  background: #777;
  border: 1px solid #ccc;
  font-size: 1em;
  text-transform: uppercase;
}  
.btn-b {
  background: #ff0;
}  
.sidebar .btn-a,
.sidebar .btn-b {                //.btn-b is also scoped here ! 
  text-transform: lowercase;
}
```

- Since `.btn-b` extends`.btn-a`, every instance that modifies .btn-a `also modifies .btn-b`
- Stylesheet .btn-a also modifies .btn-b
- We can counteract with `placeholder selectors`
- Tips: Always, check the CSS output of your Sass before using it on a live site.

#### Placeholder Selectors
- Placeholder selector are denoted with a %
- Can be extended, but never become a selector of their own

```
// application.scss
%btn {
  background: #777;
  border: 1px solid #ccc;
  font-size: 1em;
  text-transform: uppercase;
}

.btn-a {
  @extend %btn;
}
.btn-b {
  @extend %btn;
  background: #ff0;
}
.sidebar .btn-a {
  text-transform: lowercase;
  }
  
// application.css
.btn-a,
.btn-b {
  background: #777;
  border: 1px solid #ccc;
  font-size: 1em;
  text-transform: uppercase;
}  
.btn-b {
  background: #ff0;
}  
.sidebar .btn-a{      // .btn-b is no longer scoped 
  text-transform: lowercase;
}
```
- Placeholder sectors are extremely useful when it comes to CSS styles we want to reuse throughout out style sheet. 
- Tips: Versions of IE prior to 9 have a limit of 4095 selectors-per-CSS file limit 

## level 5 (Directive)
- More on responsive design + Sass later, including a `built-in fluidize` replacement
- Function arguments = `same rules` as mixin arguments

```
// application.scss
@fuction fluidize ($target , $context) {
  @return ($target / $context) * 100%;
}
.sidebar {
  width: fluidize(350px, 1000px);
}

// application.css
.sidebar {
  width: 35%    
}
```

#### If
- Using `@if` we can conditionally output code
- Conparisons
    - `==` equal to
    - `!=` not equal to
    - `>` greater than
    - `>=` greater than or equal to
    - `<` less than
    - `<=` less than or equal to 
- `@else` provides a `fallback` if everything evaluates `false` or `null`

```
//application.scss
$theme: pink;
header {
  @if $theme == dark {
    background: #000;
  } @else if $theme == pink {
    background: ping;
  } @else {
    background: #fff;
  }
}

// application.css
header {
  background: pink;
}
```
#### Each
- The `@each` directive allows us to loop through each list item.

```
//application.scss
$authors: nick aimee dan drew;

@each $author in $authors {
  .author-#{$author} {
    background: url(author-#{$author}.jpg);
  }
}

// application.css
.author-nick {
  background: url(author-nick.jpg);
}
.author-aimee {
  background: url(author-aimee.jpg);
}
.author-dan {
  background: url(author-dan.jpg);
}
.author-drew {
  background: url(author-drew.jpg);
}
```
#### For + While

```
// application.scss
.item {
  position: absolute;
  right: 0;
  @for $i from 1 through 3 {
    &.item-#{$i} {
      top: $i * 30px;
    }    
  }
}

// application.css
.item {
  position: absolute;
  right: 0;
}
.item.item-1 {
  top: 0px;
}
.item.item-2 {
  top: 30px;
}
.item.item-3 {
  top: 60px;
}
.item.item-4 {
  top: 90px;
}
```
- `@for` and `@while` = `@each` with more control
- `@while` requires manually updating the index.
 
#### Mixin' In
- `Mixins`: Needs to use in similar sets of properties used multiple times with small variations
- `Extend`: Sets of properties that match exactly
- `Functions`: Commonly-used operations to determine `values`

```
// application.scss
@mixin button($color, $rounded:false) {
  color: $color;
  @if $rounded  {
    border-radius: $rounded;   // used if $rounded isn't false or null
  }
}
.btn-a {
  @include button(#000);     
}
.btn-b  {
  @include button(#333, 4px);
}

```
  