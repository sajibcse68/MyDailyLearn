## Accelerating Through Angular (2)

#### What is Angular?
- Angular is a framework for dynamic web applications.
- Provides a way to organize your HTML, JavaScript, and CSS to keep front-end code clean.

#### Angular 1 Vs Angular 2
- Speed: Angular 2 is faster
- Components: Instead of controllers and scope, we use components, which is simpler. Components are the basic building
  blocks of any Angular application.
- Simpler Directives: Creating custom directives is muck simpler
- Intutitive Data Binding: When we need to link data to an HTML element or listen for button clicking on the page, we have an intuitive syntax.
- Services are now just a class.
- Many more small improvements.

#### Use `TypeScript` as Transpiler
TypeScript is Microsoft's extension of JavaScript that allows the use of all ES2015 features and adds powerful type
checking and object-oriented features.
- We are coding Angular using TypeScript, a language that transpiles into JavaScipt.
- We use custom HTML tag (aka, selector) to show where we want our component to load inside out HTML.
- Our component decorator is what truns plain Typescript class into a component.

#### Structural Directives
- A directive (within Angular) is how we add dynamic behavior to HTML.
- There are three kinks of directives:
  - Component
    - Has a template
  - Structural
    - Modify the structure of the DOM
    - e.g. *ngFor and *ngIf are the examples of Structural Directives.
  - Attribute
    - Modify the attributes of DOM elements

#### Pipes and Methods
- A pipe takes in data as input and tranforms it to a desired output.
- e.g.
    - lowercase: Well, lowecase
    - date: Formats dates how we like them
    - number: Formats numbers
    - decimal: Formats decimals
    - replace: Creates a new string, replacing specified characters
    - slice: Creates a new list or string containing a subset of the elements
    - json: Transforms any input to a JSON.formatted string
#### Splitting to Two Components
- Our `main.ts` is where we import our first component and bootstrap it.
- In order to import a class, we must give it the `export` keyword.
- We use `directives` metadata to list the directives our component class.
- Components are the building blocks of our application.

#### Component HTML & CSS
- We can include CSS just like we include our HTML template
- CSS automatically gets scoped to our component.
- HTML and CSS can get split out into their own files.

#### Mocks and Models
- TypeScript gives us the ability to be more object oriented with our data by Model.
- We can use Classes to model our data.
- TypeScript helps us specify class property types that help our compiler ensure we're writing good code.
- It's good practice to keep our mock data separate from our model and components, in it's own file.

#### Data Binding
- Property binding allows us to bind component properties to any DOM element properties.
- Any update to the component property value will update the DOM property, but not vice verssa--that's why ti's `one-way binding`.
- Class binding allows us to specify a CSS class to add to a DOM element if a component property is true.

#### Event Binding
- Event binding allows us to listen to any DOM event and call a component method when it's triggered.
- To listen to any event, we need to remove the "on" in front of the word, wrap it in parentheses, and specify a component method to call.
- If we need to access the event object, we can pass it in our component method with $event.

#### Two Way Binding
- Two-way binding means that if the component property is modified inside the component (JavaScript) or inside our
  web page (HTML), if will stay in sync.
- The [(ngModel)], allows us to have one command to express two-way data binding.
- [()] syntax is sometimes called **banana in a box**.
- When we use th **ngModel** syntax, we can only set it equal to a data bound property.
  - Ok: [(ngModal)]="user.age", [(ngModal)]="firsName"
  - Not Ok: [(ngModal)]="fullName()"

#### Services
- Services are used to organize and share code across our app, and they're usually used where we create
  our data access methods.
- When we run an Angular 2 application, it creates a dependency injector. An injector is in charge of knowing how to
  create and send things.
- We use dependency injection to create and send services to the classes that need them.
- We give our dependency injector providers so that it knows what classes it can create and send for us.
- We ask for dependencies by specifying them in our class constructor.

#### HTTP
- Angular apps usually load data using classes after the Angular app is initialized and running.
- We can use HTTP library through dependency injection.
- Our http calls return an observable, not a promise, which behaves more like an array.
---

## The Complete Angular Master Class (Udemy)

#### Shadow DOM
- It's normally a specification that enables DOM tree, Style, etc Encapsulation. 
- Allows us to apply **scoped styles** to elements without bleeding out to the outer world.
 
N.B. only supported by safari >= v10, chrome >= v53.

```js
var el = document.querySelector('favorite');
var root = el.createShadowRoot();

root.innerHTML = `
    <style>h1 { color: red }</style>
    <h1>Hello</h1>
`
```

#### Components
Three steps to use a components.

- `Create` a component
- `Register` a component
- Add an element in an `HTML markup`

A component encapsulates the data, the logic and html markup for a view.

#### Templates

## Commands
```
// create a new Component
$ ng g c <name>

// create a new Service
$ ng g s <name>
```





















