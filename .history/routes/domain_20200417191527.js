var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../config');
const domain = config.domain_name;
const authHeader = config.auth_header;


router.get('/search', function(req, res, next) {
  request.get(`${domain}/v1/domains/available?domain=${req.query.domain}`,{'headers':authHeader},(error,response,body)=>{
    if(error)
        console.log(error);
    res.json({status:200,data:body})
  })
});

router.get('/suggested', function(req, res, next) {
    request.get(`${domain}/v1/domains/suggest?query=${req.query.domain}&lengthMax=${req.query.max}`,{'headers':authHeader},(error,response,body)=>{
      if(error)
          console.log(error);
        console.log("response=",response)
      res.json({status:200,data:body})
    })
  });



module.exports = router;
