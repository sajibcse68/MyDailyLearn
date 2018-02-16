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
**Ref:** https://github.com/sajibcse68/compare-vue
