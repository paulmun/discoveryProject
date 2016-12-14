'use strict';

var gulp         = require('gulp');
var browserSync  = require('browser-sync').create();
var nodemon      = require('gulp-nodemon');

gulp.task('nodemon', function(cb) {
    var called = false;

    return nodemon({
        script: 'server.js'

    }).on('start', function() {
        if(!called) {
            called = true;
            cb();
        }
    });
});

gulp.task('browserSync', ['nodemon'], function() {
    browserSync.init({
        proxy: {
            target: "localhost:5000",
            ws: true
        },
        port: 3000,
        open: true,
        notify: false,
        ghostMode: false
    });
});

gulp.task('watch', function() {
    gulp.watch('client/partials/*.html', browserSync.reload);
    gulp.watch('client/assets/js/**/*.js', browserSync.reload);
    gulp.watch('client/assets/css/main.css', browserSync.reload);
    gulp.watch('client/assets/scss/*.scss', browserSync.reload);
});

gulp.task('default', ['browserSync', 'watch']);


