<!------------ Front-End Formation ----------->
#### CSS3 Overflow
- Border radius
- Bax shadow, text shadow
- Transitions, transforms
- Gradients
- Multiple backgrounds
- Font face

## Updated HTML5 Elements
#### Doctype
`<!DOCTYPE html>` - the new HTML5 doctype

#### Meta declaration
`<meta charset="UTF-8">` - the meta declaration in HTML5

#### Script tag
- HTML4 
    - <script type="text/javascript" src="file.js"></script>
- HTML5
    - `<script src="file.js"></script>` - in HTML5 the `type` attributes is not needed as the browser
    will infer javascript as the type.
    
#### Link tag
- HTML4
    - <link rel="stylesheet" type="text/css" href="file.css">
- HTML5
    - <link rel="stylesheet" href="file.css"> - here we don't need the `type` attribute on the `link` tag
    
#### Existing HTML5 Tag Updates
Traditionally presentational tags, the `i`, `b`, `em` and `strong` tags have been given new semantic meanings.

#### Some example uses for the `i` tag in html5
- Taxonomic designation
- Technical term
- Idiomatic phrase from another language
- Transliteration
- A thought
- Ship name in Western texts

e.g. <p><i>I hope this works</i>, he thought.</p>. Text in <i> tag and `alternate voice` or `mood`

#### Some example uses for the `b` tag in html5
- Key example uses for the `b` tag
- Product names in a review
- Actionable words in interactive text-driven software
- Article lead

e.g. <p class="lead">The event takes place this upcoming Saturday, and over 3,000 people have already registered</p>.
Article lead that will be `stylistically offset`.

#### in HTML5, the `em` and `strong` tags have new meanings:
- The `em` tag now means `stress emphasis`
- The `strong` tag now means `strong importance`

e.g. <p>Make sure to sign up <em>before</em> the day of the event, <strong>September 16, 2013</strong>.</p> 

## Table of Contents
#### Section
The section element represents a generic document or application section.
- Section vs Div
    - A `div` has no semantic meaning, but the `section` element does. It's used for grouping together thematically related content.
```
<section>
    <h2>The Gallery </h2>
    <!-- ... -->
</section>
```

#### The Document Outline
The following elements have their own self-contained outline:
- Article
```
<h1> This is the title of the page. </h1>
<section>
    <h2>This is the title of a sub-section.</h2>
</section>

<!--
Output:
1. This is the title of the page.
   1.1 This is the title of a sub-section.

If we replace the <h2> with <h1>, the output will remain the same.
-->
```

- Aside
- Nav
- Section
   
#### Header
A group of introductory or navigational aids.
- There can be many different `headers` on a page.
- Usually appears at the top of a document or section, but is defined by its `content` rather than its `position`.
- Example usage of the `header` tag within a `section`:
    ```
    <section>
        <header>
            <!-- The header for this section -->
            <h1>The heading of the section </h1>
            <p>This is content in the header</p>
        </header>
    </section>
    ```
#### Footer
The `footer` element represents a footer for its nearest ancestor sectioning content or sectioning root element. 

```
<section>
        <header>
            <!-- The header for this section -->
            <h1>The heading of the section </h1>
            <p>This is content in the header</p>
        </header>
    
    <footer>
    <!-- A footer for the section element -->
        <p>By 'Author Name'</p>
    </footer>
</section>
```

#### Aside
- Initially, the HTML5 spec defined the `aside` element as being `tangentially` related to the content surrounding it.       
- An `aside` element is appropriate when it is used to represent content that is not primary focus of an
article or page, but it is still related to the article or page.
- Example usage of the `aside` tag withing a `section`

```
<section>
    <header>
        <!-- The header for this section -->
        <h1>The heading of the section </h1>
        <p>This is content in the header</p>
    </header>
    
    <aside>
        <!-- An aside for the section element -->
        <p>Some secondary information </p>
    </aside>
    
    <footer>
    <!-- A footer for the section element -->
        <p>By 'Author Name'</p>
    </footer>
</section>
```
#### Nav
The `mav` element represents a section of a page that links to other pages or to parts withing the page: a section with navigation links.
The`nav` element is intended for `major navigation`
```
<nav>
    <ul>
        <!-- Make our document more semantic, more clear, and has a more meaning -->
    </ul>
</nav>
```

