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
    el: "#demo",
    data: {
      show: true
    }
  });
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
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

#### Transition Classes

There are `six` classes applied for `enter/leave` transitions:

1. **v-enter**: Starting state for enter. Added before element is inserted, removed one frame after element is inserted.

2. **v-enter-active**: Active state for enter. Applied during the entire entering phase. Added before element is inserted, removed when transition/animation finishes. This class can be used to define the duration, delay and easing curve for the entering transition.

3. **v-enter-to**: Only available in versions 2.1.8+. Ending state for enter. Added one frame after element is inserted (at the same time v-enter is removed), removed when transition/animation finishes.

4. **v-leave**: Starting state for leave. Added immediately when a leaving transition is triggered, removed after one frame.

5. **v-leave-active**: Active state for leave. Applied during the entire leaving phase. Added immediately when leave transition is triggered, removed when the transition/animation finishes. This class can be used to define the duration, delay and easing curve for the leaving transition.

6. **v-leave-to**: Ending state for leave. Added one frame after a leaving transition is triggered (at the same time `v-leave` is removed), removed when the transition/animation finishes.

Each of these classes will be prefixed with the name of the transition. Here the `v-` prefix is the default when you use a `<transition>` element with no name. If we use `<transition name="my-transition">` for example, then the `v-enter` class would instead be `my-transition-enter`.

**v-enter-active** and **v-leave-active** give you the ability to specify different easing curves for enter/leave transitions, which you’ll see an example of in the following section.

```html
<template>
  <div id="example-1">
    <button @click="show = !show">
      Toggle render
    </button>
    <transition name="slide-fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script>
  new Vue({
    el: "#example-1",
    data: {
      show: true
    }
  });
</script>
```

<style>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

#### Transition on Initial Render

We can add the `appear` attribute to apply a transition on the initial render of a node:

```html
<transition appear>
  <!-- ... -->
</transition>
```
