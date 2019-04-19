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

#### Use `PropTypes` to Define the Props we expect

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

`setState()` si the only legitimate way to update state after the initial state setup.

#### Update a state property

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


#### Stateless Functional Component, Stateless Component and Stateful component

- `A stateless functional component` is any function we write which accepts `props` and return `JSX`

- `A stateless component` is a class that extends `React.Component`, but does not use internal state.

- `A stateful component` is any component that does maintain its own internal state. We may see stateful component referred to simply as `components` or `React components`.


#### LifeCycle Hooks or Methods

- The `ComponentWillMount()` method is called before the `render()` method when a component is being mounted to the DOM.
- The `ComponentDidMounted()` is called after a component is mounted to the DOM. Any calls to `setState()` will trigger a re-rendering of the component.
- The `ComponentWillReceiveProps()` is called whenever a component is receiving new props.