#### Article
The `article` element is another type of `section`. It is used for self-contained related content.
- Determine if a particular piece of content is `self-contained:`
    ```
    Ask yourself if you would syndicate the content in an RSS or Atom feed.
    ```
- Some uses for the `article` tag:
    - A blog post
    - A news story
    - A comment on a post
    - A review
```
<article>
<!-- ... -->
</article>
```
#### Main
The `main` element represents the main content of the body of a document or application.The `main` content area consists of content that is diectly related to
or expands upon the central topic of a document or central functionality of an application.
- Do not include more than one `main` element in a document
- Do not include the `main` element inside of an `article`, `aside`, `footer`, `header`, or `nav` element.
```
<main>
<!-- more semantic meaning -->
</main>
```
 
#### Figure/figcaption
The `figure` element represents a unit of content, optionally with a caption, that is self-contained, that is typically referenced 
as a single unit from the main flow of the document, and that can be moved away from the main flow of the document without
affecting the document's meaning.
- A common use of the `figure` tag is for an image within an `article`
- The `figcaption` element represents a caption or legend for a figure.
```
<figure>
    <img> src="image.jpg" alt="My Picture"
    <!-- The caption for the picture -->
    <figcaption>his is a caption for the picture. </figcaption> 
</figure>
  
```
#### Time
The `time` element represents either a time on a 24 hour clock, or a precise data in the proleptic Geogorian calendar,
optionally with a time and time-zone offset.
- With the `datetime` attribute , the content can be anything relevant.
- Without the `datetime` attribute, content must be a valid date, time, or precise datetime.
```
<time datetime="2013-09-16">09/16/2013</time>

```

#HTML5 Forms
## New input types
- If a browser doesn't support the input `type`, if defaults to `text`.
#### Search
The `input` element with a type attribute whose value is `search` represents a one-line plain-text edit control for entering
one or more search terms.
```
<input type="search" />
```
#### Email
The `email` input looks just like a regular text input, but with added usability on mobile devices.
```
<!-- Useful email-related keys are now set by default such as @ or . -->
<input type="email" />
```
#### URL
The `url` input looks just like a regular text input, but with added usability mobile devices.
```
 <input type="url">
```
#### Date
The `input` element with a type attribute whose value is `date` represents a control for setting the element's value to
a string representing a date.

```
<!-- Useful url-related keys are now set by default such as @123 , . , / , .com -->
<input type="date" />
```

#### Tel
The `tel` input looks just like a regular text input, but with added usability on mobile devices.
```
<!-- Keyboard will be changed like telephone keyboard -->
<input type="tel" />
 
```
#### Number
The input element with a type attribute whose value is `number` represents a precise control for settings the element's
value to a string representing a number.
```
<input type='number' />
```
#### Range
The `range` represents an imprecise control for setting the element's value to a string representing a number;
```
<input type='range' />
<!-- Drag a slider -->
```

#### Month
```
<input type='month' />
```

#### Week
```
<input type='week' />
```


#### Time
```
<input type='time' />
```
#### Datetime
```
<input type='datetime-local' />
```
#### Datetime-local
- Datetime-local vs Datetime
    The input element with a type attribute whose value is `datetime-local` represents a control for setting the elements
    value to a string representing a local data and time (with no timezone information).

#### Color
The `color` represents a color-well control, for setting the element's value to a string representing a simple color.
```
<input type='color' />
```


## New form elements
#### Datalist
The `datalist` element represents a set of option elements that represent predefined options for other controls.

```
<input type="text" list="browsers" />

<datalist id="browsers">
    <option value="Chrome">
    <option value="Firefox">
    <option value="Internet Explorer">
    <option value="Opera">
    <option value="Safari">
</datalist>

```
#### Keygen
#### Output

## New form attributes
#### Placeholder
The `placeholder` attribute allow you to specify a message that is shown inside the input, hidden when the user starts typing,
and then returns when focus is lost on the input (when the input is blank).
```
<input type="text" placeholder="Enter your email... " />
```

#### Autofocus
The `autofocus` attribute will automatically focus the specified input when the page is rendered.
```
<!-- The input field is focused when the page is rendered -->
<input type="text" autofocus />
```
#### Autocomplete

