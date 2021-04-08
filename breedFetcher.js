const request = require('request');
const args = process.argv.slice(2);

request(`https://apis.thecatapi.com/v1/breeds/search?q=${args[0]}`, (err, res, body) => {
  
  if (err) {
    console.log(`An Error happened. Error: ${err}`);
  } else {

    const data = JSON.parse(body);

    if (data.length < 1) {
      console.log("Could not find breed");
    } else {
      console.log(data[0].description);
    }
    
  }



});