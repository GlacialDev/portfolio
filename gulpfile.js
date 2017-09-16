const gulp = require('gulp'),
      pug = require('gulp-pug'),
      del = require('del'),
      browserSync = require('browser-sync').create(),
//styles
      sass = require('gulp-sass'),
      rename = require('gulp-rename'),
      sourcemaps = require('gulp-sourcemaps'),
//scripts
      gulpWebpack = require('gulp-webpack'),
      webpack = require('webpack'),
      webpackConfig = require('./webpack.config.js'),
//svg-sprites
      svgSprite = require('gulp-svg-sprite'),
      svgmin = require('gulp-svgmin'),
      cheerio = require('gulp-cheerio'),
      replace = require('gulp-replace');

const paths = {
  root: './docs/',
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
  },
  svg: {
    src: 'src/images/svg/*.svg',
    template: 'src/styles/common/sprite-template.scss',
    scssDest: '../../src/styles/common/sprite.scss',
    svgDest: '../assets/images/sprite/sprite.svg'
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
//fonts
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

exports.clean = clean;

//create svg-sprite
gulp.task('svgsprite', function () {
	return gulp.src(paths.svg.src)
	// minify svg
		.pipe(svgmin({
			js2svg: {
				pretty: true
			}
		}))
		// remove all fill, style and stroke declarations in out shapes
		.pipe(cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
			},
			parserOptions: {xmlMode: true}
		}))
		// cheerio plugin create unnecessary string '&gt;', so replace it.
		.pipe(replace('&gt;', '>'))
		// build svg sprite
		.pipe(svgSprite({
			mode: {
				symbol: {
					sprite: paths.svg.svgDest,
					render: {
						scss: {
              dest: paths.svg.scssDest,
							template: paths.svg.template
						}
					}
				}
			}
		}))
		.pipe(gulp.dest(paths.root));
});
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