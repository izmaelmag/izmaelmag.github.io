var gulp = require('gulp');
var browsersync = require('browser-sync').create();
var reload = browsersync.reload;

gulp.task('server', () => {
	browsersync.init({
		server: {
			baseDir: "./dev/"
		}
	});

	gulp.watch('dev/**/*').on('change', reload);
});
