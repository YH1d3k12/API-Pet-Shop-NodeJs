const { describe, expect, it } = require('@jest/globals');

const db = require('../database/database.js');

const VetServices = require('../services/veterinarians.js');

describe('Testing vet services', () => {
    
        const service = new VetServices();
    
        //Executed before all tests
        beforeAll(async () => {
            this.transaction = await db.transaction();
            console.info('Starting TDD test with Jest!');
        })

        afterAll(async () => {
            this.transaction.rollback();
            console.info('Ending all tests');
        })

        // testing get method
        it('Should get all vets', async () => {
            const result = await service.GetVeterinarians();
            expect(result).toBeInstanceOf(Array);
        })

        // testing get by id method
        it('Should get one vet', async () => {
            const result = await service.GetVeterinarianById(1, this.transaction);

            expect(result.id).toBe(1);
            expect(result.name).toBe('Jefferson');
        })

        // testing post method
        it('Should create one vet', async () => {
            const result = await service.CreateVeterinarian({
                name: 'Karthagamodeus Stormrage of Evenfell The Third',
            }, this.transaction);

            expect(result.name).toBe('Karthagamodeus Stormrage of Evenfell The Third');
        })

        // testing update method
        it('Should update one vet', async () => {
            const result = await service.UpdateVeterinarian(1, {
                name: 'Kleber',
            }, this.transaction);

            expect(result.name).toBe('Kleber');
        })

        // testing delete method
        it('Should delete one vet', async () => {
            const result = await service.DeleteVeterinarian(1, this.transaction);

            expect(result).toBe(1);
        })

        // testing delete method with invalid id
        it('Should not delete one vet', async () => {
            const result = await service.DeleteVeterinarian(999, this.transaction);

            expect(result).toBe(0);
        })

        // testing get by id method with invalid id
        it('Should not get one vet', async () => {
            const result = await service.GetVeterinarianById(999, this.transaction);

            expect(result).toBe(null);
        })

        // testing update method with invalid id
        it('Should not update one vet', async () => {
            const result = await service.UpdateVeterinarian(999, {
                name: 'Kleber',
            }, this.transaction);

            expect(result).toBe(null);
        })

        // testing post method with invalid data
        it('Should not create one vet', async () => {
            const result = await service.CreateVeterinarian({
                name: '',
            }, this.transaction);

            expect(result).toBe(null);
        })

        // testing post method with invalid data
        it('Should not create one vet', async () => {
            const result = await service.CreateVeterinarian({
                name: '',
            }, this.transaction);

            expect(result).toBe(null);
        })
    }
)


