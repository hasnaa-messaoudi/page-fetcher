const url = process.argv[2];
const localFile = process.argv[3];
const request = require('request');
const fs = require('fs');
request(url, (error, response, body) => {
  if (response && response.statusCode == 200) {
    let stats = fs.statSync(localFile);
    let fileSizeInB = stats["size"];
    fs.writeFile(localFile, body, function (err) {
      if (err) throw err;
      console.log(`Downloaded and saved ${fileSizeInB} bytes to ${localFile}`);
    });
    
  } else {
    console.log(`Something went wrong happened`);
  }
});
