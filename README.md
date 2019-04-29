# MyDailyLearn
Here is some important `commands` or `code snippets` on different topics that I am learning in my developing life.

## Table of Contents
- [MyDailyLearn](#mydailylearn)
  - [Table of Contents](#table-of-contents)
- [Git](#git)
- [JavaScript](#javascript)
  - [Vanilla JavaScript](#vanilla-javascript)
  - [Vue](#vue)
  - [Node](#node)
  - [React](#react)
  - [Angular](#angular)
  - [Gulp](#gulp)
  - [Unit Testing](#unit-testing)
- [Docker](#docker)


# [Git](https://github.com/sajibcse68/MyDailyLearn/blob/master/git/git-cheatsheet.md)

- [Configure git](https://github.com/sajibcse68/MyDailyLearn/blob/master/git/git-cheatsheet.md#configure-git)
  - Config file locations
  - Configure user's name & email
  - Various important config commands
- [Branching](https://github.com/sajibcse68/MyDailyLearn/blob/git/git/git-cheatsheet.md#branching)
  - Create new branch
  - Delete branch
  - Quick switch back to previous branch/commit-sha/references etc.
  - Branch listing
  - Rename a branch
  - Track new branch
  - Checkout branch/commit-sha/references/etc. (go forward/backward)
- [Add, Commit, Amend, Pull, Push, Merge & Delete](https://github.com/sajibcse68/MyDailyLearn/blob/master/git/git-cheatsheet.md#add-commit-amend-pull-push-merge--delete)
- [Checkout forward/backward](https://github.com/sajibcse68/MyDailyLearn/blob/master/git/git-cheatsheet.md#add-commit-amend-pull-push-merge--delete)
- [Cherry Pick](https://github.com/sajibcse68/MyDailyLearn/blob/master/git/git-cheatsheet.md#add-commit-amend-pull-push-merge--delete)
- [Stashing](https://github.com/sajibcse68/MyDailyLearn/blob/master/git/git-cheatsheet.md#stashing)
- [Logging](https://github.com/sajibcse68/MyDailyLearn/blob/master/git/git-cheatsheet.md#logging)
- [Show - more logging](https://github.com/sajibcse68/MyDailyLearn/blob/master/git/git-cheatsheet.md#show-more-logging)
- [Recovery or Reset](https://github.com/sajibcse68/MyDailyLearn/blob/master/git/git-cheatsheet.md#recovery-or-reset)
  - Reset using `reflog`
- [Squash](https://github.com/sajibcse68/MyDailyLearn/blob/master/git/git-cheatsheet.md#squash)
- [Rebase](https://github.com/sajibcse68/MyDailyLearn/blob/master/git/git-cheatsheet.md#rebase)
  - Change the `author` of an earlier commit
  - Change the `commit message` of an earlier commit
  - Reordering commits using rebase
  - Rebase options
- [Working with remotes](https://github.com/sajibcse68/MyDailyLearn/blob/master/git/git-cheatsheet.md#working-with-remotes)
- [Conflicts](https://github.com/sajibcse68/MyDailyLearn/blob/master/git/git-cheatsheet.md#conflicts)
  - e.g. Merging `release` branch into `master` and we have 3 folders `foo/`, `bar/`, `js/`. Now want to resolve conflicts such as `foo/`, `bar/` should like `master` and `js/` should like `release` branch.
- [Git Submodules](https://github.com/sajibcse68/MyDailyLearn/blob/master/git/git-cheatsheet.md#submodules)
- [Some important operations](https://github.com/sajibcse68/MyDailyLearn/blob/master/git/git-cheatsheet.md#some-important-operations)
  - Cleanup garbage in remote repository
  - Prune empty commits
  - Create a new **[WorkTree](https://git-scm.com/docs/git-worktree#_synopsis)** and work paralley in the same repo (diffeent branch)
  - Add a `signed-off-by` field in a commit
  - How to tell git to ignore local changes (already tracked by git)?
  - Generate a Git Hash (SHA1) for specific contents
- [Tag and Releases](https://github.com/sajibcse68/MyDailyLearn/blob/master/git/git-cheatsheet.md#tags-and-releases)
- [Fancy Commands](https://github.com/sajibcse68/MyDailyLearn/blob/master/git/git-cheatsheet.md#fancy-commands)
- [Concepts](https://github.com/sajibcse68/MyDailyLearn/blob/master/git/git-cheatsheet.md#concepts)
  - Tracked vs Untrack file
  - GitHub vs Git
  - Commit Object
  - Three areas where code lives
  - Three types of git `References`
  - Different types of HEAD
  - The Seven Rules of a Great Git Commit Message
  - Difference between HEAD~ and HEAD^

# [JavaScript](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/javascript.md)

## [Vanilla JavaScript](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/javascript.md)

- [**Hoisting**](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/hoisting.md)
  - [Explain `Hoisting` in JavaScript](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/hoisting.md#explain-hoisting-in-javascript)
  - [Why `Hoisting` Important?](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/hoisting.md#why-hoisting-is-important)
  - [First, memory is set aside for all necessary variables and declared functions](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/hoisting.md#first-memory-is-set-aside-for-all-necessary-variables-and-declared-functions)
  - [Function Expressions are never hoisted! They are treated as assignments](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/hoisting.md#function-expressions-are-never-hoisted-they-are-treated-as-assignments)
  - [Check if return statement is at the top](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/hoisting.md#check-if-return-statement-is-at-the-top)
  - [Analyzing Hoisting Load Order I](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/hoisting.md#analyzing-hoisting-load-order-i)
  - [Analyzing load order II](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/hoisting.md#analyzing-load-order-ii)
  - [Analyzing Load Order III](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/hoisting.md#analyzing-load-order-iii)
  - [The variables declared with `let` or `const` are hoisted but stay `uninitialised`](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/hoisting.md#the-variables-declared-with-let-or-const-are-hoisted-but-stay-uninitialised)

- [**Closure**](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/closure.md)
  - [Closures and References](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/closure.md)
  - [Closures Help in Function `Construction Zones`](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/closure.md#closures-help-in-function-construction-zones)
  - [Loops with Closure: A cautionary Tale](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/closure.md#loops-with-closure-a-cautionary-tale-be-a-closure-master)

- [**Prototypes and Inheritance**](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md)
  - [Prototypes!](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#prototypes)
  - [What is Constructor call?](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#what-is-a-constructor-call)
  - [What is `[[Prototype]]` and where does it come from?](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#what-is-prototype-and-where-does-it-come-from)
  - [How does `[[Prototype]]` affect the behavior of an object?](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#how-does-prototype-affect-the-behavior-of-an-object)
  - [What is the 3 different ways to find where an object`[[Prototype]]` linked to?](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#what-is-the-3-different-ways-to-find-where-an-object-say-ob-prototype-is-linked-to)
  - [Discuss: `__proto__`, `[[Prototype]]`, `prototype`](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#discuss-__proto__-prototype-and-prototype)
  - [Two mechanism always exists in JavaScirpt -- Lexical Scopes & Prototype Chain](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#two-mechanism-always-exists-in-javascript-codes----lexical-scopes--prototype-chain)
  - [Object Oriented in JavaScript](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#object-oriented-in-javascript)
  - [Explanation of Prototype](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#explanation-of-prototype)
  - [When an inherited function is executed, the value of `this` points to the inheriting object, not to the `prototype object` where the function is an own property](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#when-an-inherited-function-is-executed-the-value-of-this-points-to-the-inheriting-object-not-to-the-prototype-object-where-the-function-is-an-own-property)
  - [New object using Object.create() (ES5)](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#new-object-using-objectcreate-es5)
  - [New object using `class` syntactical sugar](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#new-object-using-class-syntactical-sugar)
  - [Similar in Object pattern](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#similar-in-object-pattern)
  - [Use `hasOwnProperty()` to know if the property exists as it's own property](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#use-hasownproperty-to-know-if-the-property-exists-as-its-own-property)
  - [Prototype shadowing](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#prototype-shadowing)
  - [Avoid Shadowing](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#avoid-shadowing)
  - [Object Linked](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#object-linked)
  - [`OLOO` (Object Linked to Other Object): delegated objects](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#oloo-object-linked-to-other-object-delegated-objects)
  - [Convert the above codes to OLOO](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#convert-the-above-codes-to-oloo)
  - [Class in ES6](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#class-in-es6)
  - [Different ways to create objects and the resulting prototype chain](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#different-ways-to-create-objects-and-the-resulting-prototype-chain)
  - [Dig into some examples from MDN](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#dig-into-some-examples-from-mdn)
  - [Notes](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#notes)
  - [We have to call `super` first in constructor](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#we-have-to-call-super-first-in-constructor)
- [**Coercion**](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/coercion.md)
  - [Explain `Coercion` in JavaScript with examples](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/coercion.md#q-explain-coercion-in-javascript)
- [**Class**](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/class.md)
  - [Public class fields](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/class.md#public-class-fields)
  - [Private class fields](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/class.md#private-class-fields)
  - [Public and static properties](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/class.md#public-and-static-properties)

- [**JavaScript `this` keyword**](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/this-keyword.md)
  - [How does `this` keyword change in different context?](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/this-keyword.md#q-how-does-this-keyword-change-in-different-context)
  - [1. `this` in Global Context](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/this-keyword.md#1-this-in-a-global-context)
  - [2. `this` in Object Constructor](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/this-keyword.md#2-this-in-object-constructor)
  - [3. `this` in an Object Method](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/this-keyword.md#3-this-in-an-object-method)
  - [4. `this` in a Simple function](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/this-keyword.md#4-this-in-a-simple-function)
  - [5. `this` in a Arrow function](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/this-keyword.md#5-this-is-in-arrow-function)
  - [6. `this` in Event listener](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/this-keyword.md#6-this-in-event-listeners)
  - [Default Rules](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/this-keyword.md#default-rules)
  - [Hard Binding of `this`](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/this-keyword.md#hard-binding)
  - [Priority of `this` binding (top -> bottom: hight -> low)](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/this-keyword.md#priority-of-this-binding-top---bottom-high---low)

- [**Immediately Invoked Function Expression (IIFE)**](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/IIFE.md)

- [**Event Loop**](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/event-loop.md)
  - [Underesting Asynchronous JavaScript --- Event Loop](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/event-loop.md#understanding-asynchronous-javascriptthe-event-loop)
  - [Example 1](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/event-loop.md#example-1)
  - [Example 2](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/event-loop.md#example-2)
  - [Example 3: Callback Hell](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/event-loop.md#example-3-callback-hell)

- [ JavaScript `Reactivity` Using `Object.defineProperty()`](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/js-reactivity-visuality.js)

- [**JS Questions and Answers**](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/question-and-answer.md)
  - [What is asynchronous programming and why is it important?](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/question-and-answer.md#what-is-asynchronous-programming-and-why-is-it-important-in-javascript)
  - [Explain Event Delegation](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/question-and-answer.md#explain-event-delegation)
  - [Describe Event Bubbling](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/question-and-answer.md#describe-event-bubbling-bubble-up)
  - [What are benefits of `named` function over a `anonymous` function](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/question-and-answer.md#what-are-benefits-of-a-named-function-over-a-anonymous-function)
  - [Difference between `target` vs `currentTarget`](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/question-and-answer.md#difference-between-target-and-currenttarget)
  - [What is `Factory Function`?](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/question-and-answer.md#what-is-factory-function)
  - [Difference: `null`, `undefined` and `undeclared`?](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/question-and-answer.md#difference-between-a-variable-that-is-null-undefined-or-undeclared)
  - [What does JavaScript `get` and `getter` keyword do?](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/question-and-answer.md#what-does-javascript-get-or-getter-keyword-do)
    - [Define a getter on new objects in object initializers](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/question-and-answer.md#defining-a-getter-on-new-objects-in-object-initializers)
    - [Defining a getter on existing objects using `defineProperty`](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/question-and-answer.md#defining-a-getter-on-existing-objects-using-defineproperty)
    - [Using a computed property](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/question-and-answer.md#using-a-computed-property-name)
    - [Get vs defineProperty()](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/question-and-answer.md#get-vs-definepropery)
  - [What is the `two` conditions of being `Module`?](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/question-and-answer.md#what-is-the-two-conditions-of-being-a-module)
  - [How to get `Unique` values of an Array?](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/question-and-answer.md#how-to-get-unique-values-of-an-array)
  - [How to remove all `falsy` values from an Array?](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/question-and-answer.md#how-can-remove-all-falsy-values-from-an-array)
  - [How to create an `Empty` Object?](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/question-and-answer.md#how-to-create-an-empty-objects)
  - [How to require function parameters by force?](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/question-and-answer.md#how-to-require-function-parameters-by-force)
  - [How to get Query String Parameters?](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/question-and-answer.md#how-to-get-query-string-parameters)
  - [What is `Debouncing` in JavaScript?](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/question-and-answer.md#what-is-debouncing-in-javascript)
  - [How to determine what should be the `this` keyword value?](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/question-and-answer.md#how-to-determine-what-should-be-the-this-keyword-value)
  - [Convert a string to `spinal` string](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/question-and-answer.md#convert-a-string-to-spinal-string-spinal-string-case-is-all-lowercase-words-joined-by-dashes)
  - [What type of `Scoping Rule(s)` does JavaScript have?](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/question-and-answer.md#what-type-of-scoping-rules-does-javascript-have)
  - [What are `3` different ways we can create a new Scoped variable?](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/question-and-answer.md#what-are-3-different-ways-we-can-create-a-new-scoped-variable)
  - [What are the four things the new keyword actually does when we put in front of a function call?](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/question-and-answer.md#what-are-the-four-things-the-new-keyword-actually-does-when-we-put-in-front-of-a-function-call-aka-constructor-call)
  - [What is the different between `undeclared` and `undefined`?](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/question-and-answer.md#what-is-the-different-between-undeclared-and-undefined)
  - [What is the only value in JS that is not equal to itself!?](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/question-and-answer.md#what-is-the-only-value-in-js-that-is-not-equal-to-itself)
  - [What does happen when we declare a variable with `var` and `let`?](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/question-and-answer.md#what-does-happen-when-we-declare-a-variable-with-var-and-let)
  - [Compare: `null`, `undefiend`, `NaN`](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/question-and-answer.md#compare-null-undefined-nan)
  - [Implement an Event Emitter that supports standard operations](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/question-and-answer.md#implement-an-event-emitter-that-supports-standard-operations)
  - [How to Write Optimized JavaScript?](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/question-and-answer.md#how-to-write-optimized-javascript)

## [Vue](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md)

- [What is Vue.js?](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#what-is-vuejs)
- [Installing](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#installing)
- [Known Options for Vue Instance](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#known-options-for-vue-instance)
- [Key Sentences](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#key-sentences)
- [For Loop](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#for-loop-example)
- [Bind Attribute and Class Name](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#bind-attribute-and-class-name)
- [Dynamic Components](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#dynamic-components)
  - [Prevent Destroying components when rendering Dynamic components](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#prevent-destroying-components-when-rendering-dynamic-components)
- [Disable Re-rendering with v-once](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#disable-re-rendering-with-v-once)
- [Output Raw HTML with v-html Directives](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#output-raw-html-with-v-html-directives)
- [Get Event Data from the Event](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#get-event-data-from-the-event)
- [Pass Own Arguments with Event Object](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#pass-own-arguments-with-event-object)
- [Modifying and Event with Modifiers](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#modifying-and-event-with-event-modifiers-eg-v-onmousemovestop)
- [Listening to Keyboard Events](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#listening-to-keyboard-events)
- [Write JavaScript Code into Template](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#writing-javascript-code-in-the-template)
- [Using Tow Way Binding v-model="variable"](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#using-two-way-data-binding-v-modelvariable)
- [Two Way Binding from Child to Parent](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#two-way-binding-from-child-to-parent)
- [Reacting to Changing with Computed Properties](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#reacting-to-changing-with-computed-properties)
- [Dynamic Styling with CSS Classes](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#dynamic-styling-with-css-classes)
- [Setting Styles Dynamically without CSS Classes](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#setting-styles-dynamically-without-css-classes)
- [Styling Elements with an Array Syntax](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#styling-elements-with-an-array-syntax)
- [Conditioning Rendering with v-if/v-else](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#conditioning-rendering-with-v-ifv-else)
- [Alternative of v-if using \<template\> ](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#alternative-of-v-if-using-template-group-html-elements)
- [Use v-show if we don't want to detach element from DOM](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#use-v-show-if-we-dont-want-to-detach-element-from-dom-v-show-adds-styledisplaynone)
- [Rendering Lists with v-for](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#rendering-lists-with-v-for)
- [Use of v-for with \<template\>](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#use-of-v-for-with-template)
- [Looping through Objects](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#looping-through-objects)
- [Looping through a Lists of Numbers](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#looping-through-a-lists-of-numbers)
- [Keeping Track of Elements When using v-for](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#keeping-track-of-elements-when-using-v-for-bind-key)
- [Access Template from Vue Module by Setting a Ref](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#access-template-from-vue-module-thisrefs-by-setting-a-ref)
- [Mounting a Template](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#mounting-a-template)
- [VueJS instance Life Cycle](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#vuejs-instance-lifecycle)
- [Pass HTML Content from Parent to Child Using \<slot\>](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#pass-html-content-from-parent-to-child-using-slot)
- [How Directives Works](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#how-directives-work)
- [HTML5 History Mode](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#html5-history-mode)
- [Difference Between v-model and v-bind](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#difference-between-v-model-and-v-bind)
- [**Vuex**](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#vuex)
- [Service Worker Caching Config - Progressive Web App](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#service-worker-caching-config-progressive-web-app)
- [Toggling Similar Elements](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#toggling-similar-elements)
- [Vue Router has 3 Types of Guards](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#vue-router-has-3-types-of-guards)
- [Vue Filters](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#filters)
  - [Define Local Filter](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#define-local-filter)
  - [Define a Global Filter](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#define-a-global-filter)
  - [Chained Filter](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#chained-filter)
  - [Filter with Arguments](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#filter-with-arguments)
- [Mixin](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#mixin)
- [Vue Cheat Sheets](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#vue-cheat-sheets)
- [Vuex Cheat Sheets](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#vuex-cheat-sheets)
- [Shortcuts](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#shortcuts)
- [Initial Render](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#initial-render)
- [Virtual DOM](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#virtual-dom)
- [Runtime + Compiler vs. Runtime-only](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#runtime--compiler-vs-runtime-only)
- [Compile Templates in Client Manually](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#compile-templates-in-client-manually)
- [**Reactivity in Depth**](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#reactivity-in-depth)
  - [Reactivity inside Computed Properties](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#reactivity-inside-computed-properties)
- [Parent-child Communication](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md#parent-child-communication)

## [Node](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/nodejs/introduction.md)
## [React](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/react/react-overview.md)
## [Angular](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/angular/angular.md)
## [Gulp](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/gulp/gulp.md)
## [Unit Testing](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/unit-testing/mocha.md)

# Docker

* Docker Install (latest or a specific version)
* Run docker as daemon
* Remove all containers
* Remove all images
* Run an image
* print log of a container
* Exec a container
* Run image with binding port
