const doctorsModel = require('../models/doctors.model')

exports.getDoctor = (req, res,next) => {

    let id = req.params.id;
    doctorsModel.getDoctorById(id).then(doctor => {
        res.render('doctor' , {
            doctor : doctor
        })
    })
}