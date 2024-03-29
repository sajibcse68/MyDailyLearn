## Important

- Optimizing the frontend has high impact, it's relatively cheap to optimize and results are immediate

## What are the Browser-centric Metrics?

- **First Byte (TTFB):** It's the time range to get the first byte in api response. The time starts when you click on a link or, navigate to a page.

- **First Paint:** It's the time when browser starts Painting / rendering.

- **Page Load:** When everything is ready on browser (content is loaded 100%) then Page load is fired. The browser is ready to use before page load

Browser-centric metrics are no so important for web performance optimization!

## What are the User Centric Metrics?

- **First Interactive:** means when browser left some room to execute our own codes (e.g. JavaScript) for first time. And then user can interact on browser (e.g. click, drag, scroll, etc.)

- **Speed Index:** measures how quickly content is visually displayed during page load. if you take screenshot of a website over the time when loading. Let's say gmail & amazon have same page load time 1.3 sec but if the amazon speed index is better then that website will feel faster! We can measure it using browser dev tools.

- **Time To Interactive:** indicates the time when user can interact easily so, it has enough time left to execute JS.

- **Largest Contentful Paint (LCP):** indicates the time when the largest content of the website is loaded. It can be test, title, image, etc.

## Core Web Vitals

- **Largest Contentful Paint (LCP)**: it means how first your website loads so, it just loading time(Good < 2.5s)

- **First Input Delay (FID)**: it means how interactive your website feels (Good < 100ms)

- **Cumulative Layout Shift (CLS)** It indicates Visual Stability. That means when loading the website the content moves around or, shifting place (Good < 0.1). For example: when you reading an article in newspaper a large article appears on top and that article moves down suddenly!

## Understanding the Browser

### What Happens when we type any domain/url in browser?

1. DNS query
2. TCP connection - 120ms
3. SSL negotiation - 150ms
4. HTTP request - uplink
   - header, body
5. Server process (backend time) - 200ms to 500ms
6. HTTP response - downlink
   - header, body
7. Browsers HTML parsing
8. Resource discovery & priority
   - Absolute expiration date (1.0) e.g. Dec 31, 2023
   - Relative expiration date (1.1) e.g. 1 week / months
   - More specs / values
9. Render (layout, paint)

### What happens when browser needs a resource?

1. It checks the cache
   - Cache MISS: go to the network
   - Cache HIT:
     - it's expired - conditional request
       - Not modified (updated cache header)
       - OK, new file
     - it's not expired - we use the file from the cache

### What is Back/Forward Cache (bfcache)?

- It keeps your page navigation in memory if the user navigates away
- It's automatic
- You shouldn't use unload events, Cache-Control: no-store

## Service Workers and Cache Storage

### How does service worker work?

<img src="../images/service-worker.png" alt="service-worker" width="500px"/>

## MixIn

#### What is Latency?

Time delay between when a data packet is sent and when it is received, expressed in milliseconds.

#### When the DOM Content Loaded Listener is Fired?

DOM content loaded is fired when the HTML is finished parsing and the DOM is in memory so, it's does not matter if the images are loaded or, if the CSS is loaded

## Reference and Helpful Links

- [PageSpeed Insights](https://pagespeed.web.dev/): Show performance metrics of a website based on what your **real users** are experiencing
- [Web Archive](https://web.archive.org): saves the content only
- [HTTP Archive](https://httparchive.org): saves not only the files but also the headers
