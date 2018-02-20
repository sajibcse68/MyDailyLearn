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

#### Known Options for Vue instance

- **el:** Connect to DOM
- **data:** Store Data to be used
- **methods:** Methods of this Vue Instance
- **computed:** Dependent Properties
- **watch:** Execute code upon data changes

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

#### Using Two way data binding `v-model="variable"`

```
<template>
  <div>
    <input type="text" v-model="name">
    <p>{{ name }}</p>
  </div>
</template>

<script>
  data: {
    name: 'Jhon'
  }
</script>
```

#### Reacting to changing with Computed properties

```
<template>
  <div id="app">
    <button v-on:click="counter++">Increase</button>
    <button v-on:click="counter--">Decrease</button>
    <button v-on:click="secondCounter++">Increase Second</button>
    
    <p>Counter: {{ counter }} | {{ secondCounter }}</p>
    <p>Counter: {{ result() }} | {{ output }}</p>
  </div>
</template>

<script>
  data: {
    counter: 0,
    secondCounter: 0
  },
  // caching the result, don't need to calculated always
  computed: {
    output: function() {
      console.log('Computed');
      return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5'
    }
  },
  // always trigger cause  Vue does not know what is the codes in methods actually.
  methods: {
    result: function() {
      console.log('methods');
      return this.counter > 5 ? 'Greater 5' : 'Smaller than 5'
    }
  }
</script>

```

- An **Alternative** to computed properties `Watching` for

```
// template same as before

<script>
  data: {
    counter: 0,
    secondCounter: 0
  },
  // caching the result, don't need to calculated always
  computed: {
    output: function() {
      console.log('Computed');
      return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5'
    }
  },
  watch: {
    // counter matches with data 'counter', watching when the value of 'counter' changed, if change then this counter 
    // is triggered with the updated value.

    counter: function(value) => {
      var vm = this;
      setTimeout(function(){
        vm.counter = 0;
      }, 2000)
    }
  }
</script>
```

#### Dynamic styling with CSS classes

```
<template>
  <div id="app">
  <div class="demo" @click="attachRed = !attachRed" :class="divClasses"></div>
  <div class="demo" @click="attachRed = !attachRed" :class="{ red:  attachRed }"></div>
  <div class="demo" :class="[color, { red: attachRed }]"></div>
</div>
<hr>

<input type="text" v-model="color">
</template>

<style>
  .red {
    background-color: red;
  }
  .green {
    background-color: green;
  }
</style>

<script>
el: '#app'
data: {
  attachRed: false,
  color:  'green'
},
computed: {
  divClasses() {
    return {
      red: this.attachRed,
      blue: !this.attachRed
    }
  }
}
</script>

```

#### Setting styles dynamically without CSS classes

<template>
<div id="app">
  <div class="demo" :style="{ backgroundColor: color }"></div> <!-- Or, :style="{ background-color: color }" -->
  <div class="demo" :style="myStyle"></div>
</div>
<hr>
<input type="text" v-model="color">
<input type="text" v-model="width">
</template>

<script>
data: {
  color: 'gray';
  width: 100;
},
computed: {
  myStyle: function() {
    return {
      backgroundColor: this.color,
      width: this.width + 'px'
    }
  }
}
</script>

#### Styling elements with an Array syntax

<template>
<div id="app">
  <div class="demo" :style="{ backgroundColor: color }"></div> <!-- Or, :style="{ background-color: color }" -->
  <div class="demo" :style="myStyle"></div>
  <div class="demo" :style="[ myStyle, { height: width + 'px' }]"></div>
</div>
<hr>
<input type="text" v-model="color">
<input type="text" v-model="width">
</template>

<script>
data: {
  color: 'gray';
  width: 100;
},
computed: {
  myStyle: function() {
    return {
      backgroundColor: this.color,
      width: this.width + 'px'
    }
  }
}
</script>

#### Conditioning rendering with v-if/v-else

```
<template>
<div id="app">
  <p v-if="show">if statement <span> Nested element </span></p>
  <p v-else>else statement</p>

  <button @click="show = !show">Switch </button>
</div>
</template>

<script>
data: {
  show: false
}
</script>

```

#### Alternative of v-if using `<template>` (group html elements)

```
<template>
<div id="app">
  <p v-if="show">if statement <span> Nested element </span></p>
  <p v-else>else statement</p>

  <template v-if="show">
    <h1>Heading</h1>
    <p>Inside a template </h1>
  </template>

  <button @click="show = !show">Switch </button>
</div>
</template>

<script>
data: {
  show: false
}
</script>

```  

#### Use v-show if we don't want to detach element from DOM (v-show adds `style="display:none"`)

```
<template>
<div id="app">
  <p v-show="show">if statement <span> Nested element </span></p>

  <button @click="show = !show">Switch </button>
</div>
</template>

<script>
data: {
  show: false
}
</script>
```  

#### Rendering lists with `v-for`

```
<div id="app">
  <ul>
    <li v-for="(ingredient, ind) in ingredients">{{ ingredient }} - {{ ind }}</li>
  </ul>
</div>

<script>
  data: {
    ingredients: ['meat', 'fruit', 'cookies'],
    positions: [
      {name: 'Max', age: '27', color: 'red'},
      {name: 'Anna', age: 'unknown', color: 'blue'}
    ]
  }
</script>
```

#### Use of `v-for` with `<template>`


```
<div id="app">
  <ul>

    <!-- <template> </template> does not rendered in HTML only inner elements rendered -->
    <template v-for="(ingredient, index) in ingredients">
      <h1>{{ ingredient }}</h1>
      <h1>{{ index }}</h1>
    </template>

  </ul>
</div>

<script>
  data: {
    ingredients: ['meat', 'fruit', 'cookies'],
  }
</script>
```

#### Looping through objects

```
<div id="app">
  <ul>
    <li v-for="person in persons">
      <div f-for="(value, key, index) in person">({{ index }}) {{key}}: {{ value }} </div> 
    </li>
  </ul>
</div>

<script>
  data: {
    positions: [
      {name: 'Max', age: '27', color: 'red'},
      {name: 'Anna', age: 'unknown', color: 'blue'}
    ]
  }
</script>
```


#### Looping through a lists of numbers

```
<div id="app">
  <ul>
    <li v-for="person in persons">
      <div f-for="n in 10">{{ n }} </div> 
    </li>
  </ul>
</div>
```

#### **Shortcuts:**

```
v-on:click="method"         -> @click="method"
v-bind:title                -> :title

```

**Ref:** https://github.com/sajibcse68/compare-vue
