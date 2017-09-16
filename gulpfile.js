const gulp = require('gulp');
const pug = require('gulp-pug');
const del = require('del');
const browserSync = require('browser-sync').create();

//styles
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

//scripts
const gulpWebpack = require('gulp-webpack');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

const paths = {
  root: './docs',
  templates: {
    pages: 'src/templates/pages/*.pug',
    src: 'src/templates/**/*.pug',
    dest: 'docs/assets/'
  },
  styles: {
    src: 'src/styles/**/*scss',
    common: 'src/styles/common/',
    dest: 'docs/assets/styles/'
  },
  images: {
    src: 'src/images/**/*.*',
    dest: 'docs/assets/images/',
    compressed: 'docs/assets/images/compressed'
  },
  scripts: {
    src: 'src/scripts/**/*.js',
    dest: 'docs/assets/scripts'
  },
  fonts: {
    src: 'src/fonts/**/*.*',
    dest: 'docs/assets/fonts'
  }
}

//pug
function templates() {
  return gulp.src(paths.templates.pages)
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest(paths.root));
}

//scss
function styles() {
  return gulp.src('./src/styles/app.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: require('node-normalize-scss').includePaths
    }))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourcemaps.write())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.styles.dest))
}

//clean
function clean() {
  return del(paths.root);
}

// webpack
function scripts() {
  return gulp.src('src/scripts/app.js')
    .pipe(gulpWebpack(webpackConfig, webpack))
    .pipe(gulp.dest(paths.scripts.dest));
}

// перенос картинок 
function images() {
  return gulp.src(paths.images.src)
    .pipe(gulp.dest(paths.images.dest));
}

// шрифты
function fonts() {
  return gulp.src(paths.fonts.src)
    .pipe(gulp.dest(paths.fonts.dest));
}

// следим за исходниками src
function watch() {
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.templates.src, templates);
  gulp.watch(paths.images.src, images);
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.fonts.src, fonts);
}

// следим за папкой билд, обновляем страничку
function server() {
  browserSync.init({
    server: paths.root
  });
  browserSync.watch(paths.root, browserSync.reload);
}

exports.templates = templates;
exports.styles = styles;
exports.clean = clean;
exports.images = images;

//develop
gulp.task('default', gulp.series (
  gulp.parallel(styles, templates, images, scripts, fonts),
  gulp.parallel(watch, server)
));

//production
gulp.task('build', gulp.series(
  clean,
  gulp.parallel(styles, templates, images, scripts, fonts)
));