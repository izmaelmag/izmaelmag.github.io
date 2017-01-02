var gulp = require('gulp');

gulp.task('watch', () => {
	gulp.watch('source/blocks/**/*.styl', ['stylus']);
	gulp.watch('source/blocks/**/*.jade', ['jade'  ]);
	gulp.watch('source/blocks/**/*.js'  , ['babel' ]);

	gulp.watch('source/**/*.styl', ['stylus']);
	gulp.watch('source/**/*.jade', ['jade'  ]);
	gulp.watch('source/**/*.js'  , ['babel' ]);
	gulp.watch('static/**/*'     , ['static']);
});