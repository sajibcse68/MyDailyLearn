## Redux Saga

- `Redux-saga` is a library that aims to make handling side effects (i.e. asynchronous things like data fetching) in React/Redux applications easier & better.
- It is a redux `middleware` and more sophisticated than `redux-thunk`
- A saga is like a `separate thread` in our application that's solely responsible for side effect
- Generators are used to make our `async` code look more synchronous making it easier to read, write, & text
- Manages side effects
- Depends on **ES6** and **Yield**
- Consumes and emits actions
- Works without Redux!

#### Why Redux Saga?

- Ideal for common real-world applications
- Large, growing and contributing user base
- Works on both client and server

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

## Effect Creators

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

## Redux-saga Advantages

- Synchronous looking code with an easy to follow step by step
- Can allow for fairly complicated flows
- Easy to write tests with little to no mocking
- Sagas are composable
- Action-Creators are pure
- Isolates side-effect code to a single area of the application
- Many helper functions & solid documentation
