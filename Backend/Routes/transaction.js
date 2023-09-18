const express = require('express')
const { addIncome, getIncome, deleteIncome } = require('../Controllers/income')

router = express.Router()

router.post('/add-income', addIncome)
router.get('/get-income', getIncome)
router.delete('/delete-income/:id', deleteIncome)
module.exports = router