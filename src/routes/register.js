const express = require('express');
const router = express.Router();

const registerController = require('../controllers/registerController');

router.get('/register', registerController.list);
router.post('/register', registerController.save);
router.get('/register/:id_registro', registerController.search);
router.put('/register/:id_registro', registerController.update);
router.delete('/register/:id_registro', registerController.delete);

module.exports = router;