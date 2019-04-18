var gulp = require( 'gulp' ),
    rename = require( 'gulp-rename' ),
    sass = require( 'gulp-sass' ),
    autoprefixer = require( 'gulp-autoprefixer' ),
    sourcemaps = require( 'gulp-sourcemaps' );

var paths = {
    styles: {
        // By using styles/**/*.sass we're telling gulp to check all folders for any sass file
        src: "src/sass/**/*.sass",
        // Compiled files will end up in whichever folder it's found in (partials are not compiled)
        dest: "dist/css"
    }
    
    // Easily add additional paths
    // ,html: {
    //  src: '...',
    //  dest: '...'
    // }
};

gulp.task( 'style' , function(){
    gulp.src(paths.styles.src)
        .pipe( sourcemaps.init() )
        .pipe( sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }) )
        .on( 'error', console.error.bind(console) )
        .pipe( autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }) )
        .pipe( rename({
            suffix: '.min'
        }) )
        .pipe( sourcemaps.write('./'))
        .pipe( gulp.dest(paths.styles.dest) );
});

gulp.task( 'default' , ['style'] , function(){
    // console.log('Inside default');
} );