var fs = require("fs");
var express = require("express");
var router = express.Router();
var fileside = require("../src/fileside.js");

var testFilePath = "./test/test_file.txt";
var algorithms = ["sha1", "md5", "sha256", "sha512"];
var arr1 = [];
/* GET home page. */
router.get("/", function(req, res, next) {
  fs.readFile(testFilePath, fileside.handleFile);

  fileside.getFileKb(testFilePath, function(err, result) {
    if (err) {
      throw err;
    }
    arr1.push(result);
    console.log(result);
  });

  fileside.getFileBytes(testFilePath, function(err, result) {
    if (err) {
      throw err;
    }
    arr1.push(result);
    console.log(result);
  });

  algorithms.forEach(function(value) {
    fileside.fileHash(testFilePath, value, function(err, result) {
      if (err) {
        throw err;
      }
      arr1.push(value + ": " + result);
      console.log(value + ": " + result);
    });
  });

  res.render("index", {
    title: "Fileside",
    stats: arr1
  });
  arr1 = [];
});

module.exports = router;
