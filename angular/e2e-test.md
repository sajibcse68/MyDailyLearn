#### What is automating testing?
Automating testing is basically practice of writing code to test our code and run these test in an automated fashion.

Benefits:  
- It helps to catch defects **before** releasing software.

#### Types of Tests?

- **Unit test:** Test a component `in isolation`, without external resources (e.g. file system, database, API endpoints).
  - Unit test = component test
  - Easiest to write
  - Super fast
  - Don't give us much confidence

- **Integration test:**  Test a component **with** external resources ( e.g. file system, database, API endpoints )
  - Integration test = component + template
  - More code
  - More confidence

- **E2e test:** Test the entire application as a whole
  - Act like real user (lunch app in browser navigate to the home page, do some actions, etc.)
  - Very slow
  - More confidence
  - Very fragile (simple change in HTML will fail the test)
