#### What is React?

A JavaScript library for building user interfaces. React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes

#### Installing

```sh
$ npm install -g create-react-app

$ create-react-app <app-name>  # create a new app

# Run an app
$ npm start     # run the app, default localhost:3000
```

**Ref:** https://github.com/sajibcse68/compare-react

## React Props

#### Use `Default Props`

Default props allows us to specify what a prop value should be if no value is explicitly provided.

```js
MyComponent.defaultProps = {
  location: 'San Francisco',
};
```

React assigns default props if props are `undefined`, but if we pass `null` as the value for a prop, if will remain `null`.

#### Use `PropTypes` to Define the Props We Expect

It's considered a best practice to set `propTypes` when we know the type of a prop ahead of time. We can define a `propTypes` property for a component in the same way we defined `defaultProps`.

```js
MyComponent.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
```

Here, `PropTypes.func` part checks that `handleClick` is a function. Adding `isRequired` tells React that `handleClick` is s required property for that component.

Among the `seven` JavaScript Primitive types, `function` and `boolean` (written as `bool`) are the only two hat use unusual spelling.

Note: React `v15.5.0`, `PropTypes` is imported independently from React, like this:

```js
import React, { PropTypes } from 'react';
```

## React Hook Flow Diagram
.
<img src="../images/react-hook-flow-diagram.png" alt="react-hook-flow-diagram" width="600px"/>

## React State

### Understanding React `setState`

`setState()` is the only legitimate way to update state after the initial state setup.

Key Notes:

- Update to a component state should be done using `setState()`
- We can pass **object** or **function** to `setState()`
- We have to pass `function` when we need to update state multiple times
- Do not depend on `this.state` immediately after calling `setState()` since it is Asynchronous. Use `Callback`.

#### Update a State Property

we can pass an object as arguments of `setState()`.

```js
import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    state = {
      searchTerm: '',
    };
  }

  updateState = (event) => {
    // update searchTerm, say this function is called from UI
    setState({
      searchTerm: event.target.value,
    });
  };
}
```

#### Passing a Function to `setState()`

What if we want to increment a counter 3 times after clicking a button one time? Let's see:

```js
handleIncrement() {
  this.setState({ count: this.state.count + 1 });
  this.setState({ count: this.state.count + 1 });
  this.setState({ count: this.state.count + 1 });
}
```

we might be surprised to find **that doesn't work**. It's `equivalent` to:

```js
Object.assign(
  {},
  { count: this.state.count + 1 },
  { count: this.state.count + 1 },
  { count: this.state.count + 1 }
);
```

So, instead of call happening three times, it happens just once.
This can be fixed by `passing a function` to **setState()**.

```js
handleIncrement() {
  this.setState((prevState) => ({ count: prevState.count + 1 }));
  this.setState((prevState) => ({ count: prevState.count + 1 }));
  this.setState((prevState) => ({ count: prevState.count + 1 }));

  // now incrementing count three times with one click!
}
```

#### Access Previous State using Updater

when we pass `function` to `setState()`, first argument is the prevState.

```js
this.setState((prevState) => {
  // prevState is the current state
  return { count: prevState + 1 };
});
```

### What is useState Lazy Initialization?

The arguments passed to `useState` is the `initialState`, the value which initialize your state in the **first** render and gets disregarded in subsequent renders. For example:

```js

const component = () => {
  const [state, setState] = useState(getInitialThousandsItems());
}
```

`Even though the initial value is disregarded upon next renders, the function which initializes it still gets called!`

Lets assume **getInitialThousandsItems()** takes significant time so, in this case you can pass a `function` which returns initial
state, this function will ony be executed once (initial render) and not on each render like the above code will. This is called the `lazy initialization of useState`.

```js

const component = () => {
  const [state, setState] = useState(getInitialThousandsItems);
}

// getInitialThousandsItems() -> getInitialThousandsItems
```

