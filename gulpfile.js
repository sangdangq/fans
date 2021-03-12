'use strict';

const { series, src, dest, task, watch } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const sourcemaps = require('gulp-sourcemaps');
// const livereload = require('gulp-livereload');

function compileScss() {
    return src(['scss/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('scss'))
}

exports.default = function() {
    watch(['scss/*.scss', 'scss/**/*.scss'], compileScss);
} 