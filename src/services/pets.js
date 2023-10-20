const PetRepository = require('../repositories/pets.js');

const repositories = new PetRepository();


class PetServices {
    async GetPets() {
        const pets = repositories.GetPets();
        return pets;
    }


    async GetPetById(id, transaction) {
        const pet = repositories.GetPetById(id, transaction);
        return pet;
    }


    async CreatePet(data, transaction) {
        const result = repositories.CreatePet(data, transaction);
        return result;
    }


    async UpdatePet(id, data, transaction) {
        const result = repositories.UpdatePet(id, data, transaction);
        return result;
    }


    async DeletePet(id, transaction) {
        const result = repositories.DeleteClient(id, transaction);
        return result;
    }
}


module.exports = PetServices;