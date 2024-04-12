const express = require('express')
const router = express.Router()
const {getDoctors, getDoctorsBySpecialization} = require('../controllers/doctorController')

router.get('/', getDoctors)
router.get('/:specializationId', getDoctorsBySpecialization);

module.exports = router