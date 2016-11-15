var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('html', function() {
    gulp.src(["./*.html", "./*.php"])
        .pipe(gulp.dest('dist/html'))
        .pipe(browserSync.stream());
});

gulp.task('css', function() {
    gulp.src(["./*.css"])
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('js', function() {
    gulp.src(["./*.js"])
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.watch(["html/*.html"], ['html']);
gulp.watch(["css/*.css"], ['css']);
gulp.watch(["js/*.js"], ['js']);
//gulp.watch(["src/**/*.html", "src/**/*.php"], ['browser-sync']);
//gulp.watch(["src/js/**/*.js"], ['browser-sync']);

//Running 'gulp' from the command line will run all related tasks.
gulp.task('default', ['browser-sync']);
