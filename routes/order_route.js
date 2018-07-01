var order = require('../model/user_model')
var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    order.addorder(req.body, function (err, rows) { 
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
    });
});
router.get('/:fkuser_id',function (req, res, next) {
    
    order.getallOrder(req.params.fkuser_id,function(err,rows){
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
  
      });
});

module.exports = router;