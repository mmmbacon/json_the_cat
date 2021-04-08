const request = require('request');

const fetchBreedDescription = function(breedName,callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, res, body) => {
  
    let error, data = null;

    console.log(data);

    if (err) {
      error = err;
    } else {
      data = JSON.parse(body);
      if (data.length < 1) {
        error = "Not a valid breed";
        data = null;
      }
    }

    callback(error, data);

  });
};

module.exports = { fetchBreedDescription };