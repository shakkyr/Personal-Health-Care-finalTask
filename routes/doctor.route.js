const router = require("express").Router();

const doctorController = require('../controllers/doctor.controller')


router.get('/', doctorController.getDoctor)

router.get('/:id', doctorController.getDoctorById )

module.exports = router;
