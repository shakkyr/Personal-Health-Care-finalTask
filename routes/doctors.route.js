const router = require('express').Router();
const authGuard = require('./guards/auth.guard')

const doctorController = require('../controllers/doctors.controller')

router.get('/doctors', authGuard.isAuth, doctorController.getDoctor);

module.exports = router;