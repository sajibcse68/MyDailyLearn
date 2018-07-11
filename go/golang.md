#### What is Go
Go is an `open-source` programming language created by Google in 2007 & announced publicly in 2009. It makes it easy to build **simple, efficient** programs.

Benefits:
- Compiled: Compiler generates single executable file
- Statically typed: types are enforced before program is run
- Fast & efficient: concurrency built in
- Easy to deploy
- Fun to write

Go is a great language choice for writing lower-level programs that provide services to other systems.
This type of programming is called **System Programming**.

| Application Programs              |     System Programs                       |
|-----------------------------------|-------------------------------------------|
| Allows users to perform tasks.    | Provides services to other systems.       |
| E-commerce                        | APIs                                      |
| To-do lists                       | Game engines                              |
| Text editors                      | Network applications                      |
| Music players                     | CLI apps (command line)                   |

- Building and running with `go build`
    - A **compiler** reads source code and produces one executable file. We call this build process.
- Running with `go run`
    - Using **go run**, we can **build and run** programs in one command, which makes things a bit easier.
- The **gofmt** command `$ gofmt -w main.go`
    - The **gofmt** command ships with Go and can be used to **automatically format** source code.
- Reading Arguments
    - The **os.Args** array contains all arguments passed to the running program, including user-supplied arguments
    from the **command line**.
- The **goimports** Command: `$ goimports -w main.go`
    - The **goimports** command ships with Go. It **deletes missing packages** and automatically updates import
     statements in the source code.

#### Variable and Types
- The **:=** operator tells Go to **atomatically find out the data type** on the right being assigned to the **newly declared**
on the left. This is known as **type inference**.

- **Static typing** allows the Go compiler to check for type errors **before the program run**.

#### Functions
- We can find out the **data type returned by a function** from the Go standard library is by referring to the official documentation
- The combination of a function's arguments and data type it returns is commonly refferred to as a function signature.

```
// error handaling is also included in this code snippet
package main
imports (
  "fmt"
  "time"
  "errors"
)

func main() {
  hourOfDay := time.Now.Hour();
  greeting, err := getGreeting(hourOfDay)

  if err != nil {
    fmt.Println(err)
    os.Exit(1)
  }
  fmtPrintln(greeting)
}


func getGretting(hour int) string {
var message string       // manually declared variable
  if hour < 7 {
    err := erros.New("Too early for greetings!");
    return message, err
  } else if hour < 12 {
    message = "Good Morning"
  } else if hour < 18 {
    message = "Good Afternoon"
  } else {
    message = "Good Evening"
  }

  return message, nil    // A nill value for erros tells the caller
                         // this function has no error
}

```

#### Working with errors
- A zero value in Go is the **default value** assigned to variables declared without an explicit initial value.
- A nill value for erros tells the caller this function has no error.
- The exit code 1 is a **POSIX standard** indicating the program has finished, but **errors have occurred**.

#### Looping
- Unlike other popular languages, the **for** loop is **the only looping construct** in Go.
- There is **no parentheses** in `for` loops and three different components we can use to control the loop; the **init**
 statement, a **condition** expression, and a **post** statement.
  - for <init>; <condition>; <post> {
    ------^ execute | before   | the first iteration
    ----------------^ evaluate | before every iteration
    ---------------------------^ execute at the end of every iteration
  }
- The **for** loop components are **optional**. We can create loops with variables declared previouly in the code and a
  **single condition expression**.
  - for <condition> {
    ...
  }
```
  func main() {
    i := 0;
    isLessThanFive := true
    for isLessThanFive {
    ---------^ as long as condition expresson is true, the loop will continue to true
      fmt.Println(i)
      i++
    }

  }
```
- **Infinite loops** are widely used in networking programs. They are useful for **setting up listeners** are
  **responding to connections**.

#### Arrays and Slices
- Adding more elements to an array that what was initially expected **raises an out-of-bounds eror**.
- The **Slice** type is built on top of arrays to provide more power and convenience. Most array programming in Go is
  done with **slices** rather than simple arrays.
- A **nil** in Go behaves **the same as an empty slice**. It can be appended to using the built-in function `append()`,
  which takes two arguments: a slice and a variable number of elements.

#### Slice Literal & Looping
- A **slice literal** is a quick way to create slices with initial elements via type inference. We can pass elements
  between curly braces {}.
  - e.g. langs := []string{"Go", "Ruby", "JavaScript"};
         fmt.Println(langs)
- By using **range** on a slice, we can be sure the indices used are **always valid** for that slice.
  - e.g. for i := range langsArr {
    fmt.Println(langsArr[i])
- The **underline** character tells Go this value will not be used from anywhere else in the code.
  - e.g. for _, element := range langsArr {
      fmt.Println(element)
  }





















