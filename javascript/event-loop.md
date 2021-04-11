#### Understanding Asynchronous JavaScript — the Event Loop

- Heap -> Memory allocation
- Stack -> execution contexts
- Browser, web api
- callback queue
- Event Loop

[Philip Roberts Video](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

#### Example 1:

```js
function main() {
  console.log('A');
  setTimeout(() => {
    console.log('B');
  }, 1000); // first 1000, then try with 0 sec
  console.log('C');
}
main();
//	Output
//	A
//	C
//  B
```

[Ref](https://medium.com/front-end-hacking/javascript-event-loop-explained-4cd26af121d4)

#### Example 2:

```js
function main() {
  console.log('A');
  setTimeout(function exec() {
    console.log('B');
  }, 0);
  runWhileLoopForNSeconds(3);
  console.log('C');
}
main();
function runWhileLoopForNSeconds(sec) {
  let start = Date.now(),
    now = start;
  while (now - start < sec * 1000) {
    now = Date.now();
  }
}
// Output
// A
// C
```

#### Example 3: Callback hell

```js
doA(() => {           |   first(() => {
  doB();              |     third();
  doC(() => {         |     fourth(() => {
    doD()             |       sixth();
  });                 |     });
  doE();              |     fifth()
});                   |   })
doF();                |   second();
```

[Event loop in MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)

#### What is the output of the following code?

```js
function display(data) {
  console.log(data);
}

function printHello() {
  console.log('Hello');
}

function blockFor3000ms() {
  // blocks js thread for 300ms
}

setTimeout(printHello, 0);

const futureData = fetch('https://twitter.com/will/tweets/1'); // response is 'Hi'
futureData.then(display);

blockFor300ms();

console.log('I am good!');
```

## output sequence:

'I am good', 'Hi, 'Hello' instead of 'I am good', 'Hello', 'Hi'

since there is a two callback queue: MicroTask Queue and Callback Queue. Promise goes to microTask queue. When callStack is empty the event loop check microTask queue first then check callBack Queue!