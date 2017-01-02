var gulp    = require('gulp');
var notify  = require('gulp-notify');
var plumber = require('gulp-plumber');

var concat  = require('gulp-concat');
var concss  = require('gulp-concat-css');

var image   = require('gulp-image');
var uglify  = require('gulp-uglify');
var cssnano = require('gulp-cssnano');



gulp.task('makelibs', () => {

	gulp.src(['static/libs-js/jquery*.js', 'static/libs-js/TweenMax.min.js', 'static/libs-js/SplitText.min.js', 'static/libs-js/*.js'])
		.pipe( plumber() )
		.pipe( concat('libs.js') )
		.pipe( uglify() )
		.pipe( gulp.dest( 'dev/js' ) )
		.pipe( notify({
			title:   "JS LIBS",
			message: "JS libs concatenated successfully"
		}));

	gulp.src('static/libs-css/*.css')
		.pipe( plumber() )
		.pipe( concss('libs.css') )
		.pipe( cssnano() )
		.pipe( gulp.dest('dev/css') )
		.pipe( notify({
			title:   "CSS LIBS",
			message: "CSS libs concatenated successfully"
		}));

});



gulp.task('static:transfer', () => {

	gulp.src('static/fonts/**/*').pipe( gulp.dest('dev/fonts/') );
	gulp.src('static/fonts/*').pipe( gulp.dest('dev/fonts/') );
	gulp.src('static/img/**/*')
		.pipe( image({
			pngquant: true,
			optipng: true,
			zopflipng: true,
			advpng: true,
			jpegRecompress: true,
			jpegoptim: true,
			mozjpeg: true,
			gifsicle: true,
			svgo: true
	    }))
		.pipe( gulp.dest('dev/img/') );

});



gulp.task('static', ['makelibs','static:transfer']);
