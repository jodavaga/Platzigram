var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

gulp.task('styles', function(){
    gulp
        .src('index.scss')
        .pipe(sass())
        .pipe(rename('app.css'))
        .pipe(gulp.dest('public'))
});

gulp.task('assets', function(){
    gulp
        .src('assets/*')
        .pipe(gulp.dest('public'));
});

function compile(watch){
    //se le pasa el index.js con ayuda de browserify
    var bundle = watchify(browserify('./src/index.js'));

    function rebundle(){
        bundle
            .bundle()
            .pipe(source('index.js'))
            .pipe(rename('app.js'))
            .pipe(gulp.dest('public'));
    }
    //Si trae algo el browserify, para mostrar al cliente
    if(watch){
        bundle.on('update', function(){
            console.log('--> Bundling..');
            //Vuelve a contruir el template de scripts
            rebundle();
        })

    }
    //contruye el template de scripts al menos una vez
    rebundle();
}

gulp.task('build', function(){
    return compile();
});

gulp.task('watch', function(){
    return compile(true);
});

gulp.task('default', ['styles', 'assets', 'build']);