#### Required
If we add the new HTML5 `required` attribute to an input, when the form is submitted, the user will be notified of an 
error if the field is left blank.
```
<input type="text" required />
```
#### Pattern
The `pattern` attribute accepts a JavaScript regular expression that can be used to validate a form to match the pattern.
```
<!-- We want the pattern to be 3 0-9 digits -->
<input type="text" pattern="[0-9]{3}">
```
#### List

#### Multiple
 
#### Novalidate

#### formnovalidate

#### form

#### formaction

#### formenctype

#### formmethod

#### formtarget  

  
## CSS3 Styles
#### Border Radius
- The `border-radius` property applies rounded corners to borders
```
border-radius: <top left> <top right> <bottom right> <bottom left>
```
- We can also specify the `border-radius` value in percentages.
```
border-radius: 50%    // will get a perfect circle
```
#### Box Shadow
The `box-shadow` property specifies a shadow on an element.

```
box-shadow: <inset> <offset-x> <offset-y> <blur-radius> <spread-radius> <color>

.box {
    box-shadow: 1px 2px 2px #000;
}
```

#### Text Shadow
The `text-shadow` property is very similar to box-shadow, but it applies the shadow to text,
as th name implies.

```

text-shadow: <offset-x> <offset-y> <blur-radius> <color>

h1 {
    text-shadow: 1px 2px 2px #000;
}

<h1> I have a shadow </h1>
```

#### Box Sizing
- The `box-sizing` property is used to change the default CSS box model, which is used to 
  calculate widths and heights of given elements
- The CSS box model references the `design` and `layout` of given HTML elements.
- Each HTML elements is a `box` which consists of `margins`, `borders`, `padding`, and the `content` of the element. 
- The `box model` refers to `how those properties are calculated` in conjunction with one another in order `to set the elements dimensions`.
- There are three different values for box-sizing.
    - content-box
        - This is the `default value`. The `width` and `height` are measured by including only `the content`, but not
        `the border, margin or padding`  
    - padding-box
        - The `width` and `height` include the `padding`, but do not include the `border` or `margin`.
    - border-box
        - The `width` and `height` include the `padding` and `border`, but not the `margin`.
```
.box {
    box-sizing: border-box; // padding-box
    border: 2px solid black;
    margin: 20px;
    padding: 10px;
    width: 300px; 
}
```
#### Multiple Background
CSS3 allows us to apply `multiple backgrounds` to an element. They are stacked in the order in which we specify them.

```
.element {
    background-image: url(bg1.png), url(bg2.png);
    background-position: top-left, center right;
    background-repeat: no-repeat, no-repeat;
}

or,

.element {
    bacground:
        url(bg1.png) top left no-repeat,
        url(bg2.png) center right no-repeat;
}

```

#### Color
CSS3 provides multiple ways to work with color:
- RGBa
    `RGB` represents the three additive primary colors, red, green and blue. In CSS3, we can also pass the alpha
    value(the `a` in RGBa) which represents the opacity of a color.
```
.element {
    color: rgba(0, 0, 0, 0.75);
}    
```
- HSLa
    CSS3 also adds `HSLa` (Hue, Saturation, Lightness). In addition to providing the hue, we can specify the alpha values
    for the opacity of the color.

```
.element {
    color: hsla(240, 100%, 50%, 0.75);
    
    <!--  240: hue, 100%: saturation, 50%: lightness, 0.75 alpha  -->
}
```
- `HSLa` is more intuitive than `RGBa` ,and it's much easier to make color adjustments on the fly. However use whichever
   we prefer.

#### Opacity
CSS3 allows us to specify the `opacity` of an element using `opacity` property.
- Opacity on an element affects all elements that are nested inside.

```
.element {
   opacity: 0.45        // 45% opacity  
}
```

#### Gradients
CSS3  provides the ability to create `gradients`, smooth transition between two or more colors.

There are two types of gradients that browsers support
- Linear gradients
To create a `linear gradient`, we need to specify the starting point, the ending point, and optional stop-color points.
- `linear-gradient(<angle> to <side-or-corner>, <color-stop>)`
    - The `angle` is generally a degree (e.g. 45deg)
    - THe `side-or-corner` consists of two keywords: Horizontal: left/right, Vertical: top/bottom.
    - The `color-stop`s consists of a color and an optional `stop position`, which can be either a `percentage` or `length`.
    
