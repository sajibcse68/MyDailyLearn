## Redux Saga

- `Redux-saga` is a library that aims to make handling side effects (i.e. asynchronous things like data fetching) in React/Redux applications easier & better.
- It is a redux `middleware` and more sophisticated than `redux-thunk`
- A saga is like a `separate thread` in our application that's solely responsible for side effect
- Generators are used to make our `async` code look more synchronous making it easier to read, write, & text
- Manages side effects
- Depends on **ES6** and **Yield**
- Consumes and emits actions
- Works without Redux!

### Why Redux Saga?

- Ideal for common real-world applications
- Facilitates side-effects (API calls, database transactions) in Redux application
- Advanced tools (forking processes, yielding thread) cover almost all real-world use cases
- Large, growing and contributing user base
- Works on both client and server

### Sagas (in Functional Programming)

- Series of reversible transactions
- Replaces single, locking transaction
- Uses a process manager to manage sub-process

### Sagas (in Redux)

- A long-running background process
- Responsible for application's side effects
- Used in conjunction with `ES6 Yield`
- Redux saga is the process manager
- Functionality: listens for actions, `dispatches other actions` (using effects)
- Interact with `external APIs` or modify system files (using request, fs, or other)

### Redux Saga vs Redux Thunk

- Redux Saga
  - Common Redux middleware
  - Created by third party developer
  - Only runs in ES6 environments that support Yield
  - Uses `yield` and `generator` functions to simplify async
  - Uses effects and plain actions to coordinate sagas
- Redux Thunk
  - Common Redux middleware
  - Created by Redux creator
  - Runs in any JavaScript context
  - Has no built-in solution for asynchronous calls
  - No way to orchestrate side-effects between thunks
  

## Saga Helpers

1. `takeEvery --` takes every matching action and runs the instructed saga, can run concurrent tasks

```js
function* watchAction() {
  yield takeEvery('ACTION', workerSagaToRun);
}
```

2. `takeLates --` takes every matching action and runs the instructed saga but `chancels any previous saga task` if it is still running

```js
function* watchLastAction( {
  yield takeLatest('ACTION', workerSagaToRun);
})
```

## Redux Saga Effects

- Utility method provided by Redux Saga
- Returns an object containing instructions for Redux Saga
- Redux Saga generates the side effects, not the effect itself

### Effect Creators

- Effects create a plain objects - Redux saga interprets them and executes processes
- Each effect creator returns a plain javascript object and does not perform any execution
- The execution is performed by the middleware during the iteration process
- The middleware examines each Effect description and performs the appropriate action
- `Take`, `TakeEvery` and `TakeLatest` wait for a specific kind of action to create a new process
- `Call`, `Fork`, and `Spawn` create a different kinds of processes
- Forked processes are cancelled when their parent is cancelled or errors
- `Take` and `Call` pause the execution of caller process

`call --` runs a function, if it returns a promise, pauses the saga until the promise is resolved
`put --` dispatches an action

```js
function* effects() {
  let result = yield call(fnToRun, optionalArgsToPassToFn)
  yield put(actionToDispatch(result))
}
```

Others: `fork`, `select`, `race`, `spawn`, `join`, `cancel` 

#### Effect: Take

- Pauses between concurrent lines of code
- Code resumes when `specified action is despatched`
- Only one thread - multiple actions do not lead to multiple responses
- Properties of action are passed as yielded variable

#### Effect: Put

- Immediately dispatches an action to the rest of the app
- Code execution does not pause
- Like calling dispatch in `Redux-Thunk` or React-Redux

#### Effect: Call

- Calls the specified method
- Equivalent to invoking the method directly
- Used for testing

#### Effect: Fork

- Invokes the specified method (like call)
- Can't access yielded variables
- Caller continues without pausing execution
- If parent process errors or is cancelled, all forked processes are cancelled
- Finally block of forked method is invoked during cancellation

#### Effect: TakeEvery

- Works like take, except forks the specified method every time specified action is dispatched
- Code execution resumes immediately in main thread

#### Effect: Cancel

- Stops a forked process
- Stopped process will be cut off at most recent yield
- `finally{}` is invoked in forked process
- Method that returns true if callee process has been cancelled by caller
- Used in finally block to determine if cancellation (not error) is cause of termination

#### Effect: TakeLatest

- Combination of fork, takeEvery, and cancel
- Forks child process each time specified action is dispatched, while keeping exactly on instance of the child process running
- Sequence:

  1. Specified action is dispatched (say, click a button, will do api call)
  2. Child process is forked in response
  3. CHild process runs in own thread
  4. Specified action is dispatched again (click the button again)
  5. Child process is cancelled
  6. Go to step 2

#### Effect: Select

- Returns a copy of the application's state when yielded to
- Any passed selectors are invoked

#### Effect: Spawn

- Creates a new process, similar to fork - caller is not interrupted
- New process is not child of caller - will not be cancelled if caller errors or is itself cancelled


#### Effects: All

- Combines numerous take statements into one
- Code execution resumes when all actions have been dispatched (in any order)


### Redux Saga Effects Nature

- Effects create a plain objects - Redux Saga interprets then and executes processes
- `Take`, `TakeEvery` and `TakeLatest` wait for a specific kind of action to create a new process
- `Call`, `Fork` and `Spawn` create `different` kinds of new processes
- `Forked` processes are cancelled when their `parent is cancelled` or errors
- `Take` and `Call` pause the execution of caller process!

## Channels

### What are Channel

- `Action Channel` create a buffer for actions and to be processed one at a time
- `Event Channel` can emit take-friendly actions from non-promise based outside sources
- `Generic Channel` can allow for communication between two sagas

### Action Channels

- Records all events with specified type
- Calling `take` accesses and removes oldest record
- Used to handle actions that would otherwise be lost

### Generic Channels

- Creates special line of communication between two sagas
- Action types not required

### Event Channels

- Wraps an outside source of events (i.e., WebSocket)
- Sagas can take rom Event Channel
- Event Channel converts events into take able actions and emits them

## Testing Redux Saga Application

- Tests need to avoid making real AJAX calls
- Effects do not do anything unless run by Redux Saga
- Call effect must be used instead of yielding directly to API methods

### Testing: Official/Standard Method (Unit Tests)

- Saga is executed as plain generator
- Tests pass mock values to next()
- Structure of effects is tested against expected values
- Store is never used

### Testing: Alternative Method (End-to-End Tests)

- Mock store and application state are created
- Entire saga is run from beginning to end
- At completion, new state is compared to expected value
- APIs must be injected as dependencies

### Comparison: Official (Unit Test) vs Alternative (End-to-End Test)

- Standard Method (unit test):
  - Requires that call be used for functions
  - Cannot test application state against expected values
  - Outside APIs can be imported with no special considerations
  - Tests are brief and simple to set up
  - Test fails if yielded effects do not match expected values
- Alternative Method (e2e test):
  - Call usage recommended but not required
  - Can test application state against expected values
  - Any outside APIs must be injected as dependencies
  - Tests are complex and require preparation of mock store and PIs
  - Test fails if final application state does not match expected values 

## Redux-saga Advantages

- Synchronous looking code with an easy to follow step by step
- Can allow for fairly complicated flows
- Easy to write tests with little to no mocking
- Sagas are composable
- Action-Creators are pure
- Isolates side-effect code to a single area of the application
- Many helper functions & solid documentation

## References

- [Redux Saga Sandbox](https://github.com/danielstern/redux-saga-sandbox)
