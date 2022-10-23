# CSS Animations

CSS allows animation of HTML elements without using JavaScript or Flash!

## What are CSS Animations?

- An animation lets an element gradually change from one style to another
- We can change as many CSS properties we want, as many times we want
- To use CSS animation, we must first specify some **keyframes** for the animation
- `Keyframes` hold what styles the element will have at certain times

## Transition

CSS transitions allows you to change property values smoothly, over a given duration. So, it provides a way to control animation speed when changing CSS properties. Instead of having property changes take effect immediately, you can cause the changes in a property to take place over a period of time. For example, if you change the color of an element from white to black, usually the change is instantaneous. With CSS transitions enabled, changes occur at time intervals that follow an acceleration curve, all of which can be customized.


## Transform

### Translate

```css
transform: translateX(20px); // horizontal move
transform: translateY(20px); // vertical move
transform: translate(20px, 20px); // both

/* 3D */
body {
  /* we need to set a perspective first
  the distance betn our eye and html body is 500px */
  perspective: 500px;
}

img {
  ...
  transition: transform 1s;
}

img:hover {
  transform: translateZ(300px);
  /* it comes forward 300px to our eye so, seems like the img is zooming in */
}
```

### Scale

```css
  transform: scaleX(2); // width double
  transform: scaleY(2): // height double
  transform: scale(2, 2); // both simultaneously
```

### Rotate

```css
transform: rotate(90deg); // rotate 90 deg clockwise
transform: rotate(-90deg); // rotate 90 deg counter clockwise
transform: rotate(1 turn); // similar as 360deg

/* 3D */

body {
  /* we need to set a perspective first
  the distance betn our eye and html body is 500px */
  perspective: 500px;
}
```

### Skew

```css
transform: skewX(30deg); // skew 30deg horizontal
transform: skewY(30deg); // skew 30deg vertically
transform: skew(30deg, 30deg); // both direction
```

### Transform Origin

when rotating an image we can set the transform origin (`center` is default value).

```css
img {
  width: 300px;
  height: 300px;
  transition: transform 1s;
  transform-origin: top; // top-center is the origin now
  transform-origin: top left; // top-left is the origin now
  transform-origin: 30% 80%; // origin is on 30% right and 80% bottom
  transform-origin: 150px 150px; // origin is on center actually
}

img: hover {
  transform: rotate(45deg);
}
```

###

## Some Important Animation Properties

### @keyframes, animation-name, animation-duration

When you specify CSS styles inside the `@keyframes` rule, the animation will `gradually` change from the current style to the new style at certain times

To get an animation to work, we must bind the animation to an element.

The following example binds the "example" animation to the `<div>` element. The animation will last for `4 seconds`, and it will gradually change the background-color of the `<div>` element from "red" to "yellow":

```css
/* The animation code */
@keyframes example {
  from {
    background-color: red;
  }
  to {
    background-color: yellow;
  }
}

/* The element to apply the animation to */
div {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
}
```

The following example will change the background-color of the <div> element when the animation is 25% complete, 50% complete, and again when the animation is 100% complete:

```css
/* The animation code */
@keyframes example {
  0% {
    background-color: red;
  }
  25% {
    background-color: yellow;
  }
  50% {
    background-color: blue;
  }
  100% {
    background-color: green;
  }
}

/* The element to apply the animation to */
div {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
}
```

### animation-delay

The `animation-delay` property specifies a delay for the start of an animation.

```css
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-delay: 2s;
}
```

**Negative** values are also allowed. If using `negative` values, the animation will start as if it had already been playing for N seconds.

In the following example, the animation will start as if it had already been playing for 2 seconds:

```css
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-delay: -2s;
}
```

### animation-iteration-count

The `animation-iteration-count` property specifies the number of times an animation should run.

```css
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: 3;
}
```

### animation-direction

The `animation-direction` property specifies whether an animation should be played forwards, backwards or in alternate cycles.

animation-direction property values:

- `normal` - The animation is played as normal (forwards). This is default
- `reverse` - The animation is played in reverse direction (backwards)
- `alternate` - The animation is played forwards first, then backwards
- `alternate-reverse` - The animation is played backwards first, then forwards

```css
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-direction: reverse;
}
```

### animation-timing-function

The `animation-timing-function` property specifies the speed curve of the animation.

animation-timing-function property values:

- `ease` - (default) Specifies an animation with a slow start, then fast, then end slowly
- `linear` - Specifies an animation with the same speed from start to end
- `ease-in` - Specifies an animation with a slow start
- `ease-out` - Specifies an animation with a slow end
- `ease-in-out` - Specifies an animation with a slow start and end
- `cubic-bezier(n,n,n,n)` - Lets you define your own values in a cubic-bezier function

```css
#div1 {
  animation-timing-function: linear;
}
#div2 {
  animation-timing-function: ease;
}
#div3 {
  animation-timing-function: ease-in;
}
#div4 {
  animation-timing-function: ease-out;
}
#div5 {
  animation-timing-function: ease-in-out;
}
```

### animation-fill-mode

CSS animations do not affect an element before the first keyframe is played or after the last keyframe is played. The animation-fill-mode property can override this behavior.

The `animation-fill-mode` property specifies a style for the target element when the animation is not playing (before it starts, after it ends, or both).

The `animation-fill-mode` property values:

- `none` - Default value. Animation will not apply any styles to the element before or after it is executing
- `forwards` - The element will retain the style values that is set by the last keyframe (depends on animation-direction and animation-iteration-count)
- `backwards` - The element will get the style values that is set by the first keyframe (depends on animation-direction), and retain this during the animation-delay period
- `both` - The animation will follow the rules for both forwards and backwards, extending the animation properties in both directions

```css
div {
  width: 100px;
  height: 100px;
  background: red;
  position: relative;
  animation-name: example;
  animation-duration: 3s;
  animation-fill-mode: forwards;
}
```

### animation

Shorthand of various properties:

```css
div {
  animation-name: example;
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-delay: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

Using `animation` property:

```css
div {
  animation: example 5s linear 2s infinite alternate;
}
```

[Ref.](https://www.w3schools.com/css/css3_animations.asp)
