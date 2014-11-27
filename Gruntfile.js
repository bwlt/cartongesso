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
    }
  });

  grunt.loadNpmTasks('grunt-inline');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // Default task(s).
  grunt.registerTask('default', ['inline', 'htmlmin']);

};
