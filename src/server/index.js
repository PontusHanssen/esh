var express = require('express');

var app = express();

app.get('/api', (req, res) => {
  res.json({
    hello: "world"
  });
});

app.listen(8080, function(err) {
  if (err)
    return console.log(err);
  console.log('running on localhost:8080');
});
