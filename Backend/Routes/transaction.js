const express = require('express')
const { addIncome, getIncome, deleteIncome } = require('../Controllers/income')
const { addExpense, getExpense, deleteExpense } = require('../Controllers/expense')

router = express.Router()

router.post('/add-income', addIncome)
router.get('/get-income', getIncome)
router.delete('/delete-income/:id', deleteIncome)

router.post('/add-expense', addExpense)
router.get('/get-expense', getExpense)
router.delete('/delete-expense/:id', deleteExpense)
module.exports = router