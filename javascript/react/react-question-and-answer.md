#### How to Prevent Components fron `re-rendering`?

Here are 3 ways to prevent component `re-rendering:

1. `shouldComponentUpdate()` -- returns `true` by default. We can `return false` from this lifecycle methods to prevent component re-rendering

2. `PureComponents` -- The difference between them is that `React.Component` doesn't implement `shouldComponentUpdate` method but `React.PureComponent` implements it with a `shallow prop and state` comparison

3. `React.memo` -- The same as the `PureComponent` but it works with functional components

#### When to Use Component instead of PureComponent?

We use `PureComponents` in `99%` of cases in modern React. However, if we are working with `Redux` selectors, often we will need to explicitly specify the incoming prop changes to cancel the impending re-render to prevent UI thrashing. In this case, it’s appropriate to use a Component