var mysql = require("mysql");

exports.getDataForDashboard = function (next) {
    var connection = mysql.createConnection({
        host: "Globalhack.il1.rdbs.ctl.io",
        port: "49424",
        user: "GHack",
        password: "GlobalHack123!",
        database: "globalhack"
    });

    var result = {};

    connection.connect();


    connection.query("Select * from Facilities", function (err, rows) {
        if (err) console.log("Bad connection");
        console.log("Good connection");
        for(var i = 0; i < rows.length; i++) {
            result[i] = rows[i];
        }
        // console.log(result);
        connection.end();
        next(result);
    });
};