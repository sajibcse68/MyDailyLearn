#### What is CodeMirror!
- CodeMirror is a versatile text editor implemented in JavaScript for the browser.
  It is specialized for editing code, and comes with a number of language modes and addons
  that implement more advanced editing functionality.
- Supporting Language modes.. https://codemirror.net/mode/index.html

#### Example
```
// <head>, need to load codemirror .js and shell.js in <head> section
<script src="...../codemirror.js"></script>
<script src="...../shell.js"></script>

// html
<div class="form-group codemirror">
    <textarea id="console-output">{{ consoleOutput }}</textarea>
</div>

// js
<script>
    $(document).ready(function () {
        function editor(id) {
            CodeMirror.fromTextArea(document.getElementById(id), {
                mode: 'shell',                                       // define the mode, it may be javascript, php etc.
                theme: 'default',
                readOnly: true,
                lineNumbers: true
            });
        }
        editor('console-output');                                    // call editor method with id
    });
</script>
```

#### Change `height` and `width` of codemirror
```
//html
<textarea id="my-text" rows="4" cols="10">{{ myData }}</textarea> 

//js 
<script>
  const myTextArea = document.getElementById('my-text');
  const myCodeMirror = CodeMirror.fromTextArea(myTextArea);
  myCodeMirror.setSize(500, 300);
  // myCodeMirror.setSize(height: 80vh);  // 800vh means 80% of display height
<script>

// or, we can also change the height with CSS
<style>
    .CodeMirror.cm-s-default {
        height: 80vh;
    }
</style>
```

#### Set the `value of CodeMirror` editor
```
CodeMirror.fromTextArea(document.getElementById(id), {
        ... 
    }).setValue("code here");
```

#### Use of `various events` of CodeMirror
```
const cm = CodeMirror.fromTextArea(document.getElementById(id), {
                mode: "javascript",
                theme: "default",
                readOnly: false,
                lineNumbers: true,
            });
// change: Fires when the line's text content is changed in any way             
cm.on("change", function(cmInstance, change) {
  
  // Get the current editor content
  cmInstance.getValue();
}            

// Set the current editor content
  cmInstance.setValue();
  
// focus: Fires whenever the editor is focused.             
cm.on("focus", function(cmInstance) {
  ...
}  
```
