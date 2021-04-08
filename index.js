const args = process.argv.slice(2);
const { fetchBreedDescription } = require('./breedFetcher');

const breedName = args[0];

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log("Error fetching details: ", error);
  } else {
    console.log(description);
  }
});