const express = require('express');

const AppointmentController = require('../controllers/appointments.js');

const controller = new AppointmentController();
const router = express.Router();

router.get('/', controller.GetAppointments);
router.get('/:id', controller.GetAppointmentById);
router.post('/', controller.CreateAppointment);
router.put('/:id', controller.UpdateAppointment);
router.delete('/:id', controller.DeleteAppointment);

module.exports = router;