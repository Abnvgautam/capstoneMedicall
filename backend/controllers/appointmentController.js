const asyncHandler = require('express-async-handler');
const Appointment = require('../models/appointmentModel');
const Doctor = require('../models/doctorModel');
const User = require('../models/userModel');

const createAppointment = asyncHandler(async (req, res) => {

  const { doctor, patient, appointment_date, appointment_time, status, notes } = req.body

  if (!doctor || !patient || !appointment_date || !appointment_time) {
    res.status(400)
    throw new Error('Incomplete Appointment Details')
  }



  const appointment = await Appointment.create({
    doctor, patient, appointment_date, appointment_time, status, notes
  })

  if (appointment) {
    res.status(201).json({
      _id: appointment.id,
      patient: appointment.patient,
      doctor: appointment.doctor,
      appointment_date: appointment.appointment_date,
      roleappointment_time: appointment.appointment_time,
      status: "Confirmed",
      notes: appointment.notes
    })
  } else {
    res.status(400)
    throw new Error('Invalid Appointment')
  }

})

const getAppointmentsByDoctorAndDate = asyncHandler(async (req, res) => {
  const { sDate, idDoctor } = req.params; // Access parameters from req.params

  if (!sDate || !idDoctor) {
    return res.status(400).json({ message: 'Missing required parameters: selectedDate or selectedDoctor' });
  }

  try {

    const appointments = await Appointment.find({
      doctor: idDoctor,
      appointment_date: {
        $gte: new Date(sDate),
        $lt: new Date(sDate).setHours(23, 59, 59, 999)
      }
    });

    res.json(appointments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching appointments' });
  }
});

const getAppointmentsPatients = asyncHandler(async (req, res) => {
  const { User } = req.params; // Access parameters from req.params

  if (!User) {
    return res.status(400).json({ message: 'Missing required parameters: selectedDate or selectedDoctor' });
  }

  try {
    const appointments = await Appointment.find({
      patient: User,
      status: "Confirmed",
    });

    const doctorDetails = await Doctor.find({ _id: { $in: appointments.map(a => a.doctor) } });

    appointments.forEach((appointment) => {
      const matchingDoctor = doctorDetails.find(p => p._id.toString() === appointment.doctor.toString());
      appointment.doctorName = matchingDoctor?.name;
    });

    res.json(appointments);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching appointments' });
  }
});


const getAppointmentsDoctors = asyncHandler(async (req, res) => {
  const { doctor, emailId } = req.params;

  if (!emailId || !doctor) {
    return res.status(400).json({ message: 'Missing required parameters: selectedDate or selectedDoctor' });
  }

  try {
    const doctorDetails = await Doctor.find({ email: emailId });

    const appointments = await Appointment.find({
      doctor: doctorDetails[0]._id,
      status: "Confirmed",
    });


    const userDetails = await User.find({ _id: { $in: appointments.map(a => a.patient) } } && { role: "patient" });

    appointments.forEach((appointment) => {
      const matchingDoctor = userDetails.find(p => p._id.toString() === appointment.patient.toString());
      appointment.patientName = matchingDoctor?.name;
    });

    res.json(appointments);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Backend error' + error });
  }
});

module.exports = {
  createAppointment,
  getAppointmentsByDoctorAndDate,
  getAppointmentsPatients,
  getAppointmentsDoctors
};