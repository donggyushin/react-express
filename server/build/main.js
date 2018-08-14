"use strict";

var express = require("express");
var bodyParser = require("body-parser");

var api = require("./routes");

var app = express();

var port = 8080;

app.use(bodyParser.json());

//SERVE STATIC FILES = REACT PROJECT
app.use("/", express.static(__dirname + "/../../client/build"));

//LOAD API FROM ROUTES
app.use("/api", api);

app.listen(port, function () {
  console.log("Express is listening on port", port);
});