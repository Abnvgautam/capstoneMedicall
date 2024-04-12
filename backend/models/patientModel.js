const mongoose = require('mongoose')

const patientsSchema = mongoose.Schema({
    "_id" : ObjectId,
    "name" : String,
    "age" : Number,
    "gender" : String,
    "address" : String,
    "email" : String,
    "phone" : String,
    "appointments" : [
        {
            "appointment_id" : ObjectId,
            "doctor_id": ObjectId,
            "date": Date,
            "reason": String,
            "notes": String
        }
    ]
})

module.exports = mongoose.model('Patients', patientsSchema)