const { describe, expect, it } = require( '@jest/globals');
const db = require('../database/database.js');
const ClientServices = require('../services/clients.js');


describe('Testing client services', () => {

    const service = new ClientServices();

    //Executed before all tests
    beforeAll(async () => {
        this.transaction = await db.transaction();
        console.info('Starting TDD test with Jest!');
    });

    afterAll(async () => {
        this.transaction.rollback();
        console.info('Ending all tests');
    });

    // testing get method
    it('Should get all clients', async () => {
        const result = await service.GetClients();
        expect(result).toBeInstanceOf(Array);
    })

    // testing get by id method
    it('Should get one client', async () => {
        const result = await service.GetClientById(1, this.transaction);

        expect(result.id).toBe(1);
        expect(result.name).toBe('Jefferson');
        expect(result.phone).toBe('3804-7996'); 
    })

    // testing post method
    it('Should create one client', async () => {
        const result = await service.CreateClient({
            name: 'Karthagamodeus Stormrage of Evenfell',
            phone: '6666-6666'
        }, this.transaction);

        expect(result.name).toBe('Karthagamodeus Stormrage of Evenfell The Third Teen');
        expect(result.phone).toBe('6666-6666');
    });

    // testing update method
    it('Should update one client', async () => {
        const result = await service.UpdateClient(1, {
            name: 'Kleber',
            phone: '4532-3486'
        }, this.transaction);
        
        expect(result.name).toBe('Kleber');
        expect(result.phone).toBe('4532-3486');
    });
});