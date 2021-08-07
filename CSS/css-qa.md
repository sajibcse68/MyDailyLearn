## CSS Questions and Answers

### What is the difference between `ems` and `rems`?

`em` and `rem` are the two *relative lengths* we're likely to encounter most frequently when sizing anything from boxes to text.

- the `em` unit means **"my parent element's font-size"**

- the `rem` unit means **"The root element's font-size"**.

### How to inspect `dropdown` element and change css?

One way is to inspect the element is to prevent the `blur event` from being triggered is by removing the blur event listener!

1. Inspect the dropdown input element in chrome browser
2. Go to 'Event Listeners' then remove `blur` event, done!


### What is a `clearfix` and why need this?

A `clearfix` is a way for an element to clear its child elements automatically without any additional markup. The clearfix property is generally used in **float layouts where elements are floated to be stacked horizontally**.

The clearfix property allows a container to wrap its floated children. Without a clearfix, a container will not wrap around its floated children and will collapse, just as if its floated children had been positioned absolutely.

```css
.clearfix:after {
  content: "";
  display: table;
  clear: both;
}
```



### How can we disable a link?

```css
.inactive-link {
  color: black;
  text-decoration: none;
  pointer-events: none;
  pointer: default;
}
```

### How to disable resizing of textarea?

```css
textarea {
  resize: none;
}
```

### How to change placeholder's color?

```css
::placeholder {
  color: cyan;
}
```

### How to unordered list with bullets

```css
ul {
  list-style-type: none;
}
```

### Disable Text Selection

```css
.non-select-element {
  user-select: none;
}
```

### How to make a image fit

```css
img {
  width: 100%;
  height: 100%:
  object-fit: contain;
}
```