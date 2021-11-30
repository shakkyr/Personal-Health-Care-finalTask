const doctorsModel = require('../models/doctors.model')

exports.getHome = (req, res, next) =>{
    doctorsModel.getAllDoctors().then(doctors => {
        res.render('index', {

            doctors: doctors
        })
    })

}