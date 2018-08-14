"use strict";

var express = require("express");
var router = express.Router();

router.post("/", function (req, res) {
  console.log(req.body.contents);
  return res.json({
    success: true
  });
});

router.get("/:id", function (req, res) {
  console.log("reading post ", req.params.id);
  return res.json({
    index: req.params.id
  });
});

module.exports = router;