var nunjucksRender = require('gulp-nunjucks-render');
var gulp = require('gulp');
var data = require('gulp-data');
var babel = require('gulp-babel');
var less = require('gulp-less');
var path = require('path');
var merge = require('merge-stream');
var watch = require('gulp-watch');

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

gulp.task('watch_css', function() {
    watch_css();
});

gulp.task('watch_nunjucks', function() {
    watch_nunjucks();
});

gulp.task('watch_js', function() {
    watch_js();
});

gulp.task('watch_all', function() {
    return merge(watch_css(), watch_js(), watch_nunjucks());
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

function watch_css() {
    return gulp.src('./src/css/**/*.+(less)')
        .pipe(watch('./src/css/**/*.+(less)'))
        .pipe(less())
        .pipe(gulp.dest('./dist/css'));
}

function watch_nunjucks() {
    return gulp.src('./src/pages/**/*.+(html|nunjucks)')
        .pipe(watch('./src/pages/**/*.+(html|nunjucks)'))
        .pipe(data(function() {
            return require('./src/data/data.json')
        }))
        .pipe(nunjucksRender({
            path: ['./src/templates']
        }))
        .pipe(gulp.dest('.'));
}

function watch_js() {
    return gulp.src('./src/js/**/*.+(js)')
        .pipe(watch('./src/js/**/*.+(js)'))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('./dist/js'));
}
