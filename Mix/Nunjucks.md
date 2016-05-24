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

##### Fancy codes
```
// Iterate loop through object/map
{% for key, value in ob %}
   The value of {{ key }} is {{ value }}
{% endfor %}

// String concatenation and set a variable
{% set gid = "o.Specs." + o.type + "group_id" %}

// commnets syntex -> {# and #}. Comments are completely stripped out when rendering.
{# Loop through all the users #}
{% for user in users %}...{% endfor %}
```
