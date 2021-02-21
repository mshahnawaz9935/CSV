var express = require('express');
var app = express();
 var request=require('request');

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/data', function (req, res) {
  

request('http://interview.wpengine.io/v1/accounts', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body); // Print the google web page.
res.send(res.json(body));
  }
});
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})