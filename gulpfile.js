
/* jshint node: true */
/* eslint-env node, browser */
"use strict";

var gulp     = require("gulp"),
    linttask = require("sc-eslint/estask.js");

global.errorMessage = "";

gulp.task("lint", linttask({
  "targets" : "gulpfile.js lib/flocks.js test/enforce-tests.js"
}));

gulp.task("default", ["lint"]);
