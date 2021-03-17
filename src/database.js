const mysql = require('mysql');

const mysqlConecction = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'balancesheet'
});

mysqlConecction.connect(function (err) {
    if(err) {
        console.log(err);
        return;
    } else {
        console.log('DB is connected');
    }
});

module.exports = mysqlConecction;