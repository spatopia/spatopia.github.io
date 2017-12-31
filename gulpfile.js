var nunjucksRender = require('gulp-nunjucks-render');
var gulp = require('gulp');
var data = require('gulp-data');
var babel = require('gulp-babel');
var less = require('gulp-less');
var path = require('path');
var merge = require('merge-stream');

gulp.task('build_nunjucks', function() {
    build_nunjucks();
});

gulp.task('build_js', function() {
    build_js();
});

gulp.task('build_css', function() {
    build_css();
});

gulp.task('build_all', function() {
    return merge(build_css(), build_js(), build_nunjucks());
});

function build_nunjucks() {
    return gulp.src('./src/pages/**/*.+(html|nunjucks)')
    // Renders template with nunjucks
        .pipe(data(function() {
            return require('./src/data/data.json')
        }))
        .pipe(nunjucksRender({
            path: ['./src/templates']
        }))
        .pipe(gulp.dest('.'))
}

function build_js() {
    return gulp.src('./src/js/**/*.+(js)')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('./dist/js'));
}

function build_css() {
    return gulp.src('./src/css/**/*.+(less)')
        .pipe(less())
        .pipe(gulp.dest('./dist/css'));
}
