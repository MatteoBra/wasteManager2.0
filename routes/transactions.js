const express = require('express');
const router = express.Router();
const { getTransactions, addTransaction , deleteTransaction } = require('../controllers/transactionsController')

router
    .route('/')
    .get(getTransactions) //when make req /api/v1/trans => fires function in transactionsController
    .post(addTransaction);

router
    .route('/:id')
    .delete(deleteTransaction);

module.exports = router