var product = require('../model/user_model')
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
product.getAllproduct(function (err, rows) {
    
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
    
    });
    
});
  
 router.get('/:cat_name', function (req, res, next) {
   product.getallMobile(req.params.cat_name, function (err, rows) { 
       if (err) {
         res.json(err);
       }
       else {
         res.json(rows);
       }
   });
 });
module.exports = router;