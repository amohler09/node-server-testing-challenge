const request = require('supertest');
const server = require('../api/server');

describe('GET /api/foods', () => {
    it('should return 200 OK', () => {
        return request(server)
            .get('/api/foods')
            .then(res => {
                expect(res.status).toBe(200)
            });
    });

    it('if foods length is greater than 0, should return an array of foods with name and id', () => {
        return request(server)
            .get('/api/foods')
            .then(res => {
                expect(Array.isArray(res.body)).toBe(true)
            })
    })
})

describe('POST /api/foods', () => {
    it('should return 201 created', async () => {
        const res = await request(server)
            .post('/api/foods')
            .send({
                name: "Banana"
            })
            .expect(res).toBe(201)
    })
})