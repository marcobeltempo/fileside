var express = require("express");
var router = express.Router();
var fs = require("fs");
var filesize = require("filesize");
var path = require("path");
var file = "../__tests_/text_files/sample_file.txt";

/* GET home page. */
router.get("/", function(req, res, next) {
  fs.readFile(file, "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    } else {
      fs.stat(file, function(err, stats) {
        let fileStats = [
          "Ananalyzing file from " + file,
          "Directory: " + path.win32.dirname(file), // gets the files directroy
          "Filename: " + path.win32.basename(file), // gets file name
          "Extension: " + path.win32.extname(file), // gets file extension
          "Size:" +
            stats.size +
            " Bytes" +
            " " +
            getKilobytes(stats.size) +
            " Kilobytes", // gets file size and converst to readable bytes
          "File contents: " + data // contents in the file
        ];

        res.render("index", {
          title: "Fileside",
          stats: fileStats
        });
        // For debugging
        console.log("Directory: ", path.win32.dirname(file));
        console.log("Filename: ", path.win32.basename(file));
        console.log("Extension: ", path.win32.extname(file));
        console.log("Size:", filesize(stats["size"]));
        console.log("File contents: ", data);
      });
    }
  });
});

function getKilobytes(bytes) {
  let convertToKiloBytes = bytes / 1024;
  let kilobytes = convertToKiloBytes.toFixed(2);

  return kilobytes;
}

module.exports = { router, getKilobytes };
