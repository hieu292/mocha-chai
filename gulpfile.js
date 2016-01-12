'use strict,';

var gulp = require('gulp');
var gmocha = require('gulp-mocha');
var gutil = require('gulp-util');

gulp.task('gmocha', function () {
  return gulp.src(['test/*.js'], {read:false})
    .pipe(gmocha({reporter: 'list'}))
    .on('error', gutil.log);
});

gulp.task('watch-mocha', function () {
  gulp.run('gmocha');
  gulp.watch(['./**/*.js', ' test/**/*.js'], ['gmocha']);
});

gulp.task('default', ['watch-mocha']);
