const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

if (!breedName) {
  console.log("Please provide a breed name as a command-line argument.");
} else {
  fetchBreedDescription(breedName, (error, data) => {
    if (error) {
      console.log('Error fetch details:', error);
    } else {
      if (!data) {
        console.log(`Breed "${breedName}" not found.`);
      } else {
        console.log(data);
      }
    }
  });
}