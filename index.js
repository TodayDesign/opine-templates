var gulp = require('gulp');
var opine = require('gulp-opine');
var nunjucksRender = require('gulp-nunjucks-render');
var prettify = require('gulp-prettify');
var module = opine.module('templates');

var sources = module.getSources();
var dest = module.getDest();
var path = module.getConfig('path', './frontend/templates');

var debug = module.getConfig('debug', true);

module.addBuild();
module.addWatch(sources);

module.task(function() {
    return gulp
        .src(sources)
        .pipe(nunjucksRender({
            path: path
        }))
        .pipe(prettify({indent_size: 4}))
        .pipe(gulp.dest(dest))
        .pipe(module.size());
});
