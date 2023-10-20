const AppointmentServices = require('../services/appointments.js');

const services = new AppointmentServices();


class AppointmentController {
    async GetAppointments(req, res) {
        try {
            const appointments = await services.GetAppointments();
            res.status(200).json({ data: appointments });
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };


    async GetAppointmentById(req, res) {
        try {
            const appointment = await services.GetAppointmentById(req.params.id);
            res.status(200).json({ data: appointment });
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };


    async CreateAppointment(req, res) {
        try {
            const data = {
                id_veterinarian: req.body.id_veterinarian,
                id_pet: req.body.id_pet,
                is_finished: req.body.is_finished,
                time: req.body.time,
            }

            const result = await services.CreateAppointment(data);

            res.status(201).json(result);
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };


    async UpdateAppointment(req, res) {
        try {
            const data = {
                id_veterinarian: req.body.id_veterinarian,
                id_pet: req.body.id_pet,
                is_finished: req.body.is_finished,
                time: req.body.time,
            }

            const result = await services.UpdateAppointment(req.params.id, data);

            res.status(200).json(result);
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };


    async DeleteAppointment(req, res) {
        try {
            const result = await services.DeleteAppointment(req.params.id);
            res.status(200).json({ data: result });
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };
}


module.exports = AppointmentController;