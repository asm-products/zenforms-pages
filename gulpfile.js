// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Lint Task
gulp.task('lint', function() {
  return gulp.src('js/*.js')
  .pipe(jshint())
  .on('error', swallowError)
  .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
  return gulp.src('scss/**/*.scss')
  .pipe(sass())
  .on('error', swallowError)
  .pipe(gulp.dest('css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
  return gulp.src('js/*.js')
  .pipe(concat('all.js'))
  .on('error', swallowError)
  .pipe(gulp.dest('dist'))
  .pipe(rename('all.min.js'))
  .pipe(uglify())
  .on('error', swallowError)
  .pipe(gulp.dest('dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch('js/*.js', ['lint', 'scripts']);
  gulp.watch('scss/**/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);

function swallowError (error) {

  //If you want details of the error in the console
  console.log(error.toString());

  this.emit('end');
}
