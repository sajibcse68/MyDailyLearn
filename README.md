# MyDailyLearn 🧑‍💻

This repository is a collection of useful commands, code snippets, and tutorials covering various technologies and concepts I encounter in my journey as a developer. 🌱

**Explore, learn, and grow with me!** 📚

**Show your support:** ✨

* **Star** ⭐ this repository to help it gain visibility.
* **Share** 📢 it with fellow developers who might find it useful.

<img alt="star_me" width="250" src="./images/star_me.gif">

## Table of Contents

|                            |                                                      |                        |                          |                        |                              |                                |                                          |
| -------------------------- |----------------------------------------------------- | ---------------------- | ------------------------ | ---------------------- | ---------------------------- |------------------------------- | ---------------------------------------- |
| <h3>[React](#react-1)</h3> | <h3>[Vanilla JavaScript](#vanilla-javascript-1)</h3> | <h3>[Git](#git-1)</h3> | <h3>[Node](#node-1)</h3> | <h3>[Vue](#vue-1)</h3> | <h3>[Docker](#docker-1)</h3> | <h3>[Angular](#angular-1)</h3> | <h3>[Unit Testing](#unit-testing-1)</h3> |

# [React](react/react.md)

<details open>
<summary>
Hide/Show table of contents
</summary>

| Topic                   | Question                                                                                                               |
| ----------------------- |------------------------------------------------------------------------------------------------------------------------|
|                         | <h3>Basic</h3>              |                                                                                          |
|                         | [What is React](react/react.md#what-is-react)                                                       |
|                         | [Installing](react/react.md#installing)                                              |
|                         | <h3>React Props</h3>         |
|                         | [Use Default Props](react/react.md#use-default-props)|
|                         | [Use PropTypes to Define the Props We Expect](react/react.md#use-proptypes-to-define-the-props-we-expect)|
|                         | <h3>Life Cycle</h3>          |                                                                                                    |
|                         | [React Hook Flow Diagram](react/react.md#react-hook-flow-diagram)|
|                         | [React App Life-cycle Walk through](react/react.md#react-app-life-cycle-walk-through)|
|                         | [LifeCycle Methods in Class Component](react/react.md#lifecycle-methods-in-class-component)|
|                         | <h3>React State</h3>         | |
| **SetState**            |          |
|                         | [Understanding React `setState`](react/react.md#understanding-react-setstate)|
|                         | [Update a State Property](react/react.md#update-a-state-property)|
|                         | [Passing a Function to `setState()`](react/react.md#passing-a-function-to-setstate)|
|                         | [Access Previous State using Updater](react/react.md#access-previous-state-using-updater)|
| **Lazy Initialization** |
|                         | [What is useState Lazy Initialization?](react/react.md#what-is-usestate-lazy-initialization)|
| **Derived State**       | |
|                         | [When to Use Derived State?](react/react.md#when-to-use-derived-state) |
| **flushSync**           |
|                         | [What is `flushSync`?](react/react.md#what-is-flushsync) |
|                         | [Alternative State Initialization](react/react.md#alternative-state-initialization)|
|                         | <h3>**React Hooks**</h3> |
| **useLayoutEffect**     |                      |
|                         | [Which is preferred, `useLayoutEffect` or `useEffect`?](react/react.md#uselayouteffect---which-is-preferred-uselayouteffect-or-useeffect) |
|                         | [useLayoutEffect vs useEffect](react/react.md#uselayouteffect-vs-useeffect) |
|                         | [What would happen if a user clicks on a 'count button' on the UI?](react/react.md#what-would-happen-if-a-user-clicks-on-a-count-button-on-the-ui) |
|                         | [When to use `useLayoutEffect` instead of `useEffect`?](react/react.md#when-to-use-uselayouteffect-instead-of-useeffect) |
| **useImperativeHandle** | |
|                         | [What is `useImperativeHandle` hook?](react/react.md#what-is-useimperativehandle-hook) |
|                         | [Why use useImperativeHandle?](react/react.md#why-use-useimperativehandle) |
|                         | [How useImperativeHandle works?](react/react.md#how-useimperativehandle-works) |
|                         | [How can we focus a child component's input element using `useImperativeHandle`](react/react.md#how-can-we-focus-a-child-components-input-element-using-useimperativehandle) |
|                         | [When to use `useImperativeHandle`](react/react.md#when-to-use-useimperativehandle) |
|                         | <h3>Type of Components</h3>  |                      |
|                         | [Stateless Functional Component, Stateless Component and Stateful Component](react/react.md#stateless-functional-component-stateless-component-and-stateful-component)|
|                         | [Compound Component](react/react.md#compound-components)|
|                         | [Uncontrolled Component](react/react.md#uncontrolled-components)|
|                         | [Controlled Component](react/react.md#controlled-components)|
|                         | [Higher Order Component](react/react.md#higher-order-components)|
|                         | <h3>Fragment<h3>            |
|                         | [React Fragment](react/react.md#react-fragment)|
|                         | <h3>Refs and the DOM<h3>    |
|                         | [Refs and the DOM](react/react.md#refs-and-the-dom)|
|                         | [When to Use Refs](react/react.md#when-to-use-refs)|
|                         | [Creating Refs](react/react.md#creating-refs)|
|                         | [Accessing Refs](react/react.md#accessing-refs)|
|                         | [Use Callback on Image Load with Ref](react/react.md#use-callback-on-image-load-with-ref)|
|                         | <h3>React Portals<h3>       |
|                         | [React Portals](react/react.md#react-portals)|
|                         | [Usage of Portals](react/react.md#usage-of-portals)|
|                         | <h3>React Route<h3>         |
|                         | [Familiar with Various React Router Libraries](react/react.md#familiar-with-various-react-router-libraries)|
|                         | [How to Not Navigation with React Router](react/react.md#how-to-not-navigation-with-react-router)|
|                         | [Three (3) Types of Router](react/react.md#3-types-of-router)|
|                         | <h3>Context API<h3>         |
|                         | [Understand Context API](react/react.md#understand-context-api)|
|                         | [Referencing Context in Stateless Functional Components](react/react.md#referencing-context-in-stateless-functional-components)|
|                         | [Redux vs Context API](react/react.md#redux-vs-context-api)|
|                         | <h3>Performance<h3>         | |
|                         | [Use of react-addons-perf](react/react.md#use-of-react-addons-perf) |
|                         | [What are the tricks we can use to optimize react app?](react/react.md#what-are-the-tricks-we-can-use-to-optimize-react-app) |
|                         | <h3>Miscellaneous<h3>       |
|                         | [React vs ReactDOM](react/react.md#react-vs-reactdom)|
|                         | [How to Prevent from `re-rendering`?](react/react.md#how-to-prevent-components-from-re-rendering)|
|                         | [When to Use Component Instead of `PureComponent`?](react/react.md#when-to-use-component-instead-of-purecomponent)|
|                         | [How can we avoid Props Drilling in React?](react/react.md#how-can-we-avoid-props-drilling-in-react)|
|                         | [What is the `render props`?](react/react.md#what-is-the-render-props)|
|                         | [React Unit Tests vs Integration Tests for Components?](react/react.md#react-unit-tests-vs-integration-tests-for-components)|
|                         | [Migration from Class to Function Component](react/react.md#migration-from-class-to-function-component)|
</details>

# [Vanilla JavaScript](javascript/javascript.md)

<details open>
<summary>
Hide/Show Table of Contents
</summary>

| Topic        | Question |
|--------------|----------|
|  | <h3>Hoisting</h3>  |
|  | [Explain `Hoisting` in JavaScript](javascript/hoisting.md#explain-hoisting-in-javascript) |
|  | [Why `Hoisting` Important?](javascript/hoisting.md#why-hoisting-is-important) |
|  | [First, memory is set aside for all necessary variables and declared functions](javascript/hoisting.md#first-memory-is-set-aside-for-all-necessary-variables-and-declared-functions) |
|  | [Function Expressions are never hoisted! They are treated as assignments](javascript/hoisting.md#function-expressions-are-never-hoisted-they-are-treated-as-assignments) |
|  | [Check if return statement is at the top](javascript/hoisting.md#check-if-return-statement-is-at-the-top) |
|  | [Analyzing Hoisting Load Order I](javascript/hoisting.md#analyzing-hoisting-load-order-i) |
|  | [Analyzing load order II](javascript/hoisting.md#analyzing-load-order-ii) |
|  | [Analyzing Load Order III](javascript/hoisting.md#analyzing-load-order-iii) |
|  | [The variables declared with `let` or `const` are hoisted but stay `uninitialised`](javascript/hoisting.md#the-variables-declared-with-let-or-const-are-hoisted-but-stay-uninitialised) |
|  | <h3>Closure</h3> |  |
|  | [Closures and References](javascript/closure.md) |
|  | [Closures Help in Function `Construction Zones`](javascript/closure.md#closures-help-in-function-construction-zones) |
|  | [Loops with Closure: A cautionary Tale](javascript/closure.md#loops-with-closure-a-cautionary-tale-be-a-closure-master) |
|  | <h3>Prototypes and Inheritance</h3> |  |
|  | [Prototypes!](javascript/prototypes.md#prototypes) |
|  | [What is Constructor call?](javascript/prototypes.md#what-is-a-constructor-call) |
|  | [What is `[[Prototype]]` and where does it come from?](javascript/prototypes.md#what-is-prototype-and-where-does-it-come-from) |
|  | [How does `[[Prototype]]` affect the behavior of an object?](javascript/prototypes.md#how-does-prototype-affect-the-behavior-of-an-object) |
|  | [What is the 3 different ways to find where an object`[[Prototype]]` linked to?](javascript/prototypes.md#what-is-the-3-different-ways-to-find-where-an-object-say-ob-prototype-is-linked-to) |
|  | [Discuss: `__proto__`, `[[Prototype]]`, `prototype`](javascript/prototypes.md#discuss-__proto__-prototype-and-prototype) |
|  | [Two mechanism always exists in JavaScirpt -- Lexical Scopes & Prototype Chain](javascript/prototypes.md#two-mechanism-always-exists-in-javascript-codes----lexical-scopes--prototype-chain) |
|  | [Object Oriented in JavaScript](javascript/prototypes.md#object-oriented-in-javascript) |
|  | [Explanation of Prototype](javascript/prototypes.md#explanation-of-prototype) |
|  | [When an inherited function is executed, the value of `this` points to the inheriting object, not to the `prototype object` where the function is an own property](javascript/prototypes.md#when-an-inherited-function-is-executed-the-value-of-this-points-to-the-inheriting-object-not-to-the-prototype-object-where-the-function-is-an-own-property) |
|  | [New object using Object.create() (ES5)](javascript/prototypes.md#new-object-using-objectcreate-es5) |
|  | [New object using `class` syntactical sugar](javascript/prototypes.md#new-object-using-class-syntactical-sugar) |
|  | [Similar in Object pattern](javascript/prototypes.md#similar-in-object-pattern) |
|  | [Use `hasOwnProperty()` to know if the property exists as it's own property](javascript/prototypes.md#use-hasownproperty-to-know-if-the-property-exists-as-its-own-property) |
|  | [Prototype shadowing](javascript/prototypes.md#prototype-shadowing) |
|  | [Avoid Shadowing](javascript/prototypes.md#avoid-shadowing) |
|  | [Object Linked](javascript/prototypes.md#object-linked) |
|  | [`OLOO` (Object Linked to Other Object): delegated objects](javascript/prototypes.md#oloo-object-linked-to-other-object-delegated-objects) |
|  | [Convert the above codes to OLOO](javascript/prototypes.md#convert-the-above-codes-to-oloo) |
|  | [Class in ES6](javascript/prototypes.md#class-in-es6) |
|  | [Different ways to create objects and the resulting prototype chain](javascript/prototypes.md#different-ways-to-create-objects-and-the-resulting-prototype-chain) |
|  | [Dig into some examples from MDN](javascript/prototypes.md#dig-into-some-examples-from-mdn) |
|  | [Notes](javascript/prototypes.md#notes) |
|  | [We have to call `super` first in constructor](javascript/prototypes.md#we-have-to-call-super-first-in-constructor) |
|  | <h3>Coercion</h3> |  |
|  | [Explain `Coercion` in JavaScript with examples](javascript/coercion.md#q-explain-coercion-in-javascript) |
|  | <h3>Class</h3> |  |
|  | [Public class fields](javascript/class.md#public-class-fields) |
|  | [Private class fields](javascript/class.md#private-class-fields) |
|  | [Public and static properties](javascript/class.md#public-and-static-properties) |
|  | <h3>JavaScript `this` keyword</h3> |  |
|  | [How does `this` keyword change in different context?](javascript/this-keyword.md#q-how-does-this-keyword-change-in-different-context) |
|  | [1. `this` in Global Context](javascript/this-keyword.md#1-this-in-a-global-context) |
|  | [2. `this` in Object Constructor](javascript/this-keyword.md#2-this-in-object-constructor) |
|  | [3. `this` in an Object Method](javascript/this-keyword.md#3-this-in-an-object-method) |
|  | [4. `this` in a Simple function](javascript/this-keyword.md#4-this-in-a-simple-function) |
|  | [5. `this` in a Arrow function](javascript/this-keyword.md#5-this-is-in-arrow-function) |
|  | [6. `this` in Event listener](javascript/this-keyword.md#6-this-in-event-listeners) |
|  | [Default Rules](javascript/this-keyword.md#default-rules) |
|  | [Hard Binding of `this`](javascript/this-keyword.md#hard-binding) |
|  | [Priority of `this` binding (top -> bottom: hight -> low)](javascript/this-keyword.md#priority-of-this-binding-top---bottom-high---low) |
|  | <h3>Immediately Invoked Function Expression (IIFE)</h3> |  |
|  | [Explain why the following doesn't work as an IIFE](javascript/IIFE.md#explain-why-the-following-doesnt-work-as-an-iife) |
|  | <h3>Event Loop</h3> |  |
|  | [Underesting Asynchronous JavaScript --- Event Loop](javascript/event-loop.md#understanding-asynchronous-javascriptthe-event-loop) |
|  | [Example 1](javascript/event-loop.md#example-1) |
|  | [Example 2](javascript/event-loop.md#example-2) |
|  | [Example 3: Callback Hell](javascript/event-loop.md#example-3-callback-hell) |
|  | <h3>JavaScript Reactivity</h3> | 
|  | [JavaScript Reactivity using 'Object.defineProperty()'](javascript/js-reactivity-visuality.js)  |
|  | <h3>Miscellaneous</h3> |  |
|  | [What is asynchronous programming and why is it important?](javascript/javascript-qa.md#what-is-asynchronous-programming-and-why-is-it-important-in-javascript) |
|  | [Explain Event Delegation](javascript/javascript-qa.md#explain-event-delegation) |
|  | [Describe Event Bubbling](javascript/javascript-qa.md#describe-event-bubbling-bubble-up) |
|  | [What are benefits of `named` function over a `anonymous` function](javascript/javascript-qa.md#what-are-benefits-of-a-named-function-over-a-anonymous-function) |
|  | [Difference between `target` vs `currentTarget`](javascript/javascript-qa.md#difference-between-target-and-currenttarget) |
|  | [What is `Factory Function`?](javascript/javascript-qa.md#what-is-factory-function) |
|  | [Difference: `null`, `undefined` and `undeclared`?](javascript/javascript-qa.md#difference-between-a-variable-that-is-null-undefined-or-undeclared) |
|  | [What does JavaScript `get` and `getter` keyword do?](javascript/javascript-qa.md#what-does-javascript-get-or-getter-keyword-do) |
|  | [Define a getter on new objects in object initializers](javascript/javascript-qa.md#defining-a-getter-on-new-objects-in-object-initializers) |
|  | [Defining a getter on existing objects using `defineProperty`](javascript/javascript-qa.md#defining-a-getter-on-existing-objects-using-defineproperty) |
|  | [Using a computed property](javascript/javascript-qa.md#using-a-computed-property-name) |
|  | [Get vs defineProperty()](javascript/javascript-qa.md#get-vs-definepropery) |
|  | [What is the `two` conditions of being `Module`?](javascript/javascript-qa.md#what-is-the-two-conditions-of-being-a-module) |
|  | [How to get `Unique` values of an Array?](javascript/javascript-qa.md#how-to-get-unique-values-of-an-array) |
|  | [How to remove all `falsy` values from an Array?](javascript/javascript-qa.md#how-can-remove-all-falsy-values-from-an-array) |
|  | [How to create an `Empty` Object?](javascript/javascript-qa.md#how-to-create-an-empty-objects) |
|  | [How to require function parameters by force?](javascript/javascript-qa.md#how-to-require-function-parameters-by-force) |
|  | [How to get Query String Parameters?](javascript/javascript-qa.md#how-to-get-query-string-parameters) |
|  | [What is `Debouncing` in JavaScript?](javascript/javascript-qa.md#what-is-debouncing-in-javascript) |
|  | [How to determine what should be the `this` keyword value?](javascript/javascript-qa.md#how-to-determine-what-should-be-the-this-keyword-value) |
|  | [Convert a string to `spinal` string](javascript/javascript-qa.md#convert-a-string-to-spinal-string-spinal-string-case-is-all-lowercase-words-joined-by-dashes) |
|  | [What type of `Scoping Rule(s)` does JavaScript have?](javascript/javascript-qa.md#what-type-of-scoping-rules-does-javascript-have) |
|  | [What are `3` different ways we can create a new Scoped variable?](javascript/javascript-qa.md#what-are-3-different-ways-we-can-create-a-new-scoped-variable) |
|  | [What are the four things the new keyword actually does when we put in front of a function call?](javascript/javascript-qa.md#what-are-the-four-things-the-new-keyword-actually-does-when-we-put-in-front-of-a-function-call-aka-constructor-call) |
|  | [What is the different between `undeclared` and `undefined`?](javascript/javascript-qa.md#what-is-the-different-between-undeclared-and-undefined) |
|  | [What is the only value in JS that is not equal to itself!?](javascript/javascript-qa.md#what-is-the-only-value-in-js-that-is-not-equal-to-itself) |
|  | [What does happen when we declare a variable with `var` and `let`?](javascript/javascript-qa.md#what-does-happen-when-we-declare-a-variable-with-var-and-let) |
|  | [Compare: `null`, `undefiend`, `NaN`](javascript/javascript-qa.md#compare-null-undefined-nan) |
|  | [Implement an Event Emitter that supports standard operations](javascript/javascript-qa.md#implement-an-event-emitter-that-supports-standard-operations) |
|  | [How to Write Optimized JavaScript?](javascript/javascript-qa.md#how-to-write-optimized-javascript) |
</details>


# [Git](git/git-cheatsheet.md)

<details open>
<summary>
Hide/Show Table of Contents
</summary>

| Topic                  | Question |
|------------------------|----------|
| Configure git          | |
|                        | [Git config file locations](git/git-cheatsheet.md#git-config-file-locations) |
|                        | [Configure user's name & email](git/git-cheatsheet.md#configure-users-name-and-email) |
|                        | [Other `config` commands](git/git-cheatsheet.md#other-config-commands) |
| Branching              | |
|                        | [Common references and terminology](git/git-cheatsheet.md#common-references-and-terminology) |
|                        | [Create new branch](git/git-cheatsheet.md#create-new-branch) |
|                        | [Delete branch](git/git-cheatsheet.md#delete-branch) |
|                        | [Quick switch back to previous branch/commit-sha/references etc.](git/git-cheatsheet.md#quick-switch-to-a-previous-branch-or-commit-sha-symbolic-references-etc) |
|                        | [Branch listing](git/git-cheatsheet.md#branch-listing) |
|                        | [Rename a branch](git/git-cheatsheet.md#rename-a-branch) |
|                        | [Track a new branch](git/git-cheatsheet.md#track-a-new-branch) |
| Essential Git Commands | | 
|                        | [Git Add](git/git-cheatsheet.md#git-add)
|                        | [Git Commit](git/git-cheatsheet.md#git-commit)
|                        | [Git Amend](git/git-cheatsheet.md#git-amend)
|                        | [Git Pull](git/git-cheatsheet.md#git-pull)
|                        | [Git Push](git/git-cheatsheet.md#git-push)
|                        | [Git Merge](git/git-cheatsheet.md#git-merge)
| Checkout               | |
|                        | [Checkout forward/backward](git/git-cheatsheet.md#checkout-go-forwardbackward) |
| Cherry Pick            | |
|                        | [Cherry Pick](git/git-cheatsheet.md#add-commit-amend-pull-push-merge--delete) |
| Stashing               | |
|                        | [Stashing](git/git-cheatsheet.md#stashing) |
| Logging                | |
|                        | [Logging](git/git-cheatsheet.md#logging) |
| Show                   | |
|                        | [Show - more logging](git/git-cheatsheet.md#show-more-logging) |
| Recovery or Reset      | |
|                        | [Recovery or Reset](git/git-cheatsheet.md#recovery-or-reset) |
|                        | [Reset using `reflog`](git/git-cheatsheet.md#reset-using-reflog) |
| Squash                 | |
|                        | [Squash](git/git-cheatsheet.md#squash) |
| Rebase                 | |
|                        | [Rebase](git/git-cheatsheet.md#rebase) |
|                        | [Change the `author` of an earlier commit](git/git-cheatsheet.md#change-the-author-of-an-earlier-commit) |
|                        | [Change the `commit message` of an earlier commit](git/git-cheatsheet.md#change-the-commit-message-of-an-earlier-commit) |
|                        | [Reordering commits using rebase](git/git-cheatsheet.md#reordering-commits-using-rebase) |
|                        | [Rebase options](git/git-cheatsheet.md#rebase-options) |
| Working with Remotes   | |
|                        | [Working with remotes](git/git-cheatsheet.md#working-with-remotes) |
| Conflicts              | |
|                        | [Conflicts](git/git-cheatsheet.md#conflicts) |
| Submodules             | | 
|                        | [Git Submodules](git/git-cheatsheet.md#submodules) |
| Important operations   | |
|                        | [Some important operations](git/git-cheatsheet.md#some-important-operations) |
|                        | [Cleanup garbage in remote repository](git/git-cheatsheet.md#cleanup-garbage-in-remote-repository) |
|                        | [Remove Large Files from Git History with BFG](git/git-cheatsheet.md#remove-large-files-from-git-history-with-bfg)|
|                        | [Search all of git history for a String](git/git-cheatsheet.md#search-all-of-git-history-for-a-string)|
|                        ||
|                        | [Prune empty commits](git/git-cheatsheet.md#prune-empty-commits) |
|                        | [Create a new WorkTree and work in parallel in the same repo (different branch)](git/git-cheatsheet.md#create-a-new-worktree-and-work-in-parallel-in-the-same-repo-different-branch) |
|                        | [Add a `signed-off-by` field in a commit](git/git-cheatsheet.md#add-a-signed-off-by-field-in-a-commit) |
|                        | [How to tell git to ignore local changes (already tracked by git)?](git/git-cheatsheet.md#how-to-tell-git-to-ignore-local-changes-already-tracked-by-git) |
|                        | [Generate a Git Hash (SHA1) for specific contents](git/git-cheatsheet.md#generate-a-git-hash-sha1-for-specific-contents) |
| Tag and Releases       | |
|                        | [Tag and Releases](git/git-cheatsheet.md#tags-and-releases) |
| Fancy commands         | |
|                        | [Fancy Commands](git/git-cheatsheet.md#fancy-commands) |
|                        | [Quickly browse the history of files in any git repos](git/git-cheatsheet.md#quickly-browse-the-history-of-files-in-any-git-repos) |
| Concepts               | |
|                        | [Tracked vs Untrack file](git/git-cheatsheet.md#tracked-vs-untrack-file) |
|                        | [GitHub vs Git](git/git-cheatsheet.md#github-vs-git) |
|                        | [Commit Object](git/git-cheatsheet.md#commit-object) |
|                        | [Three areas where code lives](git/git-cheatsheet.md#three-areas-where-code-lives)|
|                        | [Three types of git `References`](git/git-cheatsheet.md#three-types-of-git-references)|
|                        | [Different types of HEAD](git/git-cheatsheet.md#different-types-of-head)|
|                        | [The Seven Rules of a Great Git Commit Message](git/git-cheatsheet.md#the-seven-rules-of-a-great-git-commit-message)|
|                        | [Difference between HEAD~ and HEAD^](git/git-cheatsheet.md#difference-between-head-and-head)|


# [Vue](vue/vuejs.md)

- [What is Vue.js?](vue/vuejs.md#what-is-vuejs)
- [Installing](vue/vuejs.md#installing)
- [Known Options for Vue Instance](vue/vuejs.md#known-options-for-vue-instance)
- [Key Sentences](vue/vuejs.md#key-sentences)
- [For Loop](vue/vuejs.md#for-loop-example)
- [Bind Attribute and Class Name](vue/vuejs.md#bind-attribute-and-class-name)
- [Dynamic Components](vue/vuejs.md#dynamic-components)
  - [Prevent Destroying components when rendering Dynamic components](vue/vuejs.md#prevent-destroying-components-when-rendering-dynamic-components)
- [Lazy Loading Off-screen Components](vue/vuejs.md#lazy-loading-off-screen-components)
- [Disable Re-rendering with v-once](vue/vuejs.md#disable-re-rendering-with-v-once)
- [Output Raw HTML with v-html Directives](vue/vuejs.md#output-raw-html-with-v-html-directives)
- [Get Event Data from the Event](vue/vuejs.md#get-event-data-from-the-event)
- [Pass Own Arguments with Event Object](vue/vuejs.md#pass-own-arguments-with-event-object)
- [Modifying and Event with Modifiers](vue/vuejs.md#modifying-and-event-with-event-modifiers-eg-v-onmousemovestop)
- [Listening to Keyboard Events](vue/vuejs.md#listening-to-keyboard-events)
- [Write JavaScript Code into Template](vue/vuejs.md#writing-javascript-code-in-the-template)
- [Using Tow Way Binding v-model="variable"](vue/vuejs.md#using-two-way-data-binding-v-modelvariable)
- [Two Way Binding from Child to Parent](vue/vuejs.md#two-way-binding-from-child-to-parent)
- [Reacting to Changing with Computed Properties](vue/vuejs.md#reacting-to-changing-with-computed-properties)
- [Dynamic Styling with CSS Classes](vue/vuejs.md#dynamic-styling-with-css-classes)
- [Setting Styles Dynamically without CSS Classes](vue/vuejs.md#setting-styles-dynamically-without-css-classes)
- [Styling Elements with an Array Syntax](vue/vuejs.md#styling-elements-with-an-array-syntax)
- [Conditioning Rendering with v-if/v-else](vue/vuejs.md#conditioning-rendering-with-v-ifv-else)
- [Alternative of v-if using \<template\> ](vue/vuejs.md#alternative-of-v-if-using-template-group-html-elements)
- [Use v-show if we don't want to detach element from DOM](vue/vuejs.md#use-v-show-if-we-dont-want-to-detach-element-from-dom-v-show-adds-styledisplaynone)
- [Rendering Lists with v-for](vue/vuejs.md#rendering-lists-with-v-for)
- [Use of v-for with \<template\>](vue/vuejs.md#use-of-v-for-with-template)
- [Looping through Objects](vue/vuejs.md#looping-through-objects)
- [Looping through a Lists of Numbers](vue/vuejs.md#looping-through-a-lists-of-numbers)
- [Keeping Track of Elements When using v-for](vue/vuejs.md#keeping-track-of-elements-when-using-v-for-bind-key)
- [Access Template from Vue Module by Setting a Ref](vue/vuejs.md#access-template-from-vue-module-thisrefs-by-setting-a-ref)
- [Mounting a Template](vue/vuejs.md#mounting-a-template)
- [VueJS instance Life Cycle](vue/vuejs.md#vuejs-instance-lifecycle)
- [Pass HTML Content from Parent to Child Using \<slot\>](vue/vuejs.md#pass-html-content-from-parent-to-child-using-slot)
- [How Directives Works](vue/vuejs.md#how-directives-work)
- [HTML5 History Mode](vue/vuejs.md#html5-history-mode)
- [Difference Between v-model and v-bind](vue/vuejs.md#difference-between-v-model-and-v-bind)
- [**Vuex**](vue/vuejs.md#vuex)
- [Service Worker Caching Config - Progressive Web App](vue/vuejs.md#service-worker-caching-config-progressive-web-app)
- [Toggling Similar Elements](vue/vuejs.md#toggling-similar-elements)
- [**Vue Observable** - Alternate to Vuex](vue/vuejs.md#vue-observable---alternate-to-vuex)
- [Vue Router has 3 Types of Guards](vue/vuejs.md#vue-router-has-3-types-of-guards)
- [Vue Filters](vue/vuejs.md#filters)
  - [Define Local Filter](vue/vuejs.md#define-local-filter)
  - [Define a Global Filter](vue/vuejs.md#define-a-global-filter)
  - [Chained Filter](vue/vuejs.md#chained-filter)
  - [Filter with Arguments](vue/vuejs.md#filter-with-arguments)
- [Mixin](vue/vuejs.md#mixin)
- [Vue Cheat Sheets](vue/vuejs.md#vue-cheat-sheets)
- [Vuex Cheat Sheets](vue/vuejs.md#vuex-cheat-sheets)
- [Shortcuts](vue/vuejs.md#shortcuts)
- [Initial Render](vue/vuejs.md#initial-render)
- [Virtual DOM](vue/vuejs.md#virtual-dom)
- [Runtime + Compiler vs. Runtime-only](vue/vuejs.md#runtime--compiler-vs-runtime-only)
- [Compile Templates in Client Manually](vue/vuejs.md#compile-templates-in-client-manually)
- [**Reactivity in Depth**](vue/vuejs.md#reactivity-in-depth)
  - [Reactivity inside Computed Properties](vue/vuejs.md#reactivity-inside-computed-properties)
- [Parent-child Communication](vue/vuejs.md#parent-child-communication)

# [Node](nodejs/introduction.md)
# [Angular](angular/angular.md)
# [Gulp](gulp/gulp.md)
# [Unit Testing](unit-testing/mocha.md)
# [Docker](docker/docker-commands.md)

* Docker Install (latest or a specific version)
* Run docker as daemon
* Remove all containers
* Remove all images
* Run an image
* print log of a container
* Exec a container
* Run image with binding port
