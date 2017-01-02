var gulp    = require('gulp');
var notify  = require('gulp-notify');
var plumber = require('gulp-plumber');

var jade    = require('gulp-jade');
var html    = require('gulp-html-prettify');



gulp.task('jade', () => {

	gulp.src('source/pages/**/*.jade')
		.pipe( plumber() )
		.pipe( jade({ pretty: true }) )
		.pipe( html({indent_char: ' ', indent_size: 4}) )
		.pipe( gulp.dest( 'dev/' ) ) 
		.pipe( notify({
			title:   "JADE",
			message: "Pages transpiled successfully"
		}));

});