'use strict';

var NOAH = NOAH || {};

// Requirements
var bs        = require('browser-sync').create();
var app       = require('../../assemblefile');
var extname   = require('gulp-extname');
var filePaths = require('../modules/file-paths').filePaths;

// Custom Tasks
NOAH.serve  = require('../modules/browser-sync').NOAH;
NOAH.sass   = require('../modules/sass').NOAH;
NOAH.concat = require('../modules/concat').NOAH;
NOAH.uglify = require('../modules/uglify').NOAH;
NOAH.test   = require('../modules/karma').NOAH;

NOAH.serve({
    notify: false,
    open: false,
    files: [
      './dist/css/*.css', 
      './dist/js/*.js',
      './dist/*.html'
    ],
    server: {
        baseDir: './dist'
    }
});

// Watch Sass files
bs.watch('assets/scss/**/*.scss', function(event, file) {
    if (event === 'change') {
      NOAH.sass({
          src : 'assets/scss/style.scss',
          dest: 'dist/css/style.css'
      });
    }
});

// Watch JS files
bs.watch('assets/js/**/*.js', function(event, file) {
    var filename = file.replace(/^.*[\\\/]/, '').replace(/\..+$/, '');
    if (event === 'change') {
        NOAH.test({
            files: [
                'assets/vendor/**/*.js',
                'assets/js/*.js',
                'test/js/' + filename + '.test.js'
            ],
            singlerun: false
        });
        NOAH.concat({
            src : filePaths('assets/js/'),
            dest: 'dist/js/main.js'
        });
        NOAH.uglify({
            src : 'dist/js/main.js',
            dest: 'dist/js/main.min.js'
        });
    }
});

// Watch template files
bs.watch('assets/templates/*.html', function(event, file) {
    if (event === 'change') {
      app.file(file);
    }
});