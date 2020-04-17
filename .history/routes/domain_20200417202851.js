var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../config');
var querystring = require('querystring');

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
    request.get(`${domain}/v1/domains/suggest?query=${req.query.domain}&limit=${req.query.limit}`,{'headers':authHeader},(error,response,body)=>{
      if(error)
          console.log(error);
      // res.json({status:200,data:body})
      let tempArr = JSON.parse(body);
      let array = [];
      tempArr.map(obj=>array.push(obj.domain));

      let form = {"domains":array}
      // let formData = JSON.stringify(form);
      // let contentLength = formData.length;

      request({
        headers: {
          'Authorization': authHeader.Authorization,
          'Content-Type': 'application/json'
          // 'Content-Length':contentLength
        },
        uri: `${domain}/v1/domains/available?checkType=FAST`,
        body: form,
        method: 'POST'
      }, function (error, res, body) {
        if (error)
          console.log(error);
          console.log("body=",body);
      });

    })
  });



module.exports = router;
