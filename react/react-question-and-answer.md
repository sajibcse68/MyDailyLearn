#### How to Prevent Components from `re-rendering`?

Here are 3 ways to prevent component `re-rendering:

1. `shouldComponentUpdate()` -- returns `true` by default. We can `return false` from this lifecycle methods to prevent component re-rendering

2. `PureComponents` -- The difference between them is that `React.Component` doesn't implement `shouldComponentUpdate` method but `React.PureComponent` implements it with a `shallow prop and state` comparison

3. `React.memo` -- The same as the `PureComponent` but it works with functional components

#### When to Use Component instead of PureComponent?

We use `PureComponents` in `99%` of cases in modern React. However, if we are working with `Redux` selectors, often we will need to explicitly specify the incoming prop changes to cancel the impending re-render to prevent UI thrashing. In this case, it’s appropriate to use a Component.

#### How can we avoid Props Drilling in React?

We can avoid props drilling by using:

1. Higher Order Component (HOC)
2. Render Props

#### What is the Render Props?

When a component takes a function that returns a React element and calls it instead of implementing its own render logic.

It's another technique for sharing code between React components:

```js
<DataProvider render={(data) => <h1>Hello {data.target}</h1>} />;
// inside DataProvider.jsx -> return props.render();

Or, (<DataProvider>{(data) => <h1>Hello {data.target}</h1>}</DataProvider>);
// inside DataProvider.jsx -> return props.children();
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
useEffect(() => console.log('mount'), []);
useEffect(() => console.log('will update data1'), [data1]);
useEffect(() => console.log('will update any'));
useEffect(() => () => console.log('will update data1 or unmount'), [data1]);
useEffect(() => () => console.log('unmount'), []);
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

export default React.memo(UserDetails);
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
import { Prompt } from 'react-router';

const MyComponent = () => (
  <>
    <Prompt
      when={shouldBlockNavigation}
      message="You have unsaved changes, are you sure you want to leave?"
    />
    {/* Component JSX */}
  </>
);
```

#### Imperative vs Declarative Programming

"Imperative programming is `how` you do something, and declarative programming is more like `what` you do."

Let's try to explain imperative and declarative programming with example:

##### Example 1: You and your husband have gone to a restaurant.

- Imperative: I see that table located under the Gone Fishin' sign is empty. My husband and I are going to walk over there and sit down.

- Declarative: Table for two, please

Explanation: The imperative approach is concerned with `how` you're actually going to get a seat. You need to list out the steps, to be able to show `how` you're going to get a table. The declarative approach is more concerned with `what` you want, a table for two.

##### Example 2: I'm right next to Wal-Mart. How do I get to your house from here?

- Imperative: Go out of the north exit of the parking lot and take a left. Get on I-15 going North until you get to the 12th street exit. Take a right off the exit like you’re going to Ikea. Go straight and take a right at the first light. Continue through the next light then take your next left. My house is #298.

- Declarative: My address is 298 West Immutable Alley, Eden, Utah 84310

Explanation: Regardless of how I get to your house, what really matters is the car I drive. Am I going to drive an imperative stick shift car or a declarative automatic car?

##### Coding Examples:

```js
/**
 * 1. Write a function called double which takes in an array of numbers and returns a new array after doubling
 * every item in that array – double([1,2,3]) // [2,4,6].
 */

// Imperative
function double(arr) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    results.push(arr[i] * 2);
  }
  return results;
}


// Declarative
function double(arr) {
  return arr.map((item) => item * 2);
}

/**
 * 2. Write a function called add which takes in an array and returns the result of adding up every
 * item in the array – add([1,2,3]) // 6
 */

// Imperative
function add(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

// Declarative

function add(arr) {
  return arr.reduce((prev, current) => prev + current, 0);
}

/**
 * 3. Add a click event handler to the element which has an id of btn. When clicked, toggle (add or remove)
 * the highlight class as well as change the text to Add Highlight or Remove Highlight depending
 * on the current state of the element
 */

// Imperative

$("#btn").click(function () {
  $(this).toggleClass("highlight");
  $(this).text() === "Add Highlight"
    ? $(this).text("Remove Highlight")
    : $(this).text("Add Highlight");
});

// Declarative

<Btn
  onToggleHighlight={handleToggle}
  highlight={highlight}>
    {buttonText}
</Btn>

```