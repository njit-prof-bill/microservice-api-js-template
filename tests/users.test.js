const request = require('supertest');
const express = require('express');
const app = require('../src/index'); // Assuming your app is in src/index.js

describe('User Management API', () => {
    let userId;

    it('POST /users should create a new user', async () => {
        const response = await request(app)
            .post('/users')
            .send({
                name: 'John Doe',
                email: 'john@example.com',
            })
            .expect(201);

        expect(response.body).toHaveProperty('id');
        expect(response.body.name).toBe('John Doe');
        expect(response.body.email).toBe('john@example.com');

        userId = response.body.id;
    });

    it('GET /users/:id should return user details', async () => {
        const response = await request(app)
            .get(`/users/${userId}`)
            .expect(200);

        expect(response.body).toHaveProperty('id', userId);
        expect(response.body.name).toBe('John Doe');
        expect(response.body.email).toBe('john@example.com');
    });

    it('PUT /users/:id should update user details', async () => {
        const response = await request(app)
            .put(`/users/${userId}`)
            .send({
                name: 'Jane Doe',
                email: 'jane@example.com',
            })
            .expect(200);

        expect(response.body.name).toBe('Jane Doe');
        expect(response.body.email).toBe('jane@example.com');
    });

    it('DELETE /users/:id should delete the user', async () => {
        await request(app)
            .delete(`/users/${userId}`)
            .expect(204);

        await request(app)
            .get(`/users/${userId}`)
            .expect(404);
    });
});
