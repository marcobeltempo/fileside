const getKB = require("../routes/index.js");

// A simple example test
describe("#getKilobytes() ", () => {
  it("should load file size in kilobytes", () => {
    expect(getKB.getKilobytes(45)).toMatch(/0.04/);
  });
});
