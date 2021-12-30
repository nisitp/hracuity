/**
 * assemblefile.js
 *
 * Compiles Handlebars templates
 */
var path     = require('path');
var extname  = require('gulp-extname');
var assemble = require('assemble');

var app = assemble({
    layout: 'index.html'
});

// Set the assets directory
app.data('assets', '../');

app.file = function(file) {
  app.src(file)
    .pipe(app.dest('dist/'));
}

app.task('app', function() {
  app.file('assets/templates/index.html');
});

module.exports = app;