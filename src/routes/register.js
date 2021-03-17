const express = require('express');
const router = express.Router();

const mysqlConecction = require('../database');

//listado de todos los registros
router.get('/register', (req, res) => {
    mysqlConecction.query('SELECT * FROM register', (err, rows, fields) =>{
        if(!err){
            res.json(rows);
        } else {
            console.log(err);
        }
    })
});

//obtener un registro por id
router.get('/register/:id_registro', (req, res) => {
    const { id_registro } = req.params;

    mysqlConecction.query('SELECT * FROM register WHERE id_registro = ?', [id_registro], (err, rows, fields) => {
        if(!err){
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    })

});

//crear un registro
router.post('/register', (req, res) => {
    const newRegister = req.body;

    mysqlConecction.query('INSERT INTO register set ?', [newRegister], (err, register) => {
        if(!err){
            res.redirect('/register');
        } else{
            console.log(err);
        }
    });
    });

//editar un registro
router.put('/register/:id_registro', (req, res) => {
    const {id_registro} = req.params;
    const newRegister = req.body;

    mysqlConecction.query('UPDATE register set ? WHERE id_registro = ?', [newRegister, id_registro], (err, rows) => {
        if(!err){
            res.redirect('/register');
        } else{
            console.log(err);
        }
    });
    });

//borrar un registro
router.delete('/register/:id_registro', (req, res) => {
    const {id_registro} = req.params;

    mysqlConecction.query('DELETE FROM register WHERE id_registro = ?', [id_registro], (err, rows) => {
        if(!err){
            res.redirect('/register');
        } else{
            console.log(err);
        }
    });
    });


module.exports = router;