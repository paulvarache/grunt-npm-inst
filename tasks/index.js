var spawn = require('child_process').spawn;

module.exports = function (grunt) {
    grunt.registerMultiTask('npm_install', '', function () {
        var done = this.async();
        var npm = spawn('npm', ['install'], { cwd: this.data.cwd || process.cwd() });
        npm.stdout.pipe(process.stdout);
        npm.stderr.pipe(process.stderr);
        npm.on('exit', done);
    });
};