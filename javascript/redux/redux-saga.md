## Redux Saga

- `Redux-sata` is a library that aims to make handling side effects (i.e. asynchronous things like data fetching) in React/Redux applications easier & better.
- A saga is like a `separate thread` in our application that's solely responsible for side effect
- Generators are used to make our `async` code look more synchronous making it wasier to read, write, & text

## Saga Helpers

1. `takeEvery --` takes every matching action and runs the instructed saga, can run concurrent tasks

```js
function* watchAction() {
  yield takeEvery('ACTION', workerSagaToRun);
}
```

2. `takeLates --` takes every matching action and runs the instructed saga bu `chancels any previous saga task` if it is still running

```js
function* watchLastAction( {
  yield takeLatest('ACTION', workerSagaToRun);
})
```