```
.element {
    background: linear-gradient(to bottom, red, yellow);
}

<!-- no angle value is specified, side-or-corner is bottom,  -->

                  top  
                  |
                  0         
     left ---90---|---270--- right
                 180   
                  |
                bottom
```



- Radial gradients
A `radial gradient`, unlike a `linear gradient`, creates a gradient that extends from an origin, the center of the element,
extending outward in a circular or elliptical shape. It consists of `3` parts:
- The center
- The ending shape contour position
- Color stops

```
<!-- This creates a two-color elliptical `gradient` that radiates from the `center` by default -->
.element { 
    background:
        radial-gradient(aqua, blue);
}
```
- radial-gradient(<shape> <size> at <position>, <color-stops>)
    - <shape>: circle or ellipsis. The default is ellipsis
    - <size>: closest-side, closest-corner, farthest-side, farthest-corner (default value). Size can also be `length` or `percentage`
    - <position>: Same as `background-position`. Default is `center`
    - <color-stops>: The `color-stop`s consists of a color and an optional `stop position`, which can be either a `percentage` or `length`
```
.element {
    background: radial-gradient(circle at top left, aqua, blue)
} 
```

## Fonts and Interactions

#### Font Face
Using `@font-face`, we have the ability to provide online fonts for use on our websites.
```
@font-face {
    font-family: 'OpenSansRegular';
    src: url('OpenSansRegular-webfont.eot');
    font-style: normal;
    font-weight: normal;
},
h1 {
    font-family: 'OpenSansRegular, Helvetica, Arial, sans-serif';
    <!-- Provide fallback fonts here, as we normally would -->
}
 
```
#### Transforms
Using the `transform` property in CSS3, we can translate, rotate, scale and skew elements in CSS.
- `translate(<tx>, <ty>)`
    - A <transition-value> for the <tx> or <ty> can be either a `length` or `percentage`. If not specified, the value is 0.
- `Rotate`: we can rotate an element `clockwise` around its origin by the specified angle.
    
     ```
    .element {
        transform: rotate(45deg);
    }
    ```
- 'Scale': With `scale` we can do a 2D scale by a specified unitless number.
    
    ```
    .element {
        transform: scale(1.2);
    }
    ```
- `Skew`: With `skew`, an element is skewed around the x or y axis by the angle specified. 
    
    ```
    .element {
        transform: skewX(25deg);
        transform: skewY(-85deg);
    }
    ```
#### Transitions
CSS3 provides `transitions`, which allow us to `transition between two states of a specified element`.

```
.element {
    background-color: black;
    transition: background-color 0.2s ease-in-out;
},

.element:hover {
    background-color: blue;
},

```

- `transition: <property> <duration> <timing-function> <delay>`
    - <property>: CSS property we want to `transition`
    - <duration>: `duration` of the `transition`. The default value is `0s`. (optional)
    - <timing-function>: The timing of the `transition` itself.
        - ease
        - ease-in
        - ease-in-out
        - linear
        - cubic-bezier
        - step-start
        - step-end
        - steps()
    - <delay>: The amount of time to wait between the change that is being requested on a specific property, and the start of the `transition`    
    
    ```
    .element {
        transition-property: background-color;
        transition-duration: 0.2s;
        transition-timing-function: ease-in-out;
        transition-delay: 0.1s;
    }
    ```
#### Prigressive Enhancement

The term `progressive enhancement` refers to the use of newer features that add to the experience in modern browsers that 
support those features, but doesn't detract from the experience in order browsers.

```
.element {
    background: #ccc;
    border-radius: 10px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0, 0.75);
}
```
- In above css if the `border-radius` and `box-shadow` properties aren't supported, we still get a usable design.

#### Block-Level Vs Inline Elements
- Block-level Elements
    - Render to begin on a new line (by default)
    - May contain inline or other block-level elements
    - Roughly flow content (HTML5 category)
- Inline Elements
    - Render on the same line (by default)
    - May only contain other inline elements
    - Roughly Phrasing content (HTML5 category)
#### Characters we `should always escape`
- `&it` instead of `<`
- `&gt` instead of `>`
- `&amp` instead of `&`
- `&quit;` instead of `"`
- `&copy;` for `copyright`
- `&nmsp;` for no-breakable space


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  