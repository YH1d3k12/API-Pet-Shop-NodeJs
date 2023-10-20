const AppointmentRepository = require('../repositories/appointments.js');
const DataValidation = require('../utils/validation.js');

const verify = new DataValidation();

const repositories = new AppointmentRepository();


class AppointmentServices {
    async GetAppointments() {
        const appointments = repositories.GetAppointments();
        return appointments;
    }


    async GetAppointmentById(id, transaction) {
        verify.isIdValid(id);

        const appointment = repositories.GetAppointmentById(id, transaction);
        return appointment;
    }


    async CreateAppointment(data, transaction) {
        verify.isIdValid(data.id_veterinarian, data.id_pet);
        verify.isItEmpty(data.id_veterinarian, data.id_pet, data.is_finished, data.time);

        const result = repositories.CreateAppointment(data, transaction);
        return result;
    }


    async UpdateAppointment(id, data, transaction) {
        verify.isIdValid(id);

        const result = repositories.UpdateAppointment(id, data, transaction);
        return result;
    }


    async DeleteAppointment(id, transaction) {
        verify.isIdValid(id);

        const result = repositories.DeleteAppointment(id, transaction);
        return result;
    }
}


module.exports = AppointmentServices;