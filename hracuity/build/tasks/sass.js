'use strict';

var NOAH = NOAH || {};

// Requirements
NOAH.sass = require('../modules/sass').NOAH;

// Expanded
NOAH.sass({
    src : 'assets/scss/style.scss',
    dest: 'dist/css/style.css'
});

// Minified
NOAH.sass({
    src  : 'assets/scss/style.scss',
    dest : 'dist/css/style.min.css',
    style: 'compressed'
});