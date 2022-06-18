const gulp = require ('gulp');
const concat = require ('gulp-concat');
const uglify = require('gulp-uglify');
const pipeline = require('readable-stream').pipeline;
const clean = require ('gulp-clean');

function uglifyJS () {
  return pipeline(gulp.src('./**/*.js'),uglify(),gulp.dest('./dist/js')
  );
};

function allJsFiles() {
  return gulp.src(['./dist/js/*.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
};


function copyCss () {
  return gulp.crs ('./style.css').pipe(dest('./dist/'));
}

function copyHtml () {
  return gulp.crs ('./index.html').pipe(dest('./dist/'));
}

function cleanDist () {
  return gulp.src('./dist/*', {read: false})
        .pipe(clean());
}
const jsFiles = series (uglifyJS,allJsFiles );
const built = parallel(jsFiles, copyCss, copyHtml );
module.exports = {
  built: series ( cleanDist, built)
}