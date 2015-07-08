var spawn = require('child_process').spawn;

module.exports = function (grunt) {
    grunt.registerMultiTask('npm_install', '', function () {
        var done = this.async();
        var params = ['install'];
        if (this.data.production) params.push('--production');
        var npm = spawn('npm', params, { cwd: this.data.cwd || process.cwd() });
        npm.stdout.pipe(process.stdout);
        npm.stderr.pipe(process.stderr);
        npm.on('exit', done);
    });
};