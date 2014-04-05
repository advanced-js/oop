module.exports = function(grunt) {
  grunt.initConfig({
    validation: {
      options: {
        reset: true
      },
      files: '*.html'
    }
  });

  grunt.loadNpmTasks('grunt-html-validation');

  grunt.registerTask('default', ['validation']);
};
