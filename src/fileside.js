"use strict";

var fs = require("fs");
var crypto = require("crypto");

module.exports = {
  handleFile: function(file) {
    fs.readFile(file, (err, data) => {
      if (err) {
        console.error("Uhoh, there was an error trying to read the file.");
        throw err;
      }
    });
  },

  /**
   * Get the size of a file in bytes
   * @param {string} filePath - The path to a valid file name.
   * @return {string} ex. "43 Bytes"
   */
  getFileBytes: function(filePath, callback) {
    fs.stat(filePath, function(err, stats) {
      if (err) {
        console.error("Uhoh, there was an error trying to getFileBytes.");
        throw err;
      }
      let byteString = stats.size + " Bytes";
      callback(null, byteString);
    });
  },

  /**
   * Get the size of a file in kilobytes
   * @param {string} filePath - The path to a valid file name.
   * @return {string} ex. "0.04 Kilobytes"
   */
  getFileKb: function(filePath, callback) {
    fs.stat(filePath, function(err, stats) {
      if (err) {
        console.error("Uhoh, there was an error trying to getFileKb.");
        throw err;
      }
      let kilobyteString = (stats.size / 1024).toFixed(2) + " Kilobytes";
      callback(null, kilobyteString);
    });
  },

  /**
   * Hash a given file
   * crypto function implemented from
   * @param {string} filePath - The path to a valid file name.
   * @param {string} algorithm - Acceots "sha1", "md5", "sha256", "sha512".
   * @return {string} The file hash
   */
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
      callback(null, hash);
    });
  }
};
