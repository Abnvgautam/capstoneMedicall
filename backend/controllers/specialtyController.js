const asyncHandler = require('express-async-handler');
const Specialty = require('../models/specialtyModel');

const getSpecialties = asyncHandler(async (req, res) => {
  try {
    const specialties = await Specialty.find();
    console.log('getSpecialties function success');
    res.status(200).json(specialties);
  } catch (error) {
    console.log('getSpecialties function failed')
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});


module.exports = {
  getSpecialties,
};