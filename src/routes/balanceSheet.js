const express = require('express');
const router = express.Router();

const balanceSheetController = require('../controllers/balanceSheetController');


router.get('/balanceSheet', balanceSheetController.watch);


module.exports = router;