### How do we extract MyFunc Return from myFunc?

```js
const myFunc = () => {
  return 'hello';
}

// answer
type MyFuncReturn = ReturnType<typeof myFunc>;
```

### Get function parameters

```js
const makeQuery = (url: string,
opts?: {
  method: string;
  headers?: {
    [key: string]: string;
  };
  body?: string;
},
) => {}

// answer
type MakeQueryParams = Parameters<typeof makeQuery>;
type secondArgs = MakeQueryParams[1]; // get second argument of the function
```

### Get `Awaited` function's return type

```js
const getUser = () => {
  return Promise.resolve({
    id: '123',
    name: 'John',
    email: 'john@gmail.com',
  });
};

// answer
type ReturnValue = Awaited<ReturnType<typeof getUser>>;
```

### Create union from object keys

```js
const testingFrameworks = {
  vitest: {
    label: 'Vitest',
  },
  jest: {
    label: 'Jest',
  },
  mocha: {
    label: 'Mocha',
  }
};

// answer
type TestingFrameworksKeys = keyof typeof testingFrameworks; // 'vitest' | 'jest' | 'mocha'
```

### Extract members of a Discriminated Union

```js
export type Event = 
  | {
      type: 'click';
      event: MouseEvent;
    }
  | {
      type: 'focus';
      event: FocusEvent;
    }
  | {
      type: 'keydown';
      event: KeyboardEvent;
    }

// answer
  type ClickEvent = Extract<Event, { type: 'click' }>; // { type: 'click'; event: MouseEvent; }

type Fruit = 'apple' | 'banana' | 'orange';
type AppleOrBanana = Extract<Fruit, 'apple' | 'banana'>; // 'apple' | 'banana'
```

### Exclude members from a Discriminated Union

```js
export type Event = 
  | {
      type: 'click';
      event: MouseEvent;
    }
  | {
      type: 'focus';
      event: FocusEvent;
    }
  | {
      type: 'keydown';
      event: KeyboardEvent;
    }

// answer
  type ClickEvent = Exclude<Event, { type: 'keydown' }>;

  /**
   * | { type: 'click'; event: MouseEvent; }
   * | { type: 'focus'; event: FocusEvent; }
  */ 
```

### Use the Annotation to infer and Objects Values as Literal Types

```js
export const programModeEnumMap = {
  GROUP: 'group',
  ANNOUNCEMENT: 'announcement',
  ONE_ON_ONE: '1on1',
  SELF_DIRECTED: 'selfDirected',
}

// answer
export const programModeEnumMap = {
  GROUP: 'group',
  ANNOUNCEMENT: 'announcement',
  ONE_ON_ONE: '1on1',
  SELF_DIRECTED: 'selfDirected',
} as const;
// see the `as const`, it makes it readonly


type GroupProgram = typeof programModeEnumMap['GROUP']; // 'group'
type AnnouncementProgram = typeof programModeEnumMap['ANNOUNCEMENT']; // 'announcement'
type OneOnOneProgram = typeof programModeEnumMap['ONE_ON_ONE']; // '1on1'
type SelfDirectedProgram = typeof programModeEnumMap['SELF_DIRECTED']; // 'selfDirected'
```

