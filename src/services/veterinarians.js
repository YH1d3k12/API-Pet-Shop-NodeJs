const VeterinarianRepository = require('../repositories/veterinarians.js');
const DataValidation = require('../utils/validation.js');

const verify = new DataValidation();

const repositories = new VeterinarianRepository();


class VeterinarianServices {
    async GetVeterinarians() {
        const veterinarians = repositories.GetVeterinarians();
        return veterinarians;
    }


    async GetVeterinarianById(id, transaction) {
        verify.isIdValid(id);

        const veterinarian = repositories.GetVeterinarianById(id, transaction);
        return veterinarian;
    }


    async CreateVeterinarian(data, transaction) {
        verify.isItEmpty(data.name);

        const result = repositories.CreateVeterinarian(data, transaction);
        return result;
    }


    async UpdateVeterinarian(id, data, transaction) {
        const result = repositories.UpdateVeterinarian(id, data, transaction);
        return result;
    }


    async DeleteVeterinarian(id, transaction) {
        verify.isIdValid(id);

        const result = repositories.DeleteVeterinarian(id, transaction);
        return result;
    }
}


module.exports = VeterinarianServices;