var Twitter = require('twitter');
 

if (process.argv[2]=== 'twitter'){
	console.log('working twitter')

 
var client = new Twitter({
  consumer_key: 'Wew7pSM0570YjbGvVDlHZm3so',
  consumer_secret: 'aQK9gjoIjfMvsNqIZX4HrCxiLqWzGMY5mbHhNplCd5dAO4Rfop',
  access_token_key: '965686025308733440-zsMGdziLmMX1ND33BrmqwMnBUDfoWu5',
  access_token_secret: 'rywqVIbuPM3wQLcggh8e8uHSaRvz2temEPf4oyxMXIPep'
});
 
var params = {screen_name: 'SonSandersonSan'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
  //  console.log(tweets[0]);
for (var i=0; i< tweets.length;i++){
	console.log(tweets[i].text)
  }
}
});
}else if (process.argv[2]=== 'movie'){
	console.log('working movie')


var request = require('request');
request('http://www.omdbapi.com/?apikey=trilogy&t='+(process.argv[3]), function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});



}else if (process.argv[2]=== 'spotify'){
  console.log('working spotify')


// spotify not working correcty.
//tried to link spotify to the api.
//if i could id link spotify to play any music requested like with the movies.
}
// var Spotify = require('node-spotify-api');
 
// var spotify = new Spotify({
//   id: <c0a33177c5b2447cac87477dfe8e9a5c>,
//   secret: <173b0de050f14e8abc91801b6deb70ac>
// });
 
// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
 
// console.log(data); 
// });