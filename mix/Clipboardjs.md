#### What is Clipboard ?
- A modern approach to copy text to clipboard
- No Flash. No dependencies. Just 3kb gzipped

#### We can just include a `data-clipboard-text` attribute in our trigger element
```html
<!-- Trigger -->
<button class="btn" data-clipboard-text="Me used">
    Copy to clipboard
</button>
```
#### Copy content from html element
```html
<!-- Target -->
<input id="foo" value="https://github.com/zenorocha/clipboard.js.git">

<!-- Trigger -->
<button class="btn" data-clipboard-target="#foo">
    <img src="assets/clippy.svg" alt="Copy to clipboard">
</button>
```
#### Cut content from html element ***************************
```html 
<!-- Target -->
<input id="foo" value="https://github.com/zenorocha/clipboard.js.git">

<!-- Trigger -->
<button class="btn" data-clipboard-target="#foo">
    <img src="assets/clippy.svg" alt="Copy to clipboard">
</button>
```
#### Success/Error events
``` javascript
  var clipboard = new Clipboard('.btn');

  clipboard.on('success', function(e) {
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);
  
  e.clearSelection();
});

  clipboard.on('error', function(e) {
  console.error('Action:', e.action);
  console.error('Trigger:', e.trigger);
});
```
#### Reference ***********************
1. [clipboardjs.com](https://clipboardjs.com/#example-target)
2. [github.com/zenorocha](https://github.com/zenorocha/clipboard.js)
