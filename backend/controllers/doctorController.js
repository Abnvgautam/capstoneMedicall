const asyncHandler = require('express-async-handler');
const Doctor = require('../models/doctorModel');

const getDoctors = asyncHandler(async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (error) {
    console.log('getDoctors function failed')
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

const getDoctorsBySpecialization = asyncHandler(async (req, res) => {
    const { specializationId } = req.params;
  
    try {
      const doctors = await Doctor.find({ specializationId: { $eq: specializationId } });
      res.json(doctors);
    } catch (error) {
      console.error(error);
         if (error.name === 'CastError') {
            res.status(400).json({ message: 'Invalid specialization ID' });
        } else {
            res.status(500).json({ message: 'Error fetching doctors' });
        }
    }
  });
  
module.exports = {
    getDoctors,
    getDoctorsBySpecialization,
};