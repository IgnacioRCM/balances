const controller = {};
const mysqlConecction = require('../database');


controller.list = (req, res) => {
    mysqlConecction.query('SELECT * FROM register', (err, rows, fields) =>{
        if(!err){
            res.json(rows);
        } else {
            console.log(err);
        }
    })
};

controller.save = (req, res) => {
    const newRegister = req.body;

    mysqlConecction.query('INSERT INTO register set ?', [newRegister], (err, register) => {
        if(!err){
            res.redirect('/register');
        } else{
            console.log(err);
        }
    });
};

controller.search = (req, res) => {
    const { id_registro } = req.params;

    mysqlConecction.query('SELECT * FROM register WHERE id_registro = ?', [id_registro], (err, rows, fields) => {
        if(!err){
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
}

controller.update = (req, res) => {
    const {id_registro} = req.params;
    const newRegister = req.body;

    mysqlConecction.query('UPDATE register set ? WHERE id_registro = ?', [newRegister, id_registro], (err, rows) => {
        if(!err){
            res.redirect('/register');
        } else{
            console.log(err);
        }
    });
};

controller.delete = (req, res) => {
    const {id_registro} = req.params;

    mysqlConecction.query('DELETE FROM register WHERE id_registro = ?', [id_registro], (err, rows) => {
        if(!err){
            res.redirect('/register');
        } else{
            console.log(err);
        }
    });
};


module.exports = controller;