### When to Use Derived State

`getDerivedStateFromProps` exists for only one purpose. It enables a component to update its internal state as the result of **changes in props**.

Derived state should be used sparingly. All problems with derived state that we have seen can be ultimately reduced to either

(1) unconditionally updating state from props or
(2) updating state whenever props and state don’t match. (We’ll go over both in more detail below.)

- If we’re using derived state to memoize some computation based only on the current props, you don’t need derived state. See [What about memoization](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization)?
- If we’re updating derived state unconditionally or updating it whenever props and state don’t match, your component likely `resets its state too frequently`.

```js
static getDerivedStateFromProps(props, state)
```

## Stateless Functional Component, Stateless Component and Stateful component

- `A stateless functional component` is any function we write which accepts `props` and return `JSX`

- `A stateless component` is a class that extends `React.Component`, but does not use internal state.

- `A state`ful component`is any component that does maintain its own internal state. We may see stateful component referred to simply as`components`or`React components`.

[Reference](https://css-tricks.com/understanding-react-setstate/)

## Compound, Uncontrolled and Controlled Components

#### Compound Components

```js
const Display = ({ ifTruthy = true, children } => {
  (ifTruthy)
  ? React.Children.only(children)
  : null
})

const age = 20;

React.DOM.render(
  <Display ifTruthy={age >= 18}>
    <h1>You can vote!</h1>
  </Display>,
  document.getElementById('root');
)
```

#### Uncontrolled Components

```js
const EncouragementForm extends React.Component {
  handleSubmit = e => {
    alert(this.input.value);
    e.preventDefault();
  }
  render() {
    <form onSubmit={this.handleSubmit}>
      <label>
        Send an Encouraging message:
        <input type="text" ref={input => this.input = input }/>
      </label>
      <button> Submit </button>
    </form>
  }
}
```

#### Controlled Components

```js
const EncouragementForm extends React.Component {
  state = {
    message: ''
  }
  handleChange = e => {
    this.setState({
      message: e.target.value
    })
  }
  handleSubmit = e => {
    alert(this.state.message);
    e.preventDefault();
  }
  render() {
    <form onSubmit={this.handleSubmit}>
      <label>
        Send an Encouraging message:
        <input type="text" value={this.state.message} onChange={this.handleChange}/>
      </label>
      <button> Submit </button>
    </form>
  }
}
```

## React Fragment

we can use `React.Fragment` instead of using any extra `div` or `section`, etc.

```js
const NavItems = () => (
  <React.Fragment>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/services">Services</a>
    <a href="/contact">Contact</a>
  </React.Fragment>
);
```

const App = () => {

  <header>
    <nav>
      <NavItems />
    </nav>
  </header>

ReactDOM.render(
<App />,
document.getElementById('root');
)
}

**N.B.** Shortcut of `<React.Fragment></React.Fragment>` is `<></>`

## React App Life-cycle Walk through

1. JS file loaded by the browser
2. Instance of App component is created
3. App components `constructor` function gets called
4. State object is created and assigned to the `this.state` object
5. Call any local method of component
6. React calls the components render method
7. App returns `JSX`, gets rendered to page as HTML



## Understand Context API

```js
const Context = React.createContext();

