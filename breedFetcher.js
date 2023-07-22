const request = require('request');

/* make sure that 1 line of code works.
request('https://www.example.com', (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    console.log(body);
  }
});
*/

const fetchBreedDescription = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      callback(null, data);
    }
  });
};

// Usage example:


module.exports = { fetchBreedDescription };