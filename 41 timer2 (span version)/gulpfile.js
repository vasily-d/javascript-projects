//npm i browser-sync --save-dev
//npm i gulp-less --save-dev

//npm install --save-dev del
//npm install gulp-cssnano --save-dev
//npm install run-sequence --save-dev
//npm install --save-dev gulp-imagemin

var gulp = require('gulp'),
    less = require('gulp-less'),
    browserSync = require('browser-sync'),
    notify = require("gulp-notify"),
    runSequence = require('run-sequence'),
    cssnano = require('gulp-cssnano'),
    del = require('del'),
    imagemin = require('gulp-imagemin');

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'	//папка developer c сайтом, иначе '' если gulp в app
    },
    notify: false
  });
});

gulp.task('less', function() {
  return gulp.src('app/less/style.less')
    .pipe(less())
    .on('error', notify.onError(function(err) {
      return {
        title: 'Styles',
        message: err.message
      };
    }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}));
});

// START BUILD
gulp.task('clean', function(){
  return del.sync('dist');
});

gulp.task('copyHtml', function() {
  return gulp.src('app/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('copyFonts', function() {
  return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('copyCompressImg', function() {
  return gulp.src('app/img/**/*.{png,jpg,gif,svg}')
    //.pipe(imagemin({
    //  imagemin.optipng({optimizationLevel: 3}),
    //  imagemin.jpegtran({progressive: true})
    //}))
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

gulp.task('copyMinCss', function() {
  return gulp.src('app/css/style.css')
    .pipe(cssnano())
    //.pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('copyLibsJs', function() {
  // файл
  //gulp.src('app/libs/bower/jquery/dist/jquery.min.js')
	// папка
  //  .pipe(gulp.dest('dist/libs/bower/jquery/dist'))
  // файл
  //  gulp.src('app/libs/bower/wow/dist/wow.min.js')
  // папка
  //  .pipe(gulp.dest('dist/libs/bower/wow/dist'));
});

gulp.task('copyJs', function() {
  return gulp.src('app/js/**/*')
    .pipe(gulp.dest('dist/js'));
});
// END BUILD

gulp.task('build', function(callback) {
  runSequence('clean', 'copyHtml', 'copyFonts', 'copyCompressImg', 'copyMinCss', 'copyLibsJs', 'copyJs', callback);
});

// main point
gulp.task('default', ['browserSync', 'less'], function () {

  // обновляем браузер при любых изменениях в html, less или js
  gulp.watch('app/less/**/*.less', ['less']);
  gulp.watch('app/js/**/*.js', browserSync.reload);
  gulp.watch('app/*.html', browserSync.reload);

  //gulp.watch('app/less/**/*', browserSync.reload); 
  //gulp.watch('app/css/**/*.css', browserSync.reload); 
});