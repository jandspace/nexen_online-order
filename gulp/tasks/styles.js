var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba');
lostgrid = require('lost'),
pixelstorem = require('postcss-pixels-to-rem'),
 rtl= require('rtlcss');




gulp.task('styles', ['form-css'], function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba,lostgrid, autoprefixer ()]))
      .on('error', function(errorInfo) {
          console.log(errorInfo.toString());
          this.emit('end');
      })
      .pipe(gulp.dest('./app/temp/styles'))
});



gulp.task('form-css', function() {
    return gulp.src('./app/assets/styles/form.css')
        .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba,lostgrid, autoprefixer ()]))
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/fa-form'))
});


gulp.task('arabic-css', ['styles'], function() {
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(postcss([rtl]))
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles-ar'))
});

