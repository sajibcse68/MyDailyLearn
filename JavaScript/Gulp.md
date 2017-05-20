#### What is Gulp
"A toolkit that will help you automate painful or time-consuming tasks in your development workflow" - gulpjs.com
- Gulp is a build system

#### Example of a demo gulpfile.js

```js
"use strict";

import gulp from "gulp";
import browserify from "browserify";
import source from "vinyl-source-stream";

gulp.task("default", () => {

  return browserify("src/app.js")
    .transform("babelify")
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("dist"));
});
```