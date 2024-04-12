
const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
    doctor: mongoose.Schema.Types.ObjectId,
    patient: mongoose.Schema.Types.ObjectId,
    appointment_date: Date,
    appointment_time: String,
    status: String,
    notes: String,
    doctorName: String,
    patientName: String,
});

module.exports = mongoose.model('appointments', appointmentSchema)