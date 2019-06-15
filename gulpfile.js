const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

// compile sass into css
function style() {
  //path to my scss files
  return gulp.src("./styles/**/*.scss")
  //compile
  .pipe(sass().on("error", sass.logError))
  //save to this path
  .pipe(gulp.dest("./styles"))
  // stream changes to all browser
  .pipe(browserSync.stream());
}

function watch () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./styles/**/*.scss", style);
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("./*.js").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;