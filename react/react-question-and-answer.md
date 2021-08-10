#### How to Prevent Components from `re-rendering`?

Here are 3 ways to prevent component `re-rendering:

1. `shouldComponentUpdate()` -- returns `true` by default. We can `return false` from this lifecycle methods to prevent component re-rendering

2. `PureComponents` -- The difference between them is that `React.Component` doesn't implement `shouldComponentUpdate` method but `React.PureComponent` implements it with a `shallow prop and state` comparison

3. `React.memo` -- The same as the `PureComponent` but it works with functional components

#### When to Use Component instead of PureComponent?

We use `PureComponents` in `99%` of cases in modern React. However, if we are working with `Redux` selectors, often we will need to explicitly specify the incoming prop changes to cancel the impending re-render to prevent UI thrashing. In this case, it’s appropriate to use a Component.

#### What is the `render props`?

When a component takes a function that returns a React element and calls it instead of implementing its own render logic.

It's another technique for sharing code between React components:

```js
<DataProvider render={(data) => <h1>Hello {data.target}</h1>} />
```

#### React Unit Tests vs Integration Tests for Components

`React testing library` provides a clean and simple API which focuses on testing applications “as a user would”. This means an API returns `HTML` Elements rather than React Components with shallow rendering in Enzyme. It’s is a nice tool for writing integrational tests.

`Enzyme` is still a valid tool, it provides a more sophisticated API which gives us access to component’s props and internal state. It makes sense to create `unit tests`for components.

#### Migration from Class to Function Component

Follow the steps:

1. Class component state with useState hook
2. Class component lifecycle methods with useEffect hook
3. Bonus points: better abstraction with custom hooks

Class Components:

```js
class App extends React.Component {
  state = {
    value: localStorage.getItem('info') || '',
  };
  componentDidUpdate() {
    localStorage.setItem('info', this.state.value);
  }
  onChange = (event) => {
    this.setState({ value: event.target.value });
  };
  render() {
    const { value } = this.state;
    return (
      <div>
        <input value={value} type="text" onChange={this.onChange} />
        <p>{value}</p>
      </div>
    );
  }
}
```

Migration to Functional Component:

```js
const App = () => {
  const val = localStorage.getItem('info') || '';
  const [value, setValue] = useState(val);
  const onChange = (event) => setValue(event.target.value);
  useEffect(() => localStorage.setItem('info', value), [value]);

  return (
    <div>
      <input value={value} type="text" onChange={onChange} />
      <p>{value}</p>
    </div>
  );
};
```

#### What can we do using "useEffect" comparative to Class component?

```js
useEffect( () => console.log("mount"), [] );
useEffect( () => console.log("will update data1"), [ data1 ] );
useEffect( () => console.log("will update any") );
useEffect( () => () => console.log("will update data1 or unmount"), [ data1 ] );
useEffect( () => () => console.log("unmount"), [] );
```

#### How to force a component `re-mount` when click on the same route?

One way is to force a component to re-mount is to change the `key` prop:

```js
<Route
  path="/about"
  render={(props) => <About key={Date.now()} {...props} />}
/>
```

#### How Can We `Memorize` React Component?

We can use `React.memo` (react > v16.6.0) to memorize a component:

```js
const UserDetails = ({user, onedit}) => {
  const {title, fullName, profileImg} = user;

  return (
    <div className="user-details-wrapper">
      <img src={profileImg}>
      <h4>{fullName}</h4>
      <p>{title}</p>
    </div>
  )
}

export default `React.memo(UserDetails)`;
```

#### How to autofocus an input element programmatically?

```js
<input ref={(input) => input && input.focus()} />
```

#### How to Block or, allow Navigation in React Component?

The router context's `history` object also has a _block_ function but it works a little differently. It takes a callback that consumes `location` and `action` arguments.

```js
history.block((location, action) => {...});
```

Example:

```js
// functional component
React.useEffect(() => {
  this.unblock = history.block((targetLocation, action) => {
    if (blockNavigating) {
      return false;
    }

  // allow navigating
  return true;
}, [])

// class component
componentDidMount() {
    this.unblock = history.block((targetLocation, action) => {
    if (blockNavigating) {
      return false;
    }

  // allow navigating
  return true;
}
```

Another way to block navigation using `Prompt` (react-router, v4), e,g.

```js
import { Prompt } from 'react-router'

const MyComponent = () => (
  <>
    <Prompt
      when={shouldBlockNavigation}
      message='You have unsaved changes, are you sure you want to leave?'
    />
    {/* Component JSX */}
  </>
)

```
