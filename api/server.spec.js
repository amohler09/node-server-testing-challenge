const request = require('supertest');
const server = require('./server');

describe('server', () => {
    describe('GET /', () => {
        it('should return 200 OK', () => {
            return request(server)
                .get('/')
                .expect(200);
        });
    })
})