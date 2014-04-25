var envify = require('envify');

module.exports = function (source) {
  var done = this.async();
  var stream = envify();
  var result = '';

  this.cacheable();

  stream.on('data', function (chunk) {
    result += chunk;
  })
  .on('end', function () {
    done(null, result);
  })

  stream.write(source)
  stream.end();
};
