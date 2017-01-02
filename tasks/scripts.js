var gulp    = require('gulp');
var notify  = require('gulp-notify');
var plumber = require('gulp-plumber');

var babel   = require('gulp-babel');
var concat  = require('gulp-concat');

gulp.task('babel', () => {

	gulp.src(['source/js/main.js', 'source/blocks/**/*.js'])
		.pipe( plumber() )
		.pipe( concat('scripts.js') )
		.pipe( babel({presets: ['es2015', 'stage-0']}) )
		.pipe( gulp.dest( 'dev/js' ) )
		.pipe( notify({
			title:   'JAVASCRIPT',
			message: 'Scripts transpiled successfully'
		}));

});
