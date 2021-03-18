const controller = {};
const mysqlConecction = require('../database');


controller.watch = (req, res) => {
    mysqlConecction.query('SELECT (SELECT SUM(monto) FROM register WHERE tipo="ingreso") + (SELECT SUM(monto * (-1)) FROM register WHERE tipo="egreso") AS Total', (err, rows, fields) =>{
    if(!err){
        res.json(rows[0]);
    } else {
        console.log(err);
    }
    })
};


module.exports = controller;