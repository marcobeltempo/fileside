var fileSide = require("../src/fileside.js");
var testFilePath = "./test_files/test_file.txt";

test("Hash a file using sha1", function(done) {
  fileSide.fileHash(testFilePath, "sha1", function(err, result) {
    expect(err).toBeFalsy();
    expect(result).toMatch("2fd4e1c67a2d28fced849ee1bb76e7391b93eb12");
    done();
  });
});

test("Hash a file using md5", function(done) {
  fileSide.fileHash(testFilePath, "md5", function(err, result) {
    expect(err).toBeFalsy();
    expect(result).toMatch("9e107d9d372bb6826bd81d3542a419d6");
    done();
  });
});

test("Hash a file using sha256", function(done) {
  fileSide.fileHash(testFilePath, "sha256", function(err, result) {
    expect(err).toBeFalsy();
    expect(result).toMatch(
      "d7a8fbb307d7809469ca9abcb0082e4f8d5651e46d3cdb762d02d0bf37c9e592"
    );
    done();
  });
});

test("Hash a file using sha256", function(done) {
  fileSide.fileHash(testFilePath, "sha512", function(err, result) {
    expect(err).toBeFalsy();
    expect(result).toMatch(
      "07e547d9586f6a73f73fbac0435ed76951218fb7d0c8d788a309d785436bbb642e93a252a954f23912547d1e8a3b5ed6e1bfd7097821233fa0538f3db854fee6"
    );
    done();
  });
});
