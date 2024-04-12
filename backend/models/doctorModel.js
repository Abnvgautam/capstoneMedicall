const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    phone: String,
    specializationId: mongoose.Schema.Types.ObjectId,
    bio: String,
    image: String,
  });

module.exports = mongoose.model('doctors', doctorSchema)