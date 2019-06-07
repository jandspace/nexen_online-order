const gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    del = require('del'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create();

gulp.task('previewDist', function() {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "dist"
        }
    });
});


gulp.task('deleteDistFolder', function() {
    return del(['dist/**/*', '!dist/master', '!dist/master/index.html', '!dist/translation', '!dist/translation/**/*']);
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
    const pathsToCopy = [
        './app/**/*',
        '!./app/index.html',
        '!./app/assets/images/**',
        '!./app/assets/styles/**',
        '!./app/assets/scripts/**',
        '!./app/temp',
        '!./app/temp/**',
        '!./app/vendor',
        '!./app/vendor/**'
    ];

    return gulp.src(pathsToCopy)
        .pipe(gulp.dest("./dist"));
});

gulp.task('optimizeImages', ['deleteDistFolder', 'icons'], function() {
    return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(gulp.dest("./dist/assets/images"));
});

gulp.task('usemin', ['deleteDistFolder', 'styles', 'scripts'], function() {
    return gulp.src("./app/*.html")
        .pipe(usemin({
            css: [ function() {return cssnano()}],
            js: [function() {return uglify()}]
        }))
        .pipe(gulp.dest("./dist"));
});




gulp.task('deleteDistFolder2', function() {
    return del(['docs/**/*', '!docs/master', '!docs/master/index.html', '!docs/translation', '!docs/translation/**/*']);
});

gulp.task('copyGeneralFiles2', ['deleteDistFolder'], function() {
    const pathsToCopy = [
        './app/**/*',
        '!./app/index.html',
        '!./app/assets/images/**',
        '!./app/assets/styles/**',
        '!./app/assets/scripts/**',
        '!./app/temp',
        '!./app/temp/**',
        '!./app/vendor',
        '!./app/vendor/**'
    ];

    return gulp.src(pathsToCopy)
        .pipe(gulp.dest("./docs"));
});


gulp.task('optimizeImages2', ['deleteDistFolder', 'icons'], function() {
    return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(gulp.dest("./docs/assets/images"));
});


gulp.task('usemin2', ['deleteDistFolder', 'styles', 'scripts'], function() {
    return gulp.src("./app/*.html")
        .pipe(usemin({
            css: [ function() {return cssnano()}],
            js: [function() {return uglify()}]
        }))
        .pipe(gulp.dest("./docs"));
});

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'usemin']);
gulp.task('build2', ['deleteDistFolder2', 'copyGeneralFiles2', 'optimizeImages2', 'usemin2']);

