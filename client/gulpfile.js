var gulp = require('gulp'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    merge = require('merge-stream'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    webpack = require('webpack-stream'),
    browserify = require('gulp-browserify'),
    del = require('del'),
    jsx = require('gulp-jsx'),
    babel = require('gulp-babel'),
    jsxLoader = require('jsx-loader'),
    SOURCE_DIRECTORY = "./src/",
    BUILD_DIRECTORY = "./build/",
    TARGET_DIRECTORY = "./target/",
    STYLE_DIRECTORY = SOURCE_DIRECTORY + 'style/',
    MARKUP_FILE_NAME = "index.html";

var gutil = require('gulp-util');
var rename = require('gulp-rename');



gulp.task('markup', function () {
  del(TARGET_DIRECTORY + 'index.html');
  gulp.src(SOURCE_DIRECTORY + 'index.html')
    .pipe(gulp.dest(TARGET_DIRECTORY));
});

gulp.task('style', function () {
  gulp.src(SOURCE_DIRECTORY + '**/*.scss')
    .pipe(sass({style : 'compressed'}))
    .pipe(concat('bundle.min.css'))
    .pipe(gulp.dest(TARGET_DIRECTORY));
});

gulp.task('scripts', function () {
  gulp.src(SOURCE_DIRECTORY + "**/*.jsx")
    .pipe(browserify({
       transform: ['reactify'],
       extensions: ['.jsx']
    }))
    .pipe(concat('bundle.min.js'))
    .pipe(gulp.dest(TARGET_DIRECTORY));

});

gulp.task('default', [
  'markup',
  'style',
  'scripts'
]);

