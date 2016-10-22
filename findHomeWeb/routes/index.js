var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('user');
});

router.post('/dashboard', function (req, res) {
    //console.log(req);
    res.send({title: "Good"});
});

module.exports = router;
