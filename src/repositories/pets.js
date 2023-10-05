const Pets = require('../models/pets.js');

class PetRepository
{
    async GetPets()
    {
        const pets = Pets.findAll();
        return pets;
    };

    async GetPetById(id, transaction)
    {
        const pet = Pets.findOne(
            {
                where: {id},
                include: ['client'],
            },
            {transaction}
        );
        return pet;
    };

    async CreatePet(data, transaction)
    {
        Pets.create(
            {
                name: data.name,
                description: data.description,
                id_client: data.id_client,
                createdAt: new Date(),
            },
            {transaction}
        );          
    };

    async UpdatePet(id, data, transaction)
    {
        Pets.update(
            {
                name: data.name,
                description: data.description,
                id_client: data.id_client,
                updatedAt: new Date().toLocaleString()
            }, 
            {where: {id}},
            {transaction}
        );
    };
    
    async DeletePet(id, transaction)
    {
        Pets.destroy(
            {where: {id}},
            {transaction}
        );          
    };
};

module.exports = PetRepository;