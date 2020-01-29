## Flexbox

#### Basics

Since flexbox is a whole module and not a single property, it involves a lot of things including its whole set of properties. Some of them are meant to be set on the container (parent element, known as "flex container") whereas the others are meant to be set on the children (said "flex items")

## Properties for the Parent (flex container)

#### display

This defines a flex container; inline or block depending on the given value. It enables a flex context for all its direct children.

```css
.container {
  display: flex; /* or inline-flex */
}
```

#### flex-direction

This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns.

```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

- `row (default)`: left to right in `ltr`; right to left in `rtl`
- `row-reverse`: right to left in `ltr`; left to right in `rtl`
- `column`: same as `row` but top to bottom
- `column-reverse`: same as `row-reverse` but bottom to top

#### flex-wrap

By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.

```css
.container{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

- `nowrap (default)`: all flex items will be on one line
- `wrap`: flex items will wrap onto multiple lines, from top to bottom
- `wrap-reverse`: flex items will wrap onto multiple lines from bottom to top

#### flex-flow (Applies to: parent flex container element)

This is a shorthand for the `flex-direction` and `flex-wrap` properties, which together define the flex container's main and cross axes. The default value is `row nowrap`.

```css
flex-flow: <‘flex-direction’> || <‘flex-wrap’>
```

#### justify-content

This defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.

```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;
}
```

- `flex-start (default)`: items are packed toward the start of the flex-direction.
- `flex-end`: items are packed toward the end of the flex-direction.
- `start`: items are packed toward the start of the writing-mode direction.
- `end`: items are packed toward the end of the writing-mode direction.
- `left`: items are packed toward left edge of the container, unless that doesn't make sense with the `flex-direction`, then it behaves like `start`.
- `right`: items are packed toward right edge of the container, unless that doesn't make sense with the flex-direction, then it behaves like `start`.
- `center`: items are centered along the line
- `space-between`: items are evenly distributed in the line; first item is on the start line, last item on the end line
- `space-around`: items are evenly distributed in the line with equal space around them. Note that visually the spaces aren't equal, since all the items have equal space on both sides. The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies.
- `space-evenly`: items are distributed so that the spacing between any two items (and the space to the edges) is equal.

There are also two additional keywords we can pair with these values: safe and unsafe. Using safe ensures that however we do this type of positioning, we can't push an element such that it renders off-screen (e.g. off the top) in such a way the content can't be scrolled too (called "data loss").

#### align-items

This defines the default behavior for how flex items are laid out along the `cross axis` on the current line. Think of it as the justify-content version for the cross axis (perpendicular to the main-axis).

```css
.container {
  align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end + ... safe | unsafe;
}
```

- `stretch (default)`: stretch to fill the container (still respect min-width/max-width)
- `flex-start / start / self-start`: items are placed at the start of the cross axis. The difference between these is subtle, and is about respecting the flex-direction rules or the `writing-mode` rules.
- `flex-end / end / self-end`: items are placed at the end of the cross axis. The difference again is subtle and is about respecting `flex-direction rules vs. writing-mode`rules.
- `center`: items are centered in the cross-axis
- `baseline`: items are aligned such as their baselines align

#### align-content

This aligns a flex container's lines within when there is `extra space in the cross-axis`, similar to how `justify-content` aligns individual items within the main-axis.

**Note:** this property has no effect when there is only one line of flex items.

```css
.container {
  align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline + ... safe | unsafe;
}
```

- `stretch (default)`: lines stretch to take up the remaining space
- `flex-start / start:` items packed to the start of the container. The (more supported) flex-start honors the flex-direction while start honors the `writing-mode` direction.
- `flex-end / end`: items packed to the end of the container. The (more support) flex-end honors the flex-direction while end honors the `writing-mode direction`.
- `center`: items centered in the container
- `space-between`: items evenly distributed; the first line is at the start of the container while the last one is at the end
- `space-around`: items evenly distributed with equal space around each line
- `space-evenly`: items are evenly distributed with equal space around them


## Properties for the Children (flex items)

## Controlling the Alignment of the Elements

#### justify-content

`justify-content: ` work on how the remaining space in the container will be distributed around the flex elements if there is any remaining spaces in the container

It accepts `5` values:

1. `flex-start (default)`: align items to the beginning of the flex-container
2. `flex-end: ` align items to the end of flex container
3. `center: ` centers the content inside the flex container
4. `space-between: ` separates the content with equal spaces with no spaces at the beginning or at the end of the container

#### Flex with Responsive

```css
@media screen and (min-width: 40em) {
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: -1em;
  }

/*
  .card { 
  	flex: 0 1 33%;
  }
*/

  .card {
    display: flex;
    flex: 0 1 calc(50% - 0.5em); // use percentage, similar as widtch: calc(33% - 1em);
    margin-bottom: 1em;
  }
}

@media screen and (min-width: 60em) {
  .cards {
    margin-top: inherit;
  }
  .card {
    flex: 0 1 calc(33% - 1em);
    margin-bottom: 2em;
  }
}
```

#### Shrink a Div Horizontally and Add 3 Dots

```css
flex-grow: 1;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
```

[Ref1](https://meetrix.io/blog/posts/shrink-a-div-horizontally-and-add-3-dots.html)

[Ref2](https://css-tricks.com/flexbox-truncated-text/)

#### Properties That Control Alignment

- [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) -- controls alignment of all items on the main axis (x-axis)
- [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) -- controls alignment of all items on the cross axis (y-axis)
- [align-self](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self) -- controls alignment of an individual flex item on the cross axis
- [align-control](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content) -- described in the spec as for `packing flex lines`. Controls space between flex lines on the cross axis