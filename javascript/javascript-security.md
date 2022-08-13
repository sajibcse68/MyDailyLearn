## Is JavaScript code running in the browser restricted, how?

Yes!

- No local resources: no direct access to devices, files, and local network
- Only browser APIs: limited access to resources allowed by the user
- Same origin only: code and data from different sites cannot interact


## What are the JavaScript Security Pitfalls

- Dynamic type system: abusing conversions and comparisons
- Dynamic code execution: interpreting untrusted data as code
- Prototypal inheritance: modifying behaviour of child objects

Dynamic nature of JavaScript can lead to security bugs!

## What are the Dynamic Type System Pitfalls

- Automatic conversions: unexpected code may be executed
- Loose comparisons: security checks may be bypassed

Always "use strict" mode!

## What are the JavaScript Unsafe Functions

1.  `eval`: e.g. eval(code)
2.  `Function Constructor:` e.g.
    ```js
        f = new Function('param', code);
        f('argument');
    ```

