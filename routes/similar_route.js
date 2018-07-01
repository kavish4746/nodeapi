var similar = require('../model/user_model')
var express = require('express');
var router = express.Router();

router.get('/:fkcat_id/:p_id', function (req, res, next) {
    
    similar.similarProduct(req.params.fkcat_id,req.params.p_id,function(err,rows){
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
  
      });
});
module.exports = router;