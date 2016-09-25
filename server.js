var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('data:image/jpeg;base64,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', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
