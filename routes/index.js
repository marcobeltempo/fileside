var fs = require("fs");
var express = require("express");
var router = express.Router();
var fileside = require("../src/fileside.js");
var testFilePath = "./test_files/sample_file.txt";

var algorithms = ["sha1", "md5", "sha256", "sha512"];

/* GET home page. */
router.get("/", function(req, res, next) {
  fs.readFile(testFilePath, fileside.handleFile);

  fileside.getFileKb(testFilePath, function(err, result) {
    if (err) {
      throw err;
    }
    console.log(result);
  });

  fileside.getFileBytes(testFilePath, function(err, result) {
    if (err) {
      throw err;
    }
    console.log(result);
  });

  for (var i = 0, len = algorithms.length; i < len; i++) {
    fileside.fileHash(testFilePath, algorithms[i], function(err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
    });
  }

});

module.exports = router;
