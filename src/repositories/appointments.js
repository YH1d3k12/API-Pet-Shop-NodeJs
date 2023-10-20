const Appointments = require('../models/appointments.js');

class AppointmentRepository {
    async GetAppointments() {
        const appointments = Appointments.findAll();
        return appointments;
    };


    async GetAppointmentById(id, transaction) {
        const appointment = Appointments.findOne(
            {
                where: { id },
                include: ['pet', 'veterinarian'],
            },
            { transaction }
        );

        return appointment;
    };


    async CreateAppointment(data, transaction) {
        Appointments.create(
            {
                id_veterinarian: data.id_veterinarian,
                id_pet: data.id_pet,
                is_finished: data.is_finished,
                time: data.time,
                created_at: new Date()
            },
            { transaction }
        );
    };


    async UpdateAppointment(id, data, transaction) {
        Appointments.update(
            {
                id_veterinarian: data.id_veterinarian,
                id_pet: data.id_pet,
                is_finished: data.is_finished,
                time: data.time,
                updated_at: new Date().toLocaleString()
            },
            { where: { id } },
            { transaction }
        );
    };


    async DeleteAppointment(id, transaction) {
        Appointments.destroy(
            { where: { id } },
            { transaction }
        );
    };
};

module.exports = AppointmentRepository;