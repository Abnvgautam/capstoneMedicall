const express = require('express')
const router = express.Router()
const { getSpecialties } = require('../controllers/specialtyController')


router.get('/', getSpecialties)


module.exports = router;