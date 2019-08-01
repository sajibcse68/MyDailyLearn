#### How to Prevent Components fron `re-rendering`?

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
<DataProvider render={data => (
  <h1>Hello {data.target}</h1>
)}/>
```

#### React unit tests vs integration tests for commponents

`React testing library` provides a clean and simple API which focuses on testing applications “as a user would”. This means an API returns `HTML` Elements rather than React Components with shallow rendering in Enzyme. It’s is a nice tool for writing integrational tests.

`Enzyme` is still a valid tool, it provides a more sophisticated API which gives us access to component’s props and internal state. It makes sense to create `unit tests`for components.

#### Migration from Class to Function Components

Follow the steps:

1. Class component state with useState hook
2. Class component lifecycle methods with useEffect hook
3. Bonus points: better abstraction with custom hooks

Class Components:

```js
class App extends React.Component {
  state = {
    value: localStorage.getItem("info") || ""
  };
  componentDidUpdate() {
    localStorage.setItem("info", this.state.value);
  }
  onChange = event => {
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
  const val = localStorage.getItem("info") || "";
  const [value, setValue] = useState(val);
  const onChange = event => setValue(event.target.value);
  useEffect(() => localStorage.setItem("info", value), [value]);

  return (
    <div>
      <input value={value} type="text" onChange={onChange} />
      <p>{value}</p>
    </div>
  );
};
```