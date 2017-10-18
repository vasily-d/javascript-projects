//npm i browser-sync --save-dev
//npm i gulp-less --save-dev

var gulp = require('gulp'),
    less = require('gulp-less'),
    browserSync = require('browser-sync'),
    notify = require("gulp-notify");

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

// main point
gulp.task('default', ['browserSync', 'less'], function () {

  // обновляем браузер при любых изменениях в html, less или js
  gulp.watch('app/less/**/*.less', ['less']);
  gulp.watch('app/js/**/*.js', browserSync.reload);
  gulp.watch('app/*.html', browserSync.reload);

  //gulp.watch('app/less/**/*', browserSync.reload); 
  //gulp.watch('app/css/**/*.css', browserSync.reload); 
});