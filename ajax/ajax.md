#### What is HTTP (HyperText Transfer Protocol) ?
- Based on request/response  stateless protocol
    - Client opens connection to server
    - Client sends HTTP request for a resource
    - Server sends HTTP response to the client (w/resource)
    - Client closes connection to server
#### URN -> URI -> URL
**https://a.bcd.com/wiki/fish** here:

- *https* is the scheme/protocol. (e.g. http/https/file)
- *a.bcd.com* is the hostname.
- */wiki/fish* is the path.

- URN (Uniform Resource Name)
    - Uniquely identifies resources or name of resource
    - Does not tell us how to get the resource
    - e.g. "HTML/CSS/Javascript/Web_Developers/Yaakov/Chaikin"

- URI (Uniform Resource Identifier)
    - Uniquely identifies resource or location
    - Does not necessarily tell us how to get the resource (much more `directory type` structure looking thing)
    - e.g. "/official_web_site/index.html" (unable to get that resource cause don't know where to go to get it)

- URL: Uniform Resource Locator
    - Form of URI that provides info on how to get resource
    - e.g. http://www.mysite.com/official_web_site/index.html

#### onreadystatechange event
```
When a request to a server is sent, we want to perform some actions based on the response,
the readystatechange event is triggered every time the readyState changes
```

##### Ready State (`readyState`):

```
0 -> Request not initialized
1 -> Server connection established
2 -> Request received
3 -> Processing request
4 -> Request finished and response is ready
```
##### Response Codes:

```js
1xx Information purposes
2xx Successful request
3xx Redirection
4xx Client side errors
5xx Server side errors
```

Some HTTP Status Code Examples:

```
101: Switching protocols
102: Processing

204: No content
206: Partial content

300: Multiple choice
301: Moved permanently
303: See other

401: Gone
404: Not found
409: Conflict
411: Length required
412: precondition failed
413: Payload too large
417: Expectation failed
418: I'm a teapot
426: Upgrade required
451: Unavailable for legal reasons

503: Service unavailable
508: Loop detected
507: Insufficient storage

```

[Reference](https://www.youtube.com/watch?v=x1xJ8BCQTf8)

#### Sample Ajax Call

```js
$('.confirmation').on('click', 'button', function() {
  const that = this;
  $.ajax('confirmation.html', {
    success: function(resp) {
      ...
    },
    error: function(req, errorType, errorMessage) {
      ...
    },
    data: $('form').serialize(),                  // Used to merge all form field as submission
    timeout: 3000,
    context: that,                                // Allows us to set the value of `this` inside our callbacks
    dataType: 'json',                             // Parse the response as json
    beforeSend: function() {                      // Runs before the ajax call
      $(.confirmation').addClass('is-loading');
    },
    complete: function() {                        // Runs after both success and error
      $('confirmation').removeClass('is-loading');
    }
  }
}
```
#### jQuery Advanced Events: 

```js
$('button').on('click', function() { ... }) // create an event
$('button').off('click')                    // destroy all events on button click
$('button'.trigger('click');                // similar to if the user clicked the button
```

#### Mixin
- Sometimes jQuery change the value of `this`
- Inside AJAX callbacks `this` is set to the AJAX settings
- `GET` method sends data to server as part of the URL
- `POST` method sends data as part of message body