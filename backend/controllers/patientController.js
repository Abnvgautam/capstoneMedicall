// const Patients = require('../models/patientModel')


//Get patient profile
// api/patient/profile

const isPatient = (req, res,next)=> {
    if(req.user && req.user.role ==='patient'){
        next()
    }else{
        res.status(403).json({
            message:'Unauthorized'
        })
    }
}


const getPatient = (req,res)=>{
    res.send('This is patient profile')
}

module.exports = {
    getPatient,
    isPatient,
}