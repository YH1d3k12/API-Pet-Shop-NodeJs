const express = require('express');

const AppointmentController = require('../controllers/appointments.js');
const authMiddleware = require('../middleware/auth.js');

const controller = new AppointmentController();
const router = express.Router();

router.get('/', authMiddleware(null), controller.GetAppointments);
router.get('/:id', authMiddleware(null), controller.GetAppointmentById);
router.post('/', authMiddleware(null), controller.CreateAppointment);
router.put('/:id', authMiddleware(null), controller.UpdateAppointment);
router.delete('/:id', authMiddleware(null), controller.DeleteAppointment);

module.exports = router;