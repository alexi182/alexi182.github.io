module.exports = function (grunt) {
    grunt.file.defaultEncoding = 'utf-8';
    grunt.initConfig({pkg: grunt.file.readJSON('package.json'),
        webfont: {
            icons: {
                src: 'img/svg/icon-font/**/*.svg',
                dest: 'assets/fonts/icon-font',
                destCss: 'css/components/_global/',
                options: {
                    font: 'res-icon-font',
                    engine: 'fontforge',
                    autoHint: true,
                    syntax: 'bem',
                    types: 'eot,woff2,woff,ttf,svg',
                    htmlDemo: true,
                    stylesheet: 'scss',
                    relativeFontPath: '/assets/fonts/icon-font'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-webfont');
};