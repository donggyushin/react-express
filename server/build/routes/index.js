"use strict";

var express = require("express");
var post = require("./post");

var router = express.Router();

router.use("/post", post);

module.exports = router;