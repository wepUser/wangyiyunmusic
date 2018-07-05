var express = require('express');
var router = express.Router();
const mysql = require('mysql');

/* GET home page. */
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '832564',
    database: 'sys'
});

connection.connect(function (err) {
    if(err){
        console.log(err);
    }
    console.log('链接成功');
});

let _sql = "select * from sys_config";

connection.query(_sql, function (err, rows) {
    if (err) {
        console.log("query-" + err);
    }
    router.get('/', function(req, res, next) {
        res.render('index', { title: rows[0].variable });
    });

});

connection.end(function (err) {
    if (err) {
        return;
    }
    console.log("close succeed...");
});


module.exports = router;
