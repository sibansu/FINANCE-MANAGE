const express = require('express')
const { addIncome } = require('../Controllers/income')

router = express.Router()

router.post('/add-income', addIncome)

module.exports = router