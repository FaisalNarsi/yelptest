var express = require('express')
var app = express()

// This will serve up any static files in the public folder
app.use(express.static('public'));


// This allows Cross-Origin Requests to our server
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });



var Yelp = require('yelp');
var yelp = new Yelp({
	consumer_key: "QX6AnsA4NRlYlCLUVFziIw",
	consumer_secret: "Rr8vgooT0PXeq_0H4bXFppd_nsY",
	token: "ZT3pl3vqniQ_Q8V40yf07l5FXRxY-fQt",
	token_secret: "o1gvIqxMeJx0gXQrzNkkleOKEKE"
});

// app.get('/', function (req, res) {
// 	res.send('hello world');
// })

app.get('/yelp/search', function (req, res) {
	yelp.search(req.query)
		.then(function (data) {
			res.json(data);
		})
		.catch(function (err) {
			console.log(err);
		});
})

// $.ajax({
//       url: "https://api.yelp.com/v3/businesses/search" queryURL,
//       method: "GET"
//     }).done(function(response) {
//       console.log(response);


app.listen(process.env.PORT, function () {
	console.log('example app listening on port ')
})
