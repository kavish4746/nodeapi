var product = require('../model/user_model')
var express = require('express');
var router = express.Router();

 router.put('/:qty?', function (req, res, next) {
     product.updateProduct(req.params.qty, req.body, function (err, rows) {
  
      if (err) {
         res.json(err);
       }
       else {
         res.json(rows);
       }
  
  
    });
  
   });
  module.exports = router;