class Provider extends React.Component {
  state = {
    name: 'Sajib Khan',
  };
  render() {
    return (
      <Context.Provider value={{ state: this.state }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

const Trail = (props) => {
  <div>
    <Context.consumer>
      {(context) => <p>This is the context: {context.state.name}</p>}
    </Context.consumer>
  </div>;
};

const Lift = (props) => (
  <div>
    <Trail />
  </div>
);

class Resort extends React.Component {
  render() {
    return (
      <Provider>
        <div>
          <Lift />
        </div>
      </Provider>
    );
  }
}
```

## Referencing Context in Stateless Functional Components

```js
const Context = React.createContext();

class Provider extends React.Component {
  state = {
    name: 'Sajib Khan',
    status: 'OPEN',
  };
  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          changeStatus: () =>
            this.setState({
              status: 'CLOSED',
            }),
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

const Trail = (props) => {
  <div>
    <Context.consumer>
      {(context) => (
        <div>
          <p>This is the context: {context.state.name}</p>
          <p>The resort is: {context.state.status}</p>
          <button onClick={context.changeStatus}>Close Resort</button>
        </div>
      )}
    </Context.consumer>
  </div>;
};

const Lift = (props) => (
  <div>
    <Trail />
  </div>
);

class Resort extends React.Component {
  render() {
    return (
      <Provider>
        <div>
          <Lift />
        </div>
      </Provider>
    );
  }
}
```

## Higher Order Components

When a components take a component as parameter and return a new component is called `Higer Order Component`.

```js
// higher order components
const DataComponent = (ComposedComponent, url) =>
  class DataComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        loading: false,
        loaded: false
      }
    }
    componentDidMount() {
      this.setState({loading: true})
      fetch(url)
        .then(resp => resp.json())
        .then(data =>
          this.setState({
            loaded: true,
            loading: false,
            data
          });
        )
    }
    render() {
      return (
        <div>
          { this.state.loaded
            ? <ComposedComponent { ...this.state } {...this.props} />
            : <div>Loading</div>
          }
        </div>
      )
    }
  }

const PeopleList = ({data}) =>
  <ol>
    {data.results.map((person, i) => {
      const { first, last } = person.name;
      return (
        <li key={i}>{first} {last}</li>
      )
    })}
  </ol>

const RandomMeUsers = DataComponent(
  PeopleList,
  "https://randomuser.me/api?results=10"
  )

ReactDom.render(
  <RandomMeUsers />,
  document.getElementById('root')
)
```

## Alternative State Initialization

we can initialize `state` directly in Class instead of inside constructor. [Babel](https://babeljs.io/repl) product the same output after processing.

```js
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
}

// equivalent of

class App extends React.Component {
  state = { loading: true };
}
```

## Redux vs Context API

- Redux:
  - Distributes data to various components
  - Centralizes data in a store
  - Provides mechanism for changing data in the store
- Context:
  - Distributes data to various components

## LifeCycle Methods

```js
// Mounting Life Cycles
constructor() {
  // before component is mounted
}
getDerivedStateFromProps() {
  // invoked right after component is constructed
}
render() {
  // when first mounted
}
componentDidMount() {
  // right after component is mounted
}

// Updating Life Cycles
getDerivedStateFromProps() {
  // invoked right after component is receives new props
}
shouldComponentUpdate() {
  // if this returns false, then render() and componentDidUpdate() won't be called
}
render() {
  // when data changes
}
getSnapshotBefore() {
  // right before most recently rendered output is rendered
}
componentDidUpdate() {
  // invoked right after update
}

// Unmounting Life Cycle
componentWillUnmount() {
  // invoked right before a component is unmounted
}
```

## Refs and the DOM

Refs provide a way to access DOM nodes or React elements created in the render method.

#### When to Use Refs

- Managing focus, text selection, content length or, media playback
- Triggering imperative animations
- Integrating with third-party DOM libraries

Avoid using refs for anything that can be done declaratively, e.g. instead of exposing `oepn()` and `close()` methods on a `Dialog` component, pass an `isOpen` prop to it.

### Creating Refs

Refs are created using `React.createRef()` and attached to React elements via the `ref` attribute. Refs are commonly assigned to an instance property when a component is constructed so they can be referenced throughout the component.

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
```

### Accessing Refs

When a ref is passed to an element in `render`, a reference to the node becomes accessible at the `current` attribute of the ref.

```js
const node = this.myRef.current;
```

The value of the ref depending on the type of the node:

- When the `ref` attribute is used on an HTML element, the `ref` created in the constructor with `React.createRef()` receives the underlying DOM elements as its `current` property.

- When the ref attribute is used on a custom class component, the ref object receives the mounted instance of the component as its current.

- **You may not use the ref attribute on function components** because they don’t have instances.

### Use Callback on Image Load with Ref

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    this.imageRef.current.addEventListener('load');
  }
  render() {
    const { description, url } = this.props.image;
    return (
      <div>
        <img ref={this.imageRef} alt={description} src={urls.regular}>
      </div>
    )
  }
}
```

## React Route

#### Familiar with Various React Router Libraries

1. `react-router`: Core navigation lib - we don't install this manually
2. `raect-router-dom`: Navigation for dom-based apps
3. `react-router-native`: Navigation for react-native apps
4. `react-router-redux`: Bindings between Redux and React Router

#### How to Not Navigation with React Router

Bad Navigation:

1. We add `<a/>` tag to our application with `href="/pagetwo"` and click it
2. Our browser makesa request to localhost:3000
3. Development server responds with `index.html` file
4. Browser receives `index.html` file, dumps old HTML file it was showing (including all of our React/Redux state data!)
5. `index.html` file lists our JS files in script tags - browser downloads and executes these scripts
6. Our app starts up

#### 3 Types of Router

1. `Browser Router`: Uses everything after the TLD (.com, .net) or port as the `path`. e.g. localhost:3000/pagetwo
2. `Hash Router`: Uses everything after a # as the `path`. e.g. `localhost:3000/#/pagetwo`
3. `Memory Router`: Doesn't use the URL to track navigation. e.g. `localhost:3000/`

