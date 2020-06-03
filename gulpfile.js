const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
smartgrid  = require('smart-grid');

function style () {
    return gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream())
}

function watch () {
    browserSync.init({
        server: {
        baseDir: './'
    }
    })
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*html').on('change', browserSync.reload);
}

const smartgridSettings = {
    outputStyle: 'scss',
    columns: 12, // number of grid columns
    offset: '15px', // gutter width px || %
    filename: '_smart-grid',
    container: {
      maxWidth: '1170px', // max-width оn very large screen
      fields: '15px' // side fields
    },
    breakPoints: {
      xlg: {
        'width': '1600px',
        'fields': '15px'
      },
      lg: {
        'width': '1200px',
        'fields': '15px'
      },
      md: {
        'width': '992px',
        'fields': '15px'
      },
      sm: {
        'width': '768px',
        'fields': '15px'
      },
      xs: {
        'width': '544px',
        'fields': '15px'
      },
      xxs: {
        'width': '420px',
        'fields': '15px'
      }
    }
  };
  
  gulp.task('smartgrid', () => smartgrid('./scss/', smartgridSettings));

exports.style = style;
exports.watch = watch;