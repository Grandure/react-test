module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 8008,
                    hostname: 'localhost',
                    livereload: true
                }
            }
        },
        watch: {
            client: {
                files: ['index.html','js/**/*.js'],
                options: {
                    livereload: true
                }
            }

        }
    });

    // 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 默认被执行的任务列表。
    grunt.registerTask('default', ['connect', 'watch']);

};

//------------------------------------------