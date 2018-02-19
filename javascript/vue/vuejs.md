#### What is Vue.js?
A progressive, incrementally-adoptable JavaScript framework for building UI on the web.

#### Installing

```sh
$ npm install -g vue-cli         # install cli
$ npm install -g vue             # install vue globally

# Create and run an app
$ vue init webpack compare-vue   # create a app called 'compare-vue'
$ npm run dev                    # run the app, url: localhost:8080
```

#### For loop example
```
<div class="column is-one-third" v-for="(faq, index) of faqs" :key='index'>
  <div class="card">
    <div class="card-content">
      <p class="title">{{ faq.title }}</p>
      <p class="answer">{{ faq.body }}</p>
    </div>
  </div>
</div>
```

```
<!-- v-for and v-text directives -->

<li v-for="faq in faqs" v-text="name"></li>
```

#### Bind Attribute and Class Name

- We can't use interpolation syntax `{{ }}` inside any HTML attributes, so, we need to bind by using Vue's Directives like: v-bind:title="title". See below example: 

<template>

  <style>
    .color-red { color: red; }
  </style>

  <button v-bind:title="title">Hover over me</button>
  <button :class="{ 'is-loading': isLoading }" @click="toggleClass">Click me</button>
  <button :disabled="isDisable" @click="toggleDisable">Disable me</button>
  <h1 :class="className">Hello World</h1>
</template>

<script>
  data: {
    className: 'color-red'
    title: "This title is being binded by JS"
  }
  data: {
    isLoading: false,
    isDisable: false
  }
  methods: {
    toggleClass() {
      this.isLoading = true;
    }
    toggleDisable() {
      this.isDisable = true;
    }
  }
</script>

#### Disable re-rendering with `v-once`

```
<template>
  <div>
    <h1 v-once>{{ title }}</h1>
    <!-- <h1>Hello World</h1> -->
    
    <p>{{ sayHello() }} - <a v-bind:href="link">Google</a></p>
    <!-- Hello changed - <a href="http://google.com">Google</a></p>  -->
    
  </div>
</template>

<script>
  data: {
    title: 'Hello World!',
    link: 'http://google.com'
  },
  methods: {
    sayHello: function() {
      this.title = 'Hello changed',
      return this.title;
    }
  }
</script>

```

#### Output raw HTML with `v-html` directives.
Normally vue render the variable as text (it's safe for security). If we need to render as HTML then use `v-html`.

**N.B:** It can cause bad cors attack. Use this if the source is trusty/clean. 

```
<template>
  <div>
    <p v-html="finishedLink"></p>
  </div>
</template>

<script>
  data: {
    finishedLink: '<a href="http://google.com">Google</a>'
  }
</script>

```

#### Get event data from the event

```
<template>
  <div>
    <p v-on:mousemove="updateCoordinates">Coordinates: {{ x }} / {{ y }}</p>
  </div>
</template>

<script>
  data: {
    x: 0,
    y: 0
  }
  methods: {
    updateCoordinates(e) {
      this.x = e.clientX;
      this.y = e.clientY;
    }
  }
</script>

```

#### Pass own arguments with event object 

```
<template>
  <div>
    <button v-on:click="increase(2, $event)">Click me</button>
    <p>Counter: {{ counter }}</p>
  </div>
</template>

<script>
  data: {
    counter: 0
  }
  methods: {
    increase(step, e) {
      this.counter += step;
      e.preventDefault()
    }
  }
</script>
```

#### Modifying and event with event modifiers (e.g. `v-on:mousemove.stop=""`)

```
<template>
  <div>
    <p v-on:mousemove="updateCoordinates">Coordinates: {{ x }} / {{ y }}
      <span v-on:mousemove.stop="">DEAD SPOT</span>
    </p>
  </div>
</template>

<script>
  data: {
    x: 0,
    y: 0
  }
  methods: {
    updateCoordinates(e) {
      this.x = e.clientX;
      this.y = e.clientY;
    }
  }
</script>
```

**Alternate:**

```
<template>
  <div>
    <p v-on:mousemove="updateCoordinates">Coordinates: {{ x }} / {{ y }}
      <span v-on:mousemove="doStopPropagation">DEAD SPOT</span>
    </p>
  </div>
</template>

<script>
  data: {
    x: 0,
    y: 0
  }
  methods: {
    updateCoordinates(e) {
      this.x = e.clientX;
      this.y = e.clientY;
    },
    doStopPropagation(e) {
      e.stopPropagation();
    }
  }
</script>
```

#### Listening to keyboard events

```
<template>
  <div>
    
    <input type="text" v-on:keyup.enter.space="alertMe"> 
    <!-- event will be triggered for any enter/space in input field -->

  </div>
</template>

<script>
  data: {
    x: 0,
    y: 0
  }
  methods: {
    alertMe() {
      alert('Alert!');
    }
  }
</script>
```

#### Writing JavaScript code in the Template

```
<template>
  <div>
    <button v-on:click="counter++">Click me</button>
    <p>Counter: {{ counter > 10 ? 'Greater that 10' : 'Smaller or equal to 10' }}</p>
  </div>
</template>

<script>
  data: {
    counter: 0
  }
  methods: {
    increase(step, e) {
      this.counter += step;
      e.preventDefault()
    }
  }
</script>
```

#### **Shortcuts:**

```
v-on:click="method"         -> @click="method"
v-bind:title                -> :title

```


**Ref:** https://github.com/sajibcse68/compare-vue
