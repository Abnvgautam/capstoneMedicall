const express = require('express')
const router = express.Router()
const {getPatient, isPatient} = require('../controllers/patientController')
const {protect} = require('../middleware/authMiddleware')


router.get('/', protect, isPatient, getPatient)

module.exports = router 