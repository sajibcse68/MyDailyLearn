## Mocha Features:
    - Feature Rich
    - Runs on node.js + the browser
    - supports BDD(Behavior-Driven Development), TDD(Test-Driven Development)
    - Supports Async and Promise
    - Growl notifications
    - Highlights slow tests
    - File watcher supports
    - Choose any assertion library
    - Choose any Mocking library
    - Optionally run tests that match a regexp

## Chai Features:
    - BDD / TDD
    - For node + the browser
    - Three assertions style
        - should - foo.should.be.a('string')
        - expect - expect(foo).to.be.a('string')
        - assert - assert.typeOf(foo, 'string')
        
#### Setup
    - Expects tests to be in <project_root>/test
    - Allows of per project options file:
        - mocha.opts
    - To run test:
        - mocha
#### Hooks
    - before()
    - after()
    - beforeEach()
    - afterEach()
#### Modifying Test Cases
    - Pending tests - no callback
    - Exclusive tests - append .only
    - Inclusive tests - append .skip
#### Other features
    - mocha --reports
    - mocha --watch
    - mocha --growl
    - mocha --compilers
    - Interface supports for: TDD, BDD + QUnit
#### Example Test
```
// first test
describe('Array', function() {
    describe('#indexOf()', function() {
      [1,2,3].indexOf(5).should.equal(-1);
      [1,2,3].indexOf(0).should.equal(-1);
    })
})
```
