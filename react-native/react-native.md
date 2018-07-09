### Basic Commands

```
# run the project
$ react-native start

# run the project in android simulator, e.g. Android Studio -> AVD
$ react-native run-android

# run the project in ios, e.g. XCode
$ react-native run-ios

# install and run react-devtools
$ npm i -g react-devtools
$ react-devtools

# see the console.log() in terminal
$ react-native log-android
```

### Debugging

- [React-native-debugger](https://github.com/jhen0409/react-native-debugger/blob/master/docs/getting-started.md)
- Cmd + M | Enable remote JS Debugging (url: localhost:8081/debugger-ui)
- $ react-native log-android (see console output in terminal)


```
# Run react-native-debugger
$ open "rndebugger://set-debugger-loc?host=localhost&port=8081"
```

## Lifecycle API

Components have a lifecycle: they are `instantiated`, `rendered`, `undated`, `unmounted`, and `destroyed`.

### Mounting Cycle

- `constructor(object props):` The component class is instantiated. The parameters to the constructor are the element's initial `props`, as specified by the parent element. We can optionally specify and initial state for the element by assigning an object to `this.state`. At this point, no native UI is rendered yet for this element.

- `componentWillMount():` This method is invoked only once, before rendering occurs for the first time. At this point, there is still no native UI rendered for this element.

- `render() -> React Element:` The render method must return a React Element to render(or null, to render nothing)

- `componentDidMount():` This method is invoked only once, after rendering occurs for the first time. At this point, the native UI for this element has finished rendering, and may be accessed through `this.refs` for direct manipulation. If we need to make `async API calls` or execute delayed code with `setTimeout`, that should be done is this method.

### Updating Cycle

- `componentWillReceiveProps(object nextProps):` The parent of this component has passed a new set of `props`. This component will re-render. You may optionally call `this.setState()` to update this component's internal state before the `render` method is called.

- `shouldComponentUpdate(object nextProps, object nextState) -> boolean:` Based on the next values of `props` and `state`, a component may decide to re-render or not to re-render. The base class's implementation of this method always returns `true` (the component should re-render). For optimization, override this method and check if either `props` or `state` have been modified, e.g. run an equality test of each key/value in these objects. Returning `false` will prevent the `render` method from being called.

- `componWillUpdate(object nextProps, object nextState):` This method is invoked, after the decision has been made to re-render. We may not call `this.setState()` here, since and update is already in process.

- `render() -> React Element:` This method is called, assuming `shouldComponentUpdate` returned `true`. The render method must return a React Element to render (or null, to render nothing).

- `componentDidMount(object prevProps, object prevState):` This method is invoked after re-rendering occurs. At this point, the native UI for this component has been updated to reflect the React Element returned from the `render()` method.


### Solve various errors:

- ERROR: /bin/sh: adb: command not found
  - export PATH="/Users/sajib/Library/Android/sdk/platform-tools/:$PATH"