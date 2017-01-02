var gulp    = require('gulp');
var notify  = require('gulp-notify');
var plumber = require('gulp-plumber');

var uglify  = require('gulp-uglify');
var cssnano = require('gulp-cssnano');

gulp.task('build', () => {

	gulp.src(['dev/js/libs.js', 'dev/js/*.js'])
		.pipe( plumber() )
		.pipe( uglify() )
		.pipe( gulp.dest( 'www/js' ) );

	gulp.src(['dev/css/libs.css', 'dev/css/*.css'])
		.pipe( cssnano() )
		.pipe( gulp.dest( 'www/css' ) );

	gulp.src('dev/*.html')
		.pipe( gulp.dest('www/') )

	gulp.src('dev/fonts/*')
		.pipe( gulp.dest('www/fonts/') );
		
	gulp.src('dev/img/**/*')
		.pipe( gulp.dest('www/img/') );

});