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

- Each effect creator returns a plain javascript object and does not perform any execution
- The execution is performed by the middleware during the iteration process
- The middleware examines each Effect description and performs the appropriate action

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
