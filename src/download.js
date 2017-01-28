var fs = require('fs')
var request = require('request')
var progress = require('request-progress')

module.exports = function (uri, path, onError, onEnd) {
  progress(request(uri))
    .on('error', onError)
    .on('end', onEnd)
    .pipe(fs.createWriteStream(path))
}
