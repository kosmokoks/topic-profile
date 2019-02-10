var gulp = require('gulp'),
    sass = require('gulp-sass'),
    changed = require('gulp-changed'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglifyjs'),
    browserSync = require('browser-sync').create();


function errorLog(error) {
    console.error.bind(error);
    this.emit('end');
}

gulp.task('sass', function () {
    // Theme
    gulp.src('./scss/*.scss')
        .pipe(changed('./css/'))
        .pipe(sass({outputStyle: 'expanded'}))
        .on('error', sass.logError)
        .pipe(autoprefixer([
            "last 1 major version",
            ">= 1%",
            "Chrome >= 45",
            "Firefox >= 38",
            "Edge >= 12",
            "Explorer >= 10",
            "iOS >= 9",
            "Safari >= 9",
            "Android >= 4.4",
            "Opera >= 30"], {cascade: true}))
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream());
});

gulp.task('serve', function () {
    browserSync.init({
        files: "./*.html",
        startPath: "./",
        server: {
            baseDir: "./",
        },
    })
});

gulp.task('watch', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
    gulp.watch('./*.html').on('change', browserSync.reload);
});

// Gulp Tasks
gulp.task('default', ['watch', 'sass', 'serve']);