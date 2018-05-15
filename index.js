
var express = require('express');
var app = express();
var path = require('path');


app.use(express.static(path.join(__dirname)));
app.use("/css", express.static(__dirname + '/css'));
app.use("/img", express.static(__dirname + '/img'));

// viewed at based directory http://localhost:8080/
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + 'index.html'));
});



app.listen(process.env.PORT || 8080);
