var express = require("express");
var path = require("path");
var config = require("config");
var fs = require("fs");
var bodyParser = require("body-parser");
var dot = require("dot-object");
var request = require("request");

var app = express();

var remoteConfig;

var init = function () {
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));

  // Point static path to dist
  app.use(express.static(path.join(__dirname, "dist")));

  // Catch all other routes and return the index file
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist/index.html"));
  });

  const port = config.expressServer.port;

  app.listen(port, function () {
    console.log("App Started on PORT " + port);
  });
}

request.get({
  url: ""
}, function (err, httpResponse, body) {
  init();
});