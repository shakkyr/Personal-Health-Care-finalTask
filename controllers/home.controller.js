const clientsModel = require('../models/clients.model')
const doctorsModel = require('../models/doctors.model')


exports.getHome = (req, res) => {
    
    clientsModel.getAllClients().then(clients => {
        res.render('clients', {
            clients: clients
        })
    })
}