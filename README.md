
![fileside Logo](https://www.marcobeltempo.com/wp-content/uploads/2017/12/filesidelogo.png)

A NodeJS library designed to process local file size strings and hash a file. As of now fileside can only process local files but look to expand to additional features such as drag and drop support.

This Node.JS application simple analyzes a local file from the and displays the following information to the user:
* Filesize in kilobytes
* Filesize in Bytes
* Hash using sha1, md5, sha256, sha512

## Getting Started

The following demonstrates different uses of filesides functions and instructions to get you setup for development and testing. 

### Examples

```javascript
var fileside = require(fileside);
var testFile = "../tets_files/test_file.txt";

fs.readFile(testFile, fileside.handleFile);

fileside.getFileKb(testFile, function(err, result) {
  console.log(result); //"0.04 Kilobytes"
});

fileside.getFileBytes(testFile, function(err, result) {
  console.log(result); //"40 Bytes"
});

fileside.fileHash(testFile, "sha256", function(err, result) {
  console.log(result); //"cd8d9bb6e93cbca88f4218e6d0124821"
});
```

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
4. `npm start` //(optional) This will load a test server to view the result sof a test .txt file
5. (optional) navigate to (http://localhost:3000/)

## Running the Test Suite
* `npm start` - launches a loalhost server and analayze and display the results of test_file.txt
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
