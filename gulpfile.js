var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var fileinclude = require('gulp-file-include');
var del = require('del');
var cleanCSS = require('gulp-clean-css');
var cssbeautify = require('gulp-cssbeautify');
var runSequence = require('run-sequence');
var autoprefixer = require('gulp-autoprefixer');
var spritesmith = require('gulp.spritesmith');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sassGlob = require('gulp-sass-glob');
var combineMq = require('gulp-combine-mq');
var replace = require('gulp-replace');
var fs = require('fs');
var path = require('path');
var merge = require('merge-stream');
var rename = require('gulp-rename');
var webpack = require('webpack-stream');
var base64 = require('gulp-base64');

// var plumber = require('gulp-plumber');


require('gulp-grunt')(gulp);

gulp.task('template:css', function () {
    gulp.src(['./assets/css/main.css'])
        .pipe(replace('/img/', '../../img/'))
        .pipe(replace('/assets/fonts/', '../fonts/'))
        .pipe(rename('main-rel.css'))
        .pipe(gulp.dest('./assets/css/'));
});
gulp.task('template:html', function () {
    gulp.src(['./html/*.html'])
        .pipe(replace('/img/', '../img/'))
        .pipe(rename(function (path) {
            path.basename += "-rel";
        }))
        .pipe(gulp.dest('./html/'));
});

gulp.task('scripts', function () {
    return gulp.src('./js/components/modules.js')
        .pipe(webpack(require('./webpack.config.js')))
        .on('error', swallowError)
        .pipe(gulp.dest('./assets/js/'));
});

gulp.task('fileinclude', function () {
    return gulp.src(['./html/work/*.html', '!./html/work/unused/'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .on('error', swallowError)
        .pipe(gulp.dest('./html/'));
});


gulp.task('task-head', function () {
    return gulp.src(['./epub-header/**/*.xhtml'], {base: "./"})
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@root'
        }))
        .on('error', swallowError)
        .pipe(gulp.dest('./'));
});

gulp.task('task-copy', function () {
    return gulp.src('./epub/**/*')
        .pipe(gulp.dest('./epub-header'));
});

gulp.task('task', function (callback) {
    runSequence('task-copy', 'task-head', callback);
});




gulp.task('del:html', function (cb) {
    return del(['./html/*.html', '!./html'], cb);
});
gulp.task('del:css', function (cb) {
    return del(['./assets/css/*.css'], cb);
});
gulp.task('del:js', function (cb) {
    return del(['./assets/js/**/*.js'], cb);
});


var sassOptions = {
    sourcemap: true
};


gulp.task('sass', function () {
    return gulp.src('./css/main.scss')
        .pipe(sassGlob())
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream());
});

gulp.task('copy:css', function () {
    return gulp.src('./css/main.css')
        .pipe(autoprefixer({
            browsers: ['last 3 versions', 'ie >=9']
        }))
        .pipe(base64({
            baseDir: './',
            extensions: ['svg', 'png'],
            maxImageSize: 53 * 1024, // bytes,
            exclude: [/sprite/],
            deleteAfterEncoding: false,
            debug: !1
        }))
        .pipe(combineMq())
        .pipe(cleanCSS())
        // .pipe(cssbeautify())
        .pipe(gulp.dest('./assets/css/'));
});

gulp.task('sprite', function () {
    var spriteData = gulp.src('./img/sprite-smith/*.png').pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: '../css/components/_global/_sprite.scss',
        padding: 10,
        imgPath: '/img/sprite.png',
        algorithm: 'binary-tree'
    }));
    return spriteData.pipe(gulp.dest('./img/'));
});

gulp.task('image-min', function () {
    return gulp.src('./img/**/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [
                {removeViewBox: false},
                {cleanupIDs: false}
            ],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./img/'));
});

gulp.task('go', function () {

    browserSync.init({
        server: ['./', 'html/'],
        notify: false,
        ghostMode: false
    });
    gulp.watch("css/**/*.scss", ['sass']);
    gulp.watch("img/sprite-smith/**/*.png", ['sprite']);
    gulp.watch(['html/work/*.html', 'html/includes/**/*.html'], ['fileinclude']);
    gulp.watch('html/*.html').on('change', browserSync.reload);
    gulp.watch("js/components/**/*.js", ['scripts']);
    gulp.watch("assets/js/*.js").on('change', browserSync.reload);
});


gulp.task('default', function (callback) {
    runSequence(['del:html', 'del:css', 'del:js'], 'sass',
        ['copy:css', 'fileinclude', 'scripts'], callback);
});

gulp.task('rel', ['template:html', 'template:css']);

function swallowError(error) {

    // If you want details of the error in the console
    console.log(error.toString());

    this.emit('end')
}