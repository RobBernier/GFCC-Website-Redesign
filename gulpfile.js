var gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-clean-css'),
    sitemap = require('gulp-sitemap'),
    browserSync = require('browser-sync');

gulp.task('html', function() {
    gulp.src(["./_src/html/*.html"])
        .pipe(gulp.dest('./dist/html'))
        .pipe(browserSync.stream());
});

gulp.task('css', function() {
  return gulp.src(["./_src/css/*.css"])
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('sass', function () {
    return gulp.src("./_src/css_scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('js', function() {
    gulp.src(["./_src/js/*.js"])
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

//Watches files and runs command respectfully
gulp.watch(["./_src/html/*.html"], ['html']);
gulp.watch(["./_src/css/*.css"], ['css']);
gulp.watch(["./_src/css_scss/*.scss"], ['sass','css']);
gulp.watch(["./_src/js/*.js"], ['js']);


//Running 'gulp' from the command line will run all related tasks.
gulp.task('default', ['browser-sync']);
