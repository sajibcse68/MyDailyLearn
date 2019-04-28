## JavaScript Engine Workflow

Workflow
---

<img src="../images/js-engine-workflow.png" alt="lexical-scope-and-prototypes-chain" width="500px"/>

1. JS file pass through Lexical analysis (Parser)
    - Breaks the code into token
2. Token generates a AST (Abstract Syntax Tree)
    - go to https://astexplorer.net
3. Pass the AST to Interpreter and output is binary

### What can be problematic for JavaScript Engine

- eval()
- arguments()
- for..in
- with
- delete
