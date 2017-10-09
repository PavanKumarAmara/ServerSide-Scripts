var express = require('express');
var app = express();
var data;
//it is used  to get values when post method is used
var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
//GET method to get the login page from server
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "login.html" );
})
//POST method to send the data to server and server returns dummy page
app.post('/process_post', function (req, res) {
   response = {
      user_name:req.body.user_name,
      password:req.body.password
   };
	data=response;
	res.sendFile( __dirname + "/" + "dummy.html" );   
}).listen(8081);

//GET method to show the details from server to the user
app.get('/process_get_dummy',function (req, res) {
   res.end(JSON.stringify(data));
})
//Log message to say that server has been started..
   console.log("Server is started...");
