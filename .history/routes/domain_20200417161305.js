var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/search', function(req, res, next) {
  console.log("Here")
  res.send("success");
});

module.exports = router;
