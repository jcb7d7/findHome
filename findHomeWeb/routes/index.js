var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('user');
});

router.get('/signup', function (req, res) {
    console.log("signup route called");
    res.send({title: "Hello from sign up route!"});
});

router.post('/authLogin', function (req, res) {
    console.log("authLogin called");
    res.redirect('#/user')
});
module.exports = router;
