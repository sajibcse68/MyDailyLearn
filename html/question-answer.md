#### Basic HTML questions
- What is the correct HTML5 declaration(s) ?
    - <!DOCTYPE html> or <!doctype html5> or <!DocTyPe htML   >
- What would happen if we didn't specify the HTML5 declaration?
    - The page will be interpreted in quirks mode
- Is browser always interpret HTML sequentially, top to bottom?
    - True
- What actually meta tag does ?
    - Meta tag communicate from source to browser.
- `Quirks` mode is when th browser -
    - Assumes that the HTML in the web page is NOT following th HTML standard, i.e., not in standards mode.
      Styles won't work correctly, etc.
- What is `semantic html element`?
    - Element that implies some meaning to the content.
    - Human and/or machine can understand meaning of content surrounded by a semantic element better
    - May help search engine ranking, i.e., SEO
- What does `Semantic HTML` tags do?
    - May help the SEO ranking of the page.
    - Help computers better understand the structure of th page.
    - Help humans better understand the structure of the page.
- Using only HTML, how would you make sure that 3 words in an HTML document `always appear together in 1 line`, even if 
  the text word-wraps because the browser window is too narrow for that text line?
    - Place `&nbsp;` entity reference after th `1st word` and after the `2nd word`(with no spaces in between words and entity references)
- What is shadow DOM?
  - Allows us to apply **scoped styles** to elements without bleeding out to the outer world.
```
  // example
  var el = document.querySelector('table')
  var root = el.createShadowRoot();
  root.innerHTML = `
    <style>h1 { color: red }</style>
    <h1>Hello</h1>
  `
```
- Why do we need to use `rel="noopener"` when opening a link in a new tab/window?
  - If we don't use `rel="noopener"` the new page can access our window object via `window.opener`. Some legacy APIs mean it can navigate your page to a different URL using `window.opener.location = newURL`.

```
<a href="http://example.com" target="_blank" rel="noopener">
   Example site
</a>
```
