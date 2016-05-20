##### Serialize all form data to JSON
```html
// html
<form id='form-submit'>
  ...
</form>
```
```javascript
// jQuery
$.fn.serializeFormJSON = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

  const dataJson = $('#form-submit').serializeFormJSON();         // serialize all data to JSON
  console.log('dataJson: ', dataJson);                            // output
```
##### Use multiple events listener
```javascript
$('.cpu-val').on('keypress keyup', function () {
           // Code here
});
```
