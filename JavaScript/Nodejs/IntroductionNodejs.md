#### What is Node.js?
- Allows us to build scalable network applications using JavaScript on the server-side
- `V8 JavaScript Runtime`, that is the same runtime that is used in our `Chrome` browser
- Node does provides a wrapper around this engine providing additional functionality for building network applications
- It's fast because it's mostly `C` code

#### What could we build?
- `Websocket server`, like a chat server
- Fast File Upload Client
- Ad Server
- Any Real-Time Data Apps

#### What is Node.js NOT?
- A Web Framework, not going to replace `Rails`, not `Django`,  
- For Beginners (It's very low level)
- Multi-threaded (think of it as a single threaded server)

#### Why JavaScript?
```
JavaScript has certain chaacteristics that make it very different that other dynamic languages, namely that it has no concept
of threads. Its model of concurrency is completely based around events.
                                                        --- Ryan Dahl
```

`Node.js is a non-blocking codes.`

#### Typical Blocking Things
- Calls out to web services
- Reads/Writes on the Databases
- Calls to extensions


#### Simple code

```
var http = require('http');         // how we require modules

http.createServer(function(request, response) {
    response.writeHead(200);           // status code in header
    response.write('Dog is running');  // Response body       
    response.end();                    // Close th connection
}).listen(8080);                       // Listen for connections on this port

console.log(Listening on port 8080);
```

#### Browser Sync
```
browser-sync start --server --directory --files "*"
```