## React Portals

Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

```js
ReactDOM.createPortal(child, chontainer);

// the first argument `child` is any renderable React child, such as an element, string or fragment. The second argument `container` is a DOM element
```

#### Usage of Portals

Normally, when we return an element from a component’s render method, it’s mounted into the DOM as a child of the nearest parent node:

```js
render() {
  // React mounts a new div and renders the children into it
  return (
    <div>
      {this.props.children}
    </div>
  );
}
```

However, sometimes it’s useful to insert a child into a different location in the DOM:

```js
render() {
  // React does *not* create a new div. It renders the children into `domNode`.
  // `domNode` is any valid DOM node, regardless of its location in the DOM.
  return ReactDOM.createPortal(
    this.props.children,
    domNode
  );
}
```

A typical use case for portals is when a parent component has an **overflow: hidden** or **z-index** style, but you need the child to visually “break out” of its container. For example, `modal dialogs`, `hovercards`, and `tooltips`.

**Note:** When working with portals, remember that managing keyboard focus becomes very important.

[Ref](https://reactjs.org/docs/portals.html)

## Performance

One way is to use `react-addons-perf` add ons to check different criterias:

```js
import Perf from 'react-addons-perf'; // ES6

// need for server-side-rendering
if (typeof window !== 'undefined') {
  window.Perf = Perf;
}

componentDidMount() {
  setImmediate(() => {
    Perf.start();
  });

  setTimeout(() => {
    Perf.stop();
    Perf.printWasted();
  }, 5000)
}
```

### What are the Tricks We Can Use to Optimize React App?

- Update lifecycle methods
  - shouldComponentUpdate
- PureComponent
- Chrome's Performance Tab
  - react_perf in url query
- React Perf's Addon
  - Perf.start(), Perf.stop()
  - Perf.printWasted()
- Subscribe to partial state
- Immutable data

## Miscellaneous

### React vs ReactDOM

- `React:` responsible for creating react elements (kinda like document.createElement())

  ```js
    const elementProps = {id: 'element-id', children: 'Hello world!'}
    const elementType = 'h1';
    const reactElement = React.createElement(elementType, elementProps);
  ```
- `ReactDOM:` responsible for render react elements to the DOM (kinda like rootElement.append())

  ```js
  ReactDOM.render(reactElement, rootElement);
  ```
