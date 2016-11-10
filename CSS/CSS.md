#### What is a `Responsive Web Site`?
- Site designed to adapt its layout to the viewing environment by using fluid, proportion-based grids, flexible
  images, and CSS# media queries
- Site's layout adapts to the size of the device.
- Content verbosity or its visual delivery may change.

#### Combining selectors
- Element with class selectors (selector.class)
- Child (direct) selector (selector > selector)
- Descendent selector (selector selector)

#### Pseudo-Class Selector
- :link
- :visited
- :hover
- :active
- :nth-child(...)

#### Box Model
- Essential to understand
    - Prefer `box-sizing: border-box`;  // `box-sizing: content-box`;
    - `border-box` = The elements should have padding and border included in the element's total width and height.
    - `content-box` = The `padding` and `border` properties includes (add) with the `width`. 
- The * (Universal) selector
- Cumulative and collapsing margins
    - Horizontal margins are cumulative (addition)
    - Vertical margins are collapsing (take larger one)
- Content overflow
    - overflow - visible (default), auto (scroll bar), hidden (cut the text outside box)

#### Positioning Elements by Floating
- Floating elements can produce very flexible layouts
- Floats are taken out of normal document flow
- Floats don't have vertical margin collapse
- To resume normal document flow, use the `clear` property.
    - clear: left/right/both

#### Relative and Absolute Element Positioning
- Static positioning is default for all elements, except html
- Relative positioning offsets the element relative to its normal document flow position
- Absolute positioning is relative to closest ancestor which has positioning set to non-static value
- Offset the relative container element offsets its contents as well.

#### Responsive design (@media)
- Basic syntax of a media query
    - @media (media feature)
    - @media (media feature) logical operator (media feature)
- Remember not to overlap breakpoints
- Usually, we should provide base styling
    - Then, change or add to then in each media query
- Viewport `meta tag` to turn off default mobile zooming
   - `<meta name="viewport" content="width=device-width, initial-scale=1">`

- What is `Bootstrap` ?
- Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.

#### Bootstrap Grid System
- Structure Bootstrap expects for the grid-based layout
    - Needs to be include .container (or .container-fluid)
    - All columns must be inside .row
- `SIZE` identifier identifies at which breakpoint specified column spans will be ignored and all elements will collapse (i.e., stack)
- If no other rules apply, specifying `col-xs-..` will keep that layout no matter what the size of the screen.

```
/********* Base styles ****************/
    #p1 {
      background-color: #A52A2A;
      width: 300px;
      height: 300px;
    }
    #p2 {
       background-color: #DEB887;
       width: 50px;
       height: 50px;
    }

/*********** Large device only ****************/
@media (min-width: 1200px)
    #p1 {
      width: 80%;
    }
    #p2 {
      width: 150px;
      height: 150px;
    }
/****************  Medium device only   *******************/
@media (min-width: 768px) and (max-width: 991px)   
    #p1 {
      width: 50%;
    }
    #p2 {
      width: 100px;
      height: 100px;
    }
```

### Mixin
```
// select all the selectors and apply this instead of inheritance
* {
  box-sizing: border-box;
}

// as box-sizing don't be inheritenced so it doesn't work for child of body tag
body {
 box-sizing: border-box;   
}
```

