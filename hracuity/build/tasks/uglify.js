'use strict';

var NOAH = NOAH || {};

// Requirements
NOAH.uglify = require('../modules/uglify').NOAH;

NOAH.uglify({
    src : 'dist/js/main.js',
    dest: 'dist/js/main.min.js'
});

NOAH.uglify({
    src : 'dist/js/vendor.js',
    dest: 'dist/js/vendor.min.js'
});
