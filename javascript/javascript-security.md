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

Tips: avoid unsafe functions, validate input always. Sanitize data passed to interpreters.

## What could be the Cautions to Use NPM Libraries or, Third-party Code?

Third party packages may be prone to code injection. So, validate input data before passing them to libraries. External packages need to be audited for use of unsafe functions.

## Polluting the Object Prototype

```js
const user = { name: 'Sajib Khan' }; // regular user

const malicious = { isAdmin: true }; // isAdmin is true for administrators only

user['__proto__'] = malicious; // pollution

console.log(user.isAdmin); // true. Escalation of privilege
```

Solutions:
----------

- Validate JSON schema
- Freeze the prototype
  - `Object.freeze`
- Create objects without `prototype`
  - Object.create(null, ...)
- Use `Map` instead of {}

## Popular Security Testing Tools for JavaScript

SAST (Static Application Security Testing)
  - ESLint
  - GitHub code scanning and LGTM
  - semgrep

OWASP ZAP
  - Many commercial alternatives

Dependency management
  - npm audit
  - Retire.js
  - Dependency-Track
  - Snyk