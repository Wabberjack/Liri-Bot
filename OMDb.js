// http://www.omdbapi.com/?apikey=[yourkey]&
// http://www.omdbapi.com/?t=Mr.Nobody

var request = require('request');
request('http://www.omdbapi.com/?apikey=trilogy&t=Mr.Nobody', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

// only works ffor the mister nodoby movie unfortunatly.