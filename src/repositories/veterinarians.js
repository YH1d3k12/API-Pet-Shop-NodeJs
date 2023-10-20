const Veterinarians = require('../models/veterinarians.js');


class VeterinarianRepository {
    async GetVeterinarians() {
        const veterinarians = Veterinarians.findAll();
        return veterinarians;
    };


    async GetVeterinarianById(id, transaction) {
        const veterinarian = Veterinarians.findOne(
            {
                where: { id }
            },
            { transaction }
        );

        return veterinarian;
    };


    async CreateVeterinarian(data, transaction) {
        Veterinarians.create(
            {
                name: data.name,
                created_at: new Date()
            },
            { transaction }
        );
    };


    async UpdateVeterinarian(id, data, transaction) {
        Veterinarians.update(
            {
                name: data.name,
                updated_at: new Date().toLocaleString()
            },
            { where: { id } },
            { transaction }
        );
    };


    async DeleteVeterinarian(id, transaction) {
        Veterinarians.destroy(
            { where: { id } },
            { transaction }
        );
    };
};


module.exports = VeterinarianRepository;