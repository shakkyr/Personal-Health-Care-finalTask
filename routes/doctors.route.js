const router = require('express').Router();

const doctorController = require('../controllers/doctors.controller')

router.get('/doctors', doctorController.getDoctor);

module.exports = router;