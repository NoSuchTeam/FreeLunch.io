var gulp = require('gulp'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    merge = require('merge-stream'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    webpack = require('webpack-stream'),
    del = require('del'),
    jsx = require('gulp-jsx'),
    SOURCE_DIRECTORY = "./src/",
    TARGET_DIRECTORY = "./target/",
//    CORDOVA_DIRECTORY = "./src/cordova/www",
    STYLE_DIRECTORY = SOURCE_DIRECTORY + 'style/',
    MARKUP_FILE_NAME = "index.html";

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
  del(TARGET_DIRECTORY + 'bundle.min.js');
  gulp.src(SOURCE_DIRECTORY + "index.js")
    .pipe(webpack())
    .pipe(jsx({factory : 'React.createClass'}))
    .pipe(gulp.dest(TARGET_DIRECTORY + 'bundle.min.js'));
});

gulp.task('default', [
  'markup',
  'style',
  'scripts'
]);

