#### What is Bulma

>Bulma is a free, open source CSS framework based on Flexbox and used by more than 150,000 developers.

- Bulma is a CSS framework, meaning that the end result is simply a single .css file:
https://github.com/jgthms/bulma/blob/master/css/bulma.css
- Bulma consists of 39 .sass files that you can import individually.
- Every element in Bulma is `mobile-first` and optimezes for `vertical reading`, so by default on mobile:
  - `columns` are stacked vertically
  - the `level` component will show its childred stacked vertically
  - the `nav` menu will be hidden
  - We can however enforce the `horizontal` layout for both `columns` or `level` by appending the `is-mobile` modifier

#### How to add columns dynamically and make them wrap?

Use `is-multiline` class with `columns`

```html
<div class="columns is-multiline">
  <div class="column is-4">...</div></div>
  <div class="column is-4">...</div>
  <div class="column is-4">...</div>
  <div class="column is-4">...</div>
</div>
```
