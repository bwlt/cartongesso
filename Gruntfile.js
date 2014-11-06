module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    inline: {
      dist: {
        options:{
            cssmin: true,
            uglify: true
        },
        src: [ 'src/index.html' ],
        dest: [ 'dist/' ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-inline');

  // Default task(s).
  grunt.registerTask('default', ['inline']);

};
