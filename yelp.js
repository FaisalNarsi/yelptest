var Yelp = require('yelp');
var yelp = new Yelp({
	consumer_key: "QX6AnsA4NRlYlCLUVFziIw",
	consumer_secret: "Rr8vgooT0PXeq_0H4bXFppd_nsY",
	token: "ZT3pl3vqniQ_Q8V40yf07l5FXRxY-fQt",
	token_secret: "o1gvIqxMeJx0gXQrzNkkleOKEKE"
});

// yelp test code from git
yelp.search({ term: 'food', location: 'Montreal' })
.then(function (data) {
  console.log(data);
})
.catch(function (err) {
  console.error(err);
});
