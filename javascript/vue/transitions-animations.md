## Vue Transition

Vue provides a variety of ways to apply transition effects when items are `inserted`, `updates`, or `removed` from the DOM. This includes tools to:

1. Automatically apply classes for CSS transitions and animations
2. Integrate 3rd-party CSS animation libraries, such as Animate css
3. Use JavaScript to directly manipulate the DOM during transition hooks
4. Integrate 3rd-party JavaScript animation libraries, such as velocity.js

#### Transitioning Single Elements/Components

Vue provides a `transition` wrapper component.

```html
<template>
<div id="demo">
  <button v-on:click="show = !show">
    Toggle
  </button>
  <transition name="fade">
    <p v-if="show">hello</p>
  </transition>
</div>
</template>

<script>
new Vue({
  el: '#demo',
  data: {
    show: true
  }
})
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
```

#### What Does `Transition` Wrapper Do Actually?

1. Vue will automatically sniff whether the target element has CSS transitions or animations applied. If it does, CSS transition classes will be `added/removed` at appropriate `timings`.

2. If the transition component provided [`JavaScript hooks`](https://vuejs.org/v2/guide/transitions.html#JavaScript-Hooks), these hooks will be called at appropriate timings.

3. If no CSS transitions/animations are detected and no JavaScript hooks are provided, the DOM operations for insertion and/or removal will be `executed immediately` on next frame (Note: this is a browser animation frame, different from Vue’s concept of `nextTick`).
