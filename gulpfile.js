var gulp = require('gulp');
var concat = require('gulp-concat');
var tsc = require('gulp-tsc');
var watch = require('gulp-watch');

var paths = {
    typescripts: {
        src: [
            'app/_all.ts'
        ],
        dest: 'src/',
        file: 'app.js'
    }
};

gulp.task('typescript', function () {
    return gulp
        .src(paths.typescripts.src)
        .pipe(tsc({
            target: 'ES5',
            removeComments: true,
            module: "CommonJS",
            sourcemap: false,
            emitError: true
        }))
        .pipe(concat(paths.typescripts.file))
        .pipe(gulp.dest(paths.typescripts.dest))
});

gulp.task('watch', function () {
    gulp.watch(['app/**/*.*'], ['typescript']);
});

gulp.task('default', ['typescript']);