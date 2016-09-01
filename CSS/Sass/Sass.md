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
- File extension is optional.

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

