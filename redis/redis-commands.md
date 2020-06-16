## Redis with Node.js

- Install Redis
- Use Redis as a standalone tool
- Build Node.js applications that interact with Redis

## Basic Commands

### Add an Element to a List

`rpush`:

```js
const Redis = require('ioredis');

const redis = new Redis();

async function main() {
  const key = 'veggies';
  const vegetable = 'tomato';
  try {
    const result = await redis.rpush(key, vegetable);
    // number of items in the list
    console.log(result);
  } catch (error) {
    console.error(error);
  }
  redis.disconnect();
}

main();
```

### Add Multiple Elements to a List

`rpush` with JavaScript Spread Syntax:

```js
const Redis = require('ioredis');

const redis = new Redis();

async function main() {
  const key = 'veggies';
  const veggies = ['tomato', 'corn', 'eggplant'];
  try {
    const result = await redis.rpush(key, ...veggies);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
  redis.disconnect();
}

main();
```

### Remove an Element from a List

`rpop`:

```js
const Redis = require('ioredis');

const redis = new Redis();

async function main() {
  const key = 'veggies';
  try {
    const veggie = await redis.rpop(key);
    // removes and returns last element
    console.log(veggie);
  } catch (error) {
    console.error(error);
  }
  redis.disconnect();
}

main();
```

### Return all Elements in a List

`lrange` command to return a JavaScript array of elements from a list:

```js
const Redis = require('ioredis');

const redis = new Redis();

async function main() {
  const key = 'veggies';
  try {
    const veggies = await redis.lrange(key, 0, -1);
    veggies.forEach((v) => console.log(v));
  } catch (error) {
    console.error(error);
  }
  redis.disconnect();
}

main();
```
