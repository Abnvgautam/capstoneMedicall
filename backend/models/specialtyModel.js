const mongoose = require('mongoose');

const specialtySchema = new mongoose.Schema({
  Specialty: {
    type: String,
    required: true,
    unique: true,
  },
  Doctor: String, 
});

module.exports = mongoose.model('specialties', specialtySchema);