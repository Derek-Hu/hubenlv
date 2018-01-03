var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

var config = {
    username: "byu3220180001",
    password: "BenIo2017", // optional, prompted if none given
    host: "byu3220180001.my3w.com",
    port: 21,
    localRoot: __dirname + "/build",
    remoteRoot: "/htdocs/",
    include: [],
    exclude: ['.git', '.idea', 'tmp/*', 'build/*', 'node_modules/*']
}

ftpDeploy.deploy(config, function(err) {
    if (err) console.log(err)
    else console.log('finished');
});

ftpDeploy.on('upload-error', function (data) {
    console.log(data.err); // data will also include filename, relativePath, and other goodies
});
