var gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

gulp.task('html', function() {
    gulp.src(["./html/*.html", "./*.php"])
        .pipe(gulp.dest('./dist/html'))
        .pipe(browserSync.stream());
});

gulp.task('css', function() {
    gulp.src(["./css/*.css"])
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('sass', function () {
  return gulp.src('./css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('js', function() {
    gulp.src(["./js/*.js"])
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

gulp.watch(["html/*.html"], ['html']);
gulp.watch(["css/*.css"], ['css']);
gulp.watch(["css/*.scss"], ['sass']);
gulp.watch(["js/*.js"], ['js']);
//gulp.watch(["src/**/*.html", "src/**/*.php"], ['browser-sync']);
//gulp.watch(["src/js/**/*.js"], ['browser-sync']);

//Running 'gulp' from the command line will run all related tasks.
gulp.task('default', ['browser-sync']);
