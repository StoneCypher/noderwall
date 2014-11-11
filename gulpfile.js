
/* jshint node: true */
/* eslint-env node, browser */

"use strict";

var gulp = require("gulp"),
    lint = require("sc-eslint/estask.js");

lint.gulpreg(gulp, { "targets" : "gulpfile.js lib/noderwall.js" });
gulp.task("default", ["lint"]);
