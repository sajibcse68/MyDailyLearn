# Keyboards Shortcuts for Chrome Developer tool

- `Cmd + Opt + I` -- open/close developer tool
- `Cmd + k` -- clean the screen
- `Ctrl + L` -- clean the screen
- `Shift + Enter` -- go to next line
- `clear()` -- clean the screen
- `Cmd + Opt + j` -- open developer tool and focus to console
- `Cmd + ]` -- next panel
- `Cmd + [` -- previous panel
- `Cmd + 1-9` -- jump to the window tab
- `H` -- hide element
- `Double click on attribute` -- Edit attribute
- `Opt + Double-click on arrow icon` -- Expand/collapse node and all its children
- `Cmd + \` -- pause/resume script execution

#### Convert browser into an Editor

document.body.contentEditable=true

#### Capture screenshot

- Elements | select any node | <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> | write `Capture node screenshot` | click

- <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd> (select an element btn, top left corner) | drag the portion want to take screenshot

- <kbd>Cmd</kbd> + <kbd>Option</kbd> + <kbd>I</kbd> | select an elemenet btn, top left corner | drag the portion want to take screenshot

#### Negative filter in dev tool `console`

['one', 'two', 'three', 'four'].forEach(item => {
console.log(item);
});

// output: one, two, three, four

Now, if we write `-two` in filter box

// output: one, three, four

#### Timing Breakdown Phases Explained

> Open Chrome Inspector | Network | click on a request | Timing

- `Queueing:` The browser queues requests when:
  - There are higher priority requests
  - There are already `six` TCP connections open for this origin, which is the limit. Applies to HTTP/1.0 and HTTP/1.1 only
  - The browser is briefly allocating space in the disk cache
- `Stalled:` The request could be stalled for any of the reason described `Queueing`
- `DNS Lookup:` The browser is resolving the request's IP address
- `Proxy Negotiation:` The browser is negotiating the request with a [proxy server](https://en.wikipedia.org/wiki/Proxy_server)
- `Request Sent`: The request is being sent
- `ServiceWorker Preparation:` The browser is starting up the service worker
- `Request to ServiceWorker:` The request is being sent to the service worker
- `Waiting (TTFB):` **Time to First Byte (TTFB)** is the time when the browser is waiting for the first byte of the response.
- `Content Download:` The browser is receiving the response
- `Receiving Push:` The browser is receiving data for this response via `HTTP/2 Server Push`
- `Reading Push:` The browser is reading the local data previously received


[Ref](https://developers.google.com/web/tools/chrome-devtools/network/reference#timing-explanation)

#### Quickly clear all the data from a website

Press `Cmd + Shift + P` | Type in clear | Select` Clear site data`

Alternatively, you can navigate to the Application Panel > Clear Site 

This clears the following:

- Cookies
- WebSQL
- Service Workers
- Cache Storage
- IndexedDB
- Local Storage
- Application Cache

#### How to debug the CSS on hover behavior of a component?

Sometimes we need to test the hover behavior of a component on our website, but it was controlled by JS! And we can't move the cursor from the element, as it’ll revert to default behavior.

So, there is a keyboard shortcut for `pausing with the debugger` and the state should be left `frozen`. Follow:

    Devtools | Source tab | select and trigger the state of the element | press `F8`

#### Multi-line editor in chrome dev-tools

In chrome dev-tools we've coding playground (similar as CodePen or, CodeSandBox)!

    Go to Sources | left drawer | optionally double arrow in “sub-tabs” | Snippets

#### Deep Dive into Debugging:

- Hide/Show an element
  - Elements | select any element | press `H` to toggle hide/show
- See final only applied CSS: Elements | `Computed` section
- Change color value format (hsl, rgb, etc.): Elements | `Styles` | `Shift + Click` on rectangular color box
- History of last selected element:
  - `$0` will print out the last selected element in the `Console`.
  - `$1` will print out the elements that was selected before last one.
  - Total `5` ($0 to $4) history is saved
- Black boxing a script:
  - Sources | Call Stack | Right-click on any script, select `Blackbox Script`.
- `Conditional Breakpoint` maybe helpful for AJAX/API/XHR call -
  - Sources | Right click on line #, select conditional breakpoint, write condition
  - Also, we can select `XHR Breakpoints` from right panel
- Page Jank, GPU memory, see FPS (Frames per second)
  - 3 dot settings | More Tools | Rendering | Check `FPS Meter`
- `Paint Flashing`:
  - 3 dot settings | More Tools | Rendering | Check `Paint Flashing`
  - Scroll the page green color denotes that it is painting this area
  - e.g. koalastothemax.com
- `Memory leaks`:
  - `Memory Leaks` can be defined as memory that is not required by an application anymore that for some reason is not returned to the operating system or the pool of free memory.
  - If foo() call bar(), and bar() call foo() then it is caused `Memory Leak` cause it would never be ended (not garbage collection)

### Reference:

1. https://developers.google.com/web/tools/chrome-devtools/
