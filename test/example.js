var fileside = require("fileside");
var testFile = "/app/index.js";

fileside.handleFile(testFile);

fileside.getFileKb(testFile, function(err, result) {
  console.log(result);
});

fileside.getFileBytes(testFile, function(err, result) {
  console.log(result);
});

fileside.fileHash(testFile, "md5", function(err, result) {
  console.log("md5: " + result);
});

fileside.fileHash(testFile, "sha1", function(err, result) {
  console.log("sha1: ", result);
});

fileside.fileHash(testFile, "sha256", function(err, result) {
  console.log("sha256: " + result);
});

fileside.fileHash(testFile, "sha512", function(err, result) {
  console.log("sha512: " + result);
});
