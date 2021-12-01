// const mongoose = require('mongoose');

// const DB_URL = 'mongodb://localhost:27017/health-care'

// const clientSchema = mongoose.Schema({
//     name : String,
//     image : String,
//     phone : Number,
//     email : String,
//     age : Number,
//     health : String,
//     joined : String,
//     isdoctor : false,
//     doctor: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "doctor",
//         required: false,
//     }]
// })

// const Client = mongoose.model('client',clientSchema)

// exports.getAllClients = () => {
   
//     return new Promise((resolve, reject)=> {
//         mongoose.connect(DB_URL).then(()=> {
//             return Client.find({})
//            }).then(profiles => {
//                mongoose.disconnect()
//                resolve(profiles)
//        }).catch(err=>reject(err))
   
//     })
// }