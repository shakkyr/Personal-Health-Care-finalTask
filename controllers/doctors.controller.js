const doctorsModel = require('../models/doctors.model');



exports.getDoctor = (req, res) => {
    
    

    let specalise = req.query.specalise
    let validSpecalist = ['Allergists','Anesthesiologists','Cardiologists','Colon and Rectal Surgeons','Critical Care Medicine Specialists','Dermatologist','Endocrinologists','Emergency Medicine Specialists','Family Physicians','Gastroenterologists','Geriatric Medicine Specialists','Hematologists','Hospice and Palliative Medicine Specialists','Infectious Disease Specialists','Internists','Medical Geneticists','Nephrologists','Neurologists','Obstetricians and Gynecologists','Oncologists','Ophthalmologists','Osteopaths','Otolaryngologists','Pathologists','Physiatrists','Plastic Surgeons','Podiatrists','Preventive Medicine Specialists','Psychiatrists','Pulmonologists','Radiologists','Rheumatologists','Sleep Medicine Specialists','Sports Medicine Specialists','General Surgeons','Urologists']
    let doctorsPromise 
    if (specalise && validSpecalist.includes(specalise)) doctorsPromise = doctorsModel.getDoctorsByCategory(specalise)
    else doctorsPromise = doctorsModel.getAllDoctors()
    doctorsPromise.then(doctors => {
        console.log(req.session.userId);
        res.render("doctors", {
            doctors : doctors,
            isUser: req.session.userId

        }) 
    })
}

