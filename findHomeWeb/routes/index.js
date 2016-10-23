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

var dashboardUpdater = require("./dashboardUpdate");
router.post('/updateResources', function(req, res) {
    dashboardUpdater.updateResourceConnection(req.body, function (result) {
        console.log("update resources");
        res.send(result);
    });
});
var databaseConnector = require("./dashboardDatabasConnector");
router.get('/facilities', function (req, res, next) {
    databaseConnector.getDataForDashboard(function (result) {
        // console.log("in database promise" + JSON.stringify(result));
        res.send(result);
    });
    // res.send(databaseConnector.getDataForDashboard());
});

module.exports = router;
