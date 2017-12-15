
![fileside Logo](https://www.marcobeltempo.com/wp-content/uploads/2017/12/filesidelogo.png)

A NodeJS library designed to process local file size strings and hash a file. As of now fileside can only process local files but look to expand to additional features such as drag and drop support.

This Node.JS application simple analyzes a local file from the and displays the following information to the user:
* Filesize in kilobytes
* Filesize in Bytes
* Hash using md5, sha1, sha256, sha512

## Getting Started

The following demonstrates different uses of filesides functions and instructions to get you setup for development and testing. 

### Examples

```javascript
var fileside = require("fileside");
var testFile = "./test_file.txt";

fileside.handleFile(testFile);

fileside.getFileKb(testFile, function(err, result) {
  console.log(result); //0.04 Kilobytes
});

fileside.getFileBytes(testFile, function(err, result) {
  console.log(result);
}); //43 Bytes

fileside.fileHash(testFile, "md5", function(err, result) {
  console.log("md5: " + result);
}); //md5:  9e107d9d372bb6826bd81d3542a419d6

fileside.fileHash(testFile, "sha1", function(err, result) {
  console.log("sha1: " + result);
}); //sha1:  2fd4e1c67a2d28fced849ee1bb76e7391b93eb12

fileside.fileHash(testFile, "sha256", function(err, result) {
  console.log("sha256: " + result);
}); //sha256:  d7a8fbb307d7809469ca9abcb0082e4f8d5651e46d3cdb762d02d0bf37c9e592

fileside.fileHash(testFile, "sha512", function(err, result) {
  console.log("sha512: " + result); 
}); //07e547d9586f6a73f73fbac0435ed76951218fb7d0c8d788a309d785436bbb642e93a252a954f23912547d1e8a3b5ed6e1bfd7097821233fa0538f3db854fee6


### Prerequisites

* node v8.9 and up
* npm 5.5 and up

### Moodule Install
1. `npm install fileside` 

### Dev-Install
Setup fileside on your local machine

1. `git clone https://github.com/marcobeltempo/fileside`
2. `cd fileside`
3. `npm install`
4. `npm run start:dev` //(optional) This will load a test server to view the results of a test .txt file
5.  Navigate to http://localhost:3000/ to view the results

## Running the Test Suite
* `npm start:dev` - launches a loalhost server and analayze and display the results of test_file.txt
* `npm test` - performs an eslint + prettier and jest tests
* `npm run test:lint:fix` - automatically fix any styling and validation errors. (Double check your changes)

## Contributing

Please read [CONTRIBUTING.md](https://github.com/marcobeltempo/fileside/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Marco Beltempo** - *Initial work* - [fileside](https://github.com/marcobeltempo/fileside)

See the list of [contributors](https://github.com/marcobeltempo/fileside/contributors) who have participated in this project.

## License

This project is licensed under the BSD 2-Clause License - see the [LICENSE.md](LICENSE.md) file for details

## Social

[![Web Icon](https://cdn1.iconfinder.com/data/icons/CrystalClear/32x32/apps/package_network.png)](https://www.marcobeltempo.com/)
[![GitHub Icon](https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-32.png)](https://github.com/marcobeltempo)
[![Twitter Icon](https://cdn3.iconfinder.com/data/icons/free-social-icons/67/twitter_circle_color-32.png)](https://twitter.com/marco_beltempo)
[![LinkedIn Icon](https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_color-32.png)](https://www.linkedin.com/in/marcobeltempo/)
[![Email Icon](https://cdn4.iconfinder.com/data/icons/miu-flat-social/60/mail-32.png)](mailto:marco.beltempo@gmail.com)
