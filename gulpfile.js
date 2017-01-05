var gulp    = require('gulp')
var path    = require('path')
var less    = require('gulp-less')
var rename  = require('gulp-rename')
var uglify  = require('gulp-uglify')
var cssmin  = require('gulp-cssmin')
var clean   = require('gulp-clean')
var combine = require('gulp-magix-combine')

gulp.task('clean', function() {
  return gulp.src('./build', {read: false})
    .pipe(clean())
})

gulp.task('compress', ['clean'], function() {
  gulp.src('./app/views/**/*.js')
    .pipe(combine({
      magixVersion: 1.1
    }))
    .pipe(rename(function (path) {
      path.basename += "-min"
    }))
    .pipe(uglify({
      output: {ascii_only:true}
    }))
    .pipe(gulp.dest('./build/app/views'))

  gulp.src('./boot/*.js')
    .pipe(rename(function (path) {
      path.basename += "-min"
    }))
    .pipe(uglify({
      output:{ascii_only:true}
    }))
    .pipe(gulp.dest('./build/boot/'))

  gulp.src([
    './app/**/*.js', 
    '!./app/views/**/*.js'
  ])
    .pipe(rename(function (path) {
      path.basename += "-min"
    }))
    .pipe(uglify({
      output: {ascii_only:true}
    }))
    .pipe(gulp.dest('./build/app/'))

  gulp.src('./style/main.less')
    .pipe(less())
    .pipe(rename(function (path) {
      path.basename += "-min"
    }))
    .pipe(cssmin({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('./build/style/'))

  gulp.src('./fonts/*')
    .pipe(gulp.dest('./build/fonts/'))
})

gulp.task('build', [
  'compress'
])