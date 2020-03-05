
// server.js
// where your node app starts

// init project
var express = require("express");
var app = express();
// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// // http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/flights", function(request, response) {
  response.sendFile(__dirname + "/views/flights.html");
});

app.get("/info", function(request, response) {
  response.sendFile(__dirname + "/views/info.html");
});

app.get("/frequentflyer", function(request, response) {
  response.sendFile(__dirname + "/views/frequentf.html");
});

app.get("/input", function(request, response) {
  response.sendFile(__dirname + "/views/input.html");
});

app.get("/careers", function(request, response) {
  response.sendFile(__dirname + "/views/careers.html");
});

//listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
