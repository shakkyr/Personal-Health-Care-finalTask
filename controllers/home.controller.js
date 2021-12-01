const clientsModel = require('../models/clients.model')
const doctorsModel = require('../models/doctors.model')


exports.getHome = (req, res) => {
    
    clientsModel.getAllClients().then(() => {
        console.log(req.session.userId);
        res.render('index', {
            isUser: false
           
        })
    })
}