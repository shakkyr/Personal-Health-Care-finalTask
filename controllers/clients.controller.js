const clientsModel = require('../models/clients.model');



exports.getHome = (req, res) => {
    
    clientsModel.getAllClients().then(clients => {
        res.render('clients', {
            clients: clients
        })
    })
}