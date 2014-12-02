module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'dist/index.html': 'build/index.html'
        }
      }
    },

    inline: {
      dist: {
        options:{
            cssmin: true,
            uglify: true
        },
        src: [ 'src/index.html' ],
        dest: [ 'build/' ]
      }
    },

    jshint: {
      all: ['Gruntfile.js', 'src/js/*.js']
    },

    watch: {
      scripts: {
        files: ['<%= jshint.all %>'],
        tasks: ['jshint'],
        options: {
          livereload: true
        }
      },
    },
  });

  grunt.loadNpmTasks('grunt-inline');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'inline', 'htmlmin']);

};
