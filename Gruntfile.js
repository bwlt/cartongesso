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

    jshint: {
      all: ['Gruntfile.js', 'src/js/*.js', 'test/**/*.js']
    },

    watch: {
      scripts: {
        files: ['<%= jshint.all %>'],
        tasks: ['jshint'],
        options: {
          livereload: true
        }
      },
      documents: {
        files: ['<%= inline.dist.src %>'],
        options: {
          livereload: true
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

    karma: {
      unit: {
        configFile: 'test/karma.conf.js'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-inline');
  grunt.loadNpmTasks('grunt-karma');

  // Default task
  grunt.registerTask('default', ['jshint', 'inline', 'htmlmin']);

};
