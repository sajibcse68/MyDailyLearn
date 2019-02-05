# MyDailyLearn
Here is some important `commands` or `code snippets` on different topics that I am learning in my developing life.

## Table of Contents
- [MyDailyLearn](#mydailylearn)
  - [Table of Contents](#table-of-contents)
- [Git](#git)
- [JavaScript](#javascript)
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

- [Hoisting](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/hoisting.md)
  - [Explain `Hoisting` in JavaScript](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/hoisting.md#explain-hoisting-in-javascript)
  - [Why `Hoisting` Important?](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/hoisting.md#why-hoisting-is-important)
  - [First, memory is set aside for all necessary variables and declared functions(https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/hoisting.md#first-memory-is-set-aside-for-all-necessary-variables-and-declared-functions)
  - [Function Expressions are never hoisted! They are treated as assignments(https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/hoisting.md#function-expressions-are-never-hoisted-they-are-treated-as-assignments)
  - [Check if return statement is at the top](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/hoisting.md#check-if-return-statement-is-at-the-top)
  - [Analyzing Hoisting Load Order I](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/hoisting.md#analyzing-hoisting-load-order-i)
  - [Analyzing load order II](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/hoisting.md#analyzing-load-order-ii)
  - [Analyzing Load Order III](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/hoisting.md#analyzing-load-order-iii)
  - [The variables declared with `let` or `const` are hoisted but stay `uninitialised`(https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/hoisting.md#the-variables-declared-with-let-or-const-are-hoisted-but-stay-uninitialised)
- [Closure](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/closure.md)
  - [Closures and References](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/closure.md)
  - [Closures Help in Function `Construction Zones`](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/closure.md#closures-help-in-function-construction-zones)
  - [Loops with Closure: A cautionary Tale](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/closure.md#loops-with-closure-a-cautionary-tale-be-a-closure-master)
- [Prototypes and Inheritance](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md)
  - [Prototypes!](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#prototypes)
  - [What is Constructor call?](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#what-is-a-constructor-call)
  - [What is `[[Prototype]]` and where does it come from?](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#what-is-prototype-and-where-does-it-come-from)
  - [How does `[[Prototype]]` affect the behavior of an object?](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#how-does-prototype-affect-the-behavior-of-an-object)
  - [What is the 3 different ways to find where an object `[[Prototype]]` linked to?(https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#what-is-the-3-different-ways-to-find-where-an-object-say-ob-prototype-is-linked-to)
  - [Discuss: `__proto__`, `[[Prototype]]`, `prototype`](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#discuss-__proto__-prototype-and-prototype)
  - [Two mechanism always exists in JavaScirpt -- Lexical Scopes & Prototype Chain(https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#two-mechanism-always-exists-in-javascript-codes----lexical-scopes--prototype-chain)
  - [Object Oriented in JavaScript](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#object-oriented-in-javascript)
  - [Explanation of Prototype](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#explanation-of-prototype)
  - [When an inherited function is executed, the value of `this` points to the inheriting object, not to the `prototype object` where the function is an own property(https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypesmd#when-an-inherited-function-is-executed-the-value-of-this-points-to-the-inheriting-object-not-to-the-prototype-object-where-the-function-is-an-own-property)
  - [New object using Object.create() (ES5)](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#new-object-using-objectcreate-es5)
  - [New object using `class` syntactical sugar](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#new-object-using-class-syntactical-sugar)
  - [Similar in Object pattern](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#similar-in-object-pattern)
  - [Use `hasOwnProperty()` to know if the property exists as it's own property(https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#use-hasownproperty-to-know-if-the-property-exists-as-its-own-property)
  - [Prototype shadowing](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#prototype-shadowing)
  - [Avoid Shadowing](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#avoid-shadowing)
  - [Object Linked](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#object-linked)
  - [`OLOO` (Object Linked to Other Object): delegated objects](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#oloo-object-linked-to-other-object-delegated-objects)
  - [Convert the above codes to OLOO](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#convert-the-above-codes-to-oloo)
  - [Class in ES6](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#class-in-es6)
  - [Different ways to create objects and the resulting prototype chain(https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#different-ways-to-create-objects-and-the-resulting-prototype-chain)
  - [Dig into some examples from MDN](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#dig-into-some-examples-from-mdn)
  - [Notes](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#notes)
  - [We have to call `super` first in constructor](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/prototypes.md#we-have-to-call-super-first-in-constructor)
    
## [Vue](https://github.com/sajibcse68/MyDailyLearn/blob/master/javascript/vue/vuejs.md)
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
