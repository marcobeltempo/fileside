var fs = require("fs");
var crypto = require("crypto");

module.exports = {
    
  handleFile: function(error, file) {
    if (error) return console.error("Uhoh, there was an error", error);
  },

  getFileBytes: function(filePath, callback) {
    fs.stat(filePath, function(err, stats) {
      if (err) {
        throw err;
      }
      let byteString = stats.size + " Bytes";
      callback(null, byteString);
    });
  },

  getFileKb: function(filePath, callback) {
    fs.stat(filePath, function(err, stats) {
      if (err) {
        throw err;
      }
      let kilobyteString = (stats.size / 1024).toFixed(2) + " Kilobytes";
      callback(null, kilobyteString);
    });
  },

  fileHash: function(filePath, algorithm, callback) {
    var shasum = crypto.createHash(algorithm);
    var filename = filePath,
      s = fs.ReadStream(filename);
    s.on("data", function(data) {
      shasum.update(data);
    });

    // making digest
    s.on("end", function() {
      var hash = shasum.digest("hex");
      callback(
        null,
        "Filename: " + filename + "  Algorithm: " + algorithm + " Hash: " + hash
      );
    });
  }
};
