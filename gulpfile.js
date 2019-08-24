var gulp = require('gulp');
var sass = require('gulp-sass');
var autprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var soursmaps = require('gulp-sourcemaps');
var cleanCss = require('gulp-clean-css');
var browserSync = require('browser-sync').create();

var config = {
    paths: {
        scss: './src/scss/**/*.scss',
        html: './docs/index.html'
    },
    output: {
        cssName: './css/bundle.css',
        path: './docs'
    }
};

gulp.task('scss', function (done) {
    return gulp.src(config.paths.scss)
        .pipe(soursmaps.init())
        .pipe(sass())
        .pipe(concat(config.output.cssName))
        .pipe(autprefixer())
        // .pipe(cleanCss())
        .pipe(soursmaps.write())
        .pipe(gulp.dest(config.output.path))
        .pipe(browserSync.stream());
        done();

});

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: config.output.path
        }
    });



    gulp.watch(config.paths.scss, gulp.series('scss'));
    gulp.watch(config.paths.html).on('change', browserSync.reload);
});


gulp.task('default',  gulp.series('scss', 'serve'));