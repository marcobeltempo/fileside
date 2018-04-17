var fs = require("fs");
var express = require("express");
var router = express.Router();
var fileside = require("../src/fileside.js");
var multer = require("multer");
var upload = multer({ dest: "../uploads/" });

var testFilePath = "./test/test_file.txt";
var algorithms = ["md5", "sha1", "sha256", "sha512"];
var arr1 = [];

/* GET home page. */
router.get("/", function(req, res, next) {
  fileside.handleFile(testFilePath);

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

router.post("/upload", upload.single("userFile"), function(req, res, next) {
  var userMessage = "";
  if (req.file) {
    userMessage = "File successfully recieved";
  } else {
    userMessage = "File was not recieved";
  }
  res.render("upload", {
    title: "Fileside",
    stats: arr1,
    message: userMessage
  });
  arr1 = [];
});

router.get("/upload", function(req, res, next) {
  res.render("upload");
});

module.exports = router;
