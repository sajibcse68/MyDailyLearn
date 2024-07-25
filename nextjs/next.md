## What is Next Js and why it is used for?

Next, JS is an open-source, JavaScript framework that lets developers build static and server-side rendering web applications. Created by Zeit, Next JS doesn’t require any Webpack configuration and only needs npm run dev start building your next feature filled web application.

## Next JS 14 Features

- React Server Component

### What is the Advantages of Next.js?

- Easy installation, project build, modification, and required package found.
- Optimal application performance due to the availability of automatic code splitting.
- Next JS allows optimized code bundles to be _loaded lazily_ behind the scenes with the help of prefetching.
- It allows application code to use **SSR** or Server Side Rendering, thus offering **SEO friendly** flexibility, initial render to application view, and elimination of code download.
- Effective Hot-Module Replacement and powerful error reporting.

## How to create pages in next js?

1. To create a custom error page in Next JS, we have to define a “\_error.js” in the page folder with this given syntax.
2. We have to import our own “\_ error” component instead of “next/error” further to use our custom error page. For example:

```js
import React from 'react';

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;

    return { statusCode };
  }

  render() {
    return (
      <p>
        {this.props.statusCode
          ? `An error ${this.props.statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    );
  }
}

export default Error;
```

## What is AMP in Next JS?

This is a Next JS standard used to build high-performance websites rendering overhead. AMP implemented websites are indexed faster in modern and popular search engines with enhanced promoting behavior. AMP web pages are loaded directly to Google's mobile search results with a lightning icon, better performance, fewer restrictions, and better scalability.

### How to validate AMP in the next JS?

To validate your AMP pages, **‘amphtml-validator’** is used during the development. Warnings and fatal errors will be displayed in the terminal where the Next JS is started. AMP pages also get validated during ‘next export’ and issues will be printed in the terminal, and the ‘next export’ will fail due to the absence of proper AMP validation.

### How to enable AMP in Next JS?

This one is crucial. Next JS interview question to practice and remember all its aspects. There are two processes to enable _AMP_ in Next JS. The thing to remember here is, AMP is a crucial part of many Next JS interview questions, so we would advise it to practice well.

AMP-First Pages:

These are served to the primary traffic of the website as well as traffic generated from the search engine. We have to use the following syntax to implement AMP-first pages.

Hybrid AMP Pages:

Hybrid AMP pages allow users to have a coexist AMP version of a traditional page so that search engines can easily display the AMP version or the page in different mobile search results. To implement Hybrid AMP to pages, we have to use the following syntax.

```js
// pages/index.js  -- (AMP-First Pages)

import { withAmp } from 'next/amp'

function HomePage() {
  return "<p> Welcome to AMP + Next.js.</p>"
}

export default withAmp(HomePage)


// pages/index.js (Hybrid AMP Pages)

function HomePage() {

  return "<p> Welcome to AMP + Next.js.</p>"

}

export default withAmp(HomePage, { hybrid: true })

```
