const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/health-care'

const doctorSchema = mongoose.Schema({
    name : String,
    image : String,
    phone : String,
    email : String,
    specalist : String,
    experince : String,
    cases : String,
    description :[
        type = String,
    ],
    age : Number,
    isdoctor : {
        type: Boolean,
        default: true
    }
})



const Doctor = mongoose.model('doctor',doctorSchema)

exports.getAllDoctors = () => {
   
    return new Promise((resolve, reject)=> {
        mongoose.connect(DB_URL).then(()=> {
            return Doctor.find({})
           }).then(doctors => {
               mongoose.disconnect()
               resolve(doctors)
       }).catch(err=>reject(err))
   
    })
}

exports.getDoctorsByCategory = (specalist) => {
    return new Promise((resolve,reject) => {
        mongoose.connect(DB_URL).then(()=> {
            return Doctor.find({ specalist : specalist})
    }).then(doctors => {
        mongoose.disconnect()
        resolve(doctors)
    }).catch(err=>reject(err))
})
}

exports.getDoctorById = (id) => {
    return new Promise((resolve,reject) => {
        mongoose
        .connect(DB_URL)
        .then(() => {
            return Doctor.findById(id);
        })
        .then(doctor => {
            mongoose.disconnect();
            resolve(doctor)
        })
        .catch(err=> reject(err))
    })
}