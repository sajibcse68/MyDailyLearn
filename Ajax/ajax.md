#### What is HTTP (HyperText Transfer Protocol) ?
- Based on request/response  stateless protocol
    - Client opens connection to server
    - Client sends HTTP request for a resource
    - Server sends HTTP response to the client (w/resource)
    - Client closes connection to server
#### URN -> URI -> URL
- URN (Uniform Resource Name)
    - Uniquely identifies resources or name of resource
    - Does not tell us hot to get the resource
    - e.g. "HTML/CSS/Javascript/Web_Developers/Yaakov/Chaikin"

- URI (Uniform Resource Identifier)
    - Uniquely identifies resource or location or resource
    - Does not necessarily tell us how to get the resource (much more `directory type` structure looking thing)
    - e.g. "/official_web_site/index.html" (unable to get that resource cause don't know where to go to get it)

- URL: Uniform Resource Locator
    - Form of URI that provides info on how to get resource
    - e.g. http://www.mysite.com/official_web_site/index.html

************ onreadystatechange event ****************
```
When a request to a server is sent, we want to perform some actions based on the response,
the readystatechange event is triggered every time the readyState changes
```



readyState:
-----------
    0 -> request not initialized
    1 -> server connection established
    2 -> request received
    3 -> processing request
    4 -> request finished and response is ready
Status:
-------
    200 -> OK
    404 -> Page not found

<---- sample ajax call ---------->
$('.confirmation').on('click', 'button', function() {
  const that = this;
  $.ajax('confirmation.html', {
    success: function(resp) {
      ...
    },
    error: function(req, errorType, errorMessage) {
      ...
    },
    data: $('form').serialize(),                        // Used to merge all form field as submission
    timeout: 3000,
    context: that,                                      // Allows us to set the value of `this` inside our callbacks
    dataType: 'json',                                   // Parse the response as json
    beforeSend: function() {                            // Runs before the ajax call
      $(.confirmation').addClass('is-loading');
    },
    complete: function() {                              // Runs after both success and error
      $('confirmation').removeClass('is-loading');
    }
  }
}

<-------- jquery advanced events ------------->
$('button').on('click', function() { ... })        // create an event
$('button').off('click')                           // destroy all events on button click
$('button'.trigger('click');                       // similar to if the user clicked the button


#### Mixin
- Sometimes jQuery change the value of `this`
- Inside AJAX callbacks `this` is set to the AJAX settings
- `GET` method sends data to server as part of the URL
- `POST` method sends data as part of message body