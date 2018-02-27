var Twitter = require('twitter');
 
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

