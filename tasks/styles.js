var gulp    = require('gulp');
var notify  = require('gulp-notify');
var plumber = require('gulp-plumber');

var stylus  = require('gulp-stylus');
var prefix  = require('gulp-autoprefixer');
var csscomb = require('gulp-csscomb');
var gcmq    = require('gulp-group-css-media-queries');



gulp.task('stylus', () => {

	gulp.src('source/styles/main.styl')
		.pipe( plumber() )
		.pipe( stylus() )
		.pipe( prefix() )
		.pipe( gcmq() )
		.pipe( csscomb() )
		.pipe( gulp.dest( 'dev/css' ) )
		.pipe( notify({
			title:   "STYLUS",
			message: "Styles transpiled successfully"
		}));
		
});