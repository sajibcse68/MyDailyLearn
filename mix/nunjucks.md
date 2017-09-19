##### Assign a class running/stop by if-else checking a variable **status** value
```
{{ 'running' if status == 'READY' else 'stop' }}
{% if status=='READY' %} ready {% elif status=='bound' %} bound {% else %} creating {% endif %}
```
##### Rendering a template
`this.$el.append(global.nunjucksEnv.render(<template-name>));`

##### Iterate loop in html template, items is an array
```
{% for item in items %}
  <li>{{ item.title }}</li>
{% else %}
  <li>This would display if the 'item' collection were empty</li>
{% endfor %}
```

{% set items = ["a", 1, { b : true}] %}
{{ items | dump }}

##### Fancy codes
```
// dump: (debug friendly) Call `JSON.stringify` on an object and `dump` the result into the template. Useful for debugging: {{ items | dump }}
{% set items = ["a", 1, {b : true}]%}
{{item | dump}}     // output: ["a",1,{"b":true}]

#### loop

`for` itterates over arrays or object.

var food = {
  'ketchup': '5 tbsp',
  'mustard': '1 tbsp',
  'pickle': '0 tbsp'
};

{% for ingredient, amount in food %}
  Use {{ amount }} of {{ ingredient }}
{% endfor %}

Inside loops we can access some variables:

`loop.index`: the current iteration of the loop (1 indexed)
`loop.index0`: the current iteration of the loop (0 indexed)
`loop.revindex`: number of iterations until the end (1 indexed)
`loop.revindex0`: number of iterations until the end (0 based)
`loop.first`: boolean indicating the first iteration
`loop.last`: boolean indicating the last iteration
`loop.length`: total number of items


// Iterate loop through object/map
{% for key, value in ob %}
   The value of {{ key }} is {{ value }}
{% endfor %}

// String concatenation and set a variable
{% set gid = "o.Specs." + o.type + "group_id" %}
// Set multiple at once
{% set x, y, z = 5 %}

// commnets syntex -> {# and #}. Comments are completely stripped out when rendering.
{# Loop through all the users #}
{% for user in users %}...{% endfor %}
```
