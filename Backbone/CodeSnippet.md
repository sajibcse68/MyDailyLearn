- Backbone url parse in router.js
```js
// in routes
'abc?*queryString': 'configmapsDescribe'

// in `configmapsDescribe` function
configmapsDescribe(cluster) {
  $.urlParam = (name) => {
    const results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results[1] || 0;
  };

  const name = $.urlParam('name');
  const namespace = $.urlParam('namespace');
}
```

- Get the current url/route
```js
// return the current url
Backbone.history.getFragment();
```

- Rerender view if any changed in model [ref](http://backbonejs.org/docs/todos.html)

```js
initialize() {
  this.listenTo(this.model, 'change', this.render);
}

render() {
  this.$el.html(this.template(this.model.toJSON()));
  return this;
}

```
- Event listener 'enter'
```
events: {
  'keypress .topsearch': 'topsearchOnEnter'
},

topsearchOnEnter(e) {
  if (e.keyCode == 13)   // can try e.which === 13 also instead of e.keyCode == 13
    {
        ...
    }
}
```

- Remove the view when model destroy
```
initialize() {
  this.listenTo(this.model, 'destroy', this.remove);
}
```
        