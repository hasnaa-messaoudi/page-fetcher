const url = process.argv[2];
const localFile = process.argv[3];
const request = require('request');
const fs = require('fs');
request(url, (error, response, body) => {
  if (response && response.statusCode == 200) {
    fs.writeFile(localFile, body, function (err) {
      if (err) throw err;
      console.log(`Downloaded and saved 3261 bytes to ${localFile}`);
    });
    
  } else {
    console.log(`Something went wrong happened`);
  }
});
