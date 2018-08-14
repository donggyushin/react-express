var express = require("express");
var bodyParser = require("body-parser");

var api = require("./routes");

var app = express();

app.use(bodyParser.json());

//SERVE STATIC FILES = REACT PROJECT
app.use("/", express.static(__dirname + "/../../client/build"));

//LOAD API FROM ROUTES
app.use("/api", api);

app.get("/", (req, res) => {
  console.log("123");
});

app.listen(8080, () => {
  console.log("Estening on port");
});
