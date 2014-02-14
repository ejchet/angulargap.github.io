module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'js/**/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    uglify: {
      dist: {
        files: {
          'js/site.min.js': [
	          'js/jquery-1.10.1.min.js',
	          'js/bootstrap.min.js',
	          'js/shCore.js',
	          'js/shBrushXml.js',
	          'js/shBrushJScript.js',
	          'js/shBrushCss.js',
	          'js/application.js'
	        ]
        }
      }
    },
    cssmin: {
      dist: {
        files: {
          'css/site.min.css': [
	          'css/bootstrap.min.css',
	          'css/bootflat.css',
	          'css/device-mockups.css',
	          'css/shCore.css',
	          'css/shThemeDefault.css',
	          'css/site.css'
	        ],
          'css/icon.min.css': [
            'css/bootstrap.min.css',
            'css/bootflat.css',
            'css/site-icons.css'
          ],
          'angulargap/css/angulargap.min.css': 'angulargap/css/angulargap.css'
        }
      }
    },
    sass: {
      dist: {
        files: {
          'angulargap/css/angulargap.css': 'angulargap/scss/angulargap.scss'
        },
        options: {                      
          style: 'expanded',
          sourcemap: 'true'
        }
      }
    },
    pkg: grunt.file.readJSON('package.json')
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', [
    'jshint',
    'sass',
    'cssmin',
    'uglify'
  ]);
};