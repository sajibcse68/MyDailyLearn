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

#### Use `Default Props`

Default props allows us to spefify what a prop value should be if no value is explicitly provided.

```js
MyComponent.defaultProps = {
  location: "San Francisco"
}
```

React assigns default props if props are `undefined`, but if we pass `null` as the value for a prop, if will remain `null`.

#### Use `PropTypes` to Define the Props We Expect

It's considered a best practice to set `propTypes` when we know the type of a prop ahead of time. We can define a `propTypes` property for a component in the same way we defined `defaultProps`.

```js
MyComponent.propTypes = {
  handleClick: PropTypes.func.isRequired
}
```

Here, `PropTypes.func` part checks that `handleClick` is a function. Adding `isRequired` tells React that `handleClick` is s required property for that component.

Among the `seven` JavaScript Primitive types, `function` and `boolean` (written as `bool`) are the only two hat use unusual spelling.

Note: React `v15.5.0`, `PropTypes` is imported independently from React, like this:

```js
import React, { PropTypes } from "react";
```

## Understanding React `setState`

`setState()` is the only legitimate way to update state after the initial state setup.

Key Notes:

- Update to a component state should be done using `setState()`
- We can pass **object** or **function** to `setState()`
- We have to pass `function` when we need to update state multiple times
- Do not depend on `this.state` immediately after calling `setState()` since it is Asynchronous. Use `Callback`.

#### Update a State Property

we can pass an object as arguments of `setState()`.

```js
import React, { Component } from 'react'

class Search extends Component {
  constructor(props) {
    super(props)

    state = {
      searchTerm: ''
    }
  }

  updateState = (event) => {
    // update searchTerm, say this function is called from UI
    setState({
      searchTerm: event.target.value
    });
  }
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
)
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
this.setState( prevState => {
  // prevState is the current state
  return { count: prevState + 1 }
})
```

#### Stateless Functional Component, Stateless Component and Stateful component

- `A stateless functional component` is any function we write which accepts `props` and return `JSX`

- `A stateless component` is a class that extends `React.Component`, but does not use internal state.

- `A state`ful component` is any component that does maintain its own internal state. We may see stateful component referred to simply as `components` or `React components`.

[Reference](https://css-tricks.com/understanding-react-setstate/)

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

#### Uncontrolled Components

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

#### React Fragment

we can use `React.Fragment` instead of using any extra `div` or `section`, etc.

```js
const NavItems = () =>
  <React.Fragment>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/services">Services</a>
    <a href="/contact">Contact</a>
  </React.Fragment>
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

## Understand Context API

```js
const Context = React.createContext();

class Provider extends React.Component {
  state = {
    name: 'Sajib Khan'
  }
  render() {
    return (
      <Context.Provider value={{ state: this.state }}>
        { this.props.children }
      </Context.Provider>
    )
  }
}

const Trail = props => {
  <div>
    <Context.consumer>
      {(context) => (
        <p>This is the context: {context.state.name}</p>
      )}
    </Context.consumer>
  </div>
}

const Lift = props => (
  <div>
    <Trail />
  </div>
)

class Resort extends React.Component {
  render() {
    return (
      <Provider>
        <div>
          <Lift />
        </div>
      </Provider>
    )
  }
}
```

#### Referencing Context in Stateless Functional Components

```js
const Context = React.createContext();

class Provider extends React.Component {
  state = {
    name: 'Sajib Khan',
    status: 'OPEN'
  }
  render() {
    return (
      <Context.Provider
        value={{ state: this.state,
        changeStatus: () => this.setState({
          status: 'CLOSED'
        })
      }}>
        { this.props.children }
      </Context.Provider>
    )
  }
}

const Trail = props => {
  <div>
    <Context.consumer>
      {(context) => (
        <div>
          <p>This is the context: {context.state.name}</p>
          <p>The resort is: { context.state.status }</p>
          <button onClick={context.changeStatus}>Close Resort</button>
        </div>
        
      )}
    </Context.consumer>
  </div>
}

const Lift = props => (
  <div>
    <Trail />
  </div>
)

class Resort extends React.Component {
  render() {
    return (
      <Provider>
        <div>
          <Lift />
        </div>
      </Provider>
    )
  }
}
```

#### Higher Order Components

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

#### LifeCycle Hooks or Methods

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
