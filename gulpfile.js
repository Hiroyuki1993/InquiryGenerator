var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var convertEncoding = require('gulp-convert-encoding');

gulp.task('browserify', function(){
    var b = browserify({
        entries: ['./client/scripts/index.js'],
        transform: [reactify]
    });
    return b.bundle()
    .pipe(source('app.js'))
    .pipe(convertEncoding({to: 'UTF-8'}))
    .pipe(gulp.dest('./client/build'))
});