var fileSide = require("../src/fileside.js");
var testFilePath = __dirname + "/test_file.txt";

test("Get a filesize in kilobytes", function(done) {
  fileSide.getFileKb(testFilePath, function(err, result) {
    expect(err).toBeFalsy();
    expect(result).toMatch("0.04 Kilobytes");

    done();
  });
});

test("Return a file size in bytes", function(done) {
  fileSide.getFileBytes(testFilePath, function(err, result) {
    expect(err).toBeFalsy();
    expect(result).toMatch("43 Bytes");

    done();
  });
});
