module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: {
        src: [
          '**/*.js',
          '!node_modules/**/*'
        ]
      }
    },
    qunit: {
      all: ['index.html']
    },
    validation: {
      options: {
        reset: true
      },
      files: {
        src: ['*.html']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-html-validation');

  grunt.registerTask('default', ['jshint', 'qunit', 'validation']);
};
