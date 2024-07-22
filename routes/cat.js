constrequest= require('request');
 request('https://api.thecatapi.com/v1/images/search', function(error, response, body) {
 if(!error&& response.statusCode== 200) {
 constdata= JSON.parse(body);
 console.log(body);
 constcatImageUrl= data[0].url;
 console.log(catImageUrl);
 }
 });