const express = require('express')
const router = express.Router()
const { createAppointment, getAppointmentsByDoctorAndDate, getAppointmentsPatients, getAppointmentsDoctors } = require('../controllers/appointmentController')
const { protect } = require('../middleware/authMiddleware')


router.post('/create', createAppointment);
router.get('/:idDoctor/:sDate', getAppointmentsByDoctorAndDate);
router.get('/:User', getAppointmentsPatients);
router.get('/doc/:doctor/:emailId', getAppointmentsDoctors);

module.exports = router