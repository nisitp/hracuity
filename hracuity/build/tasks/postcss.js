'use strict';

var NOAH = NOAH || {};

// Requirements
NOAH.postcss = require('../modules/postcss').NOAH;

NOAH.postcss({
    src : 'dist/css/style.css',
    dest: 'dist/css/style.css'
});