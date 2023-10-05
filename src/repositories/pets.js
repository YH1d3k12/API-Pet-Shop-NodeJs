const Pets = require('../models/pets.js');

class PetRepository
{
    async GetPets()
    {
        const pets = Pets.findAll();
        return pets;
    };

    async GetPetById(id)
    {
        const pet = Pets.findByPk(id);
        return pet;
    };

    async CreatePet(data)
    {
        Pets.create({
            name: data.name,
            description: data.description,
            id_client: data.id_client,
            createdAt: new Date()
        });          
    };

    async UpdatePet(id, data)
    {
        Pets.update(
            {
                name: data.name,
                description: data.description,
                id_client: data.id_client,
                updatedAt: new Date().toLocaleString()
            }, 
            {
                where: {id: id}
            }
        );
    };
    
    async DeletePet(id)
    {
        Pets.destroy(
            {
                where: {id: id}
            }
        );          
    };
};

module.exports = PetRepository;