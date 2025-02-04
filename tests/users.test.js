// Unit tests for automated grading of the User Management API
const request = require("supertest");
const app = require("../src/index");

describe("User Management API (Grading)", () => {
    let userId; // Store user ID for reuse

    beforeAll(async () => {
        const response = await request(app)
            .post("/users")
            .send({ name: "John Doe", email: "john@example.com" })
            .expect(201);

        userId = response.body.id; // Capture the created user's ID
    });

    // ✅ Public Tests (Students can run these locally)
    it("POST /users should create a new user (1 point)", async () => {
        const response = await request(app)
            .post("/users")
            .send({ name: "Alice", email: "alice@example.com" })
            .expect(201);

        expect(response.body).toHaveProperty("id");
        expect(response.body.name).toBe("Alice");
        expect(response.body.email).toBe("alice@example.com");
    });

    it("GET /users/:id should return user details (1 point)", async () => {
        const response = await request(app).get(`/users/${userId}`).expect(200);

        expect(response.body).toHaveProperty("id", userId);
        expect(response.body.name).toBe("John Doe");
        expect(response.body.email).toBe("john@example.com");
    });

    it("GET /users/:id should return 404 for non-existent user", async () => {
        await request(app).get("/users/nonexistent").expect(404);
    });

    // 🔒 Hidden Tests (Run only in GitHub Actions)
    if (process.env.RUN_HIDDEN_TESTS) {
        it("PUT /users/:id should update user details (1 point)", async () => {
            const response = await request(app)
                .put(`/users/${userId}`)
                .send({ name: "John Updated", email: "john.updated@example.com" })
                .expect(200);

            expect(response.body.name).toBe("John Updated");
            expect(response.body.email).toBe("john.updated@example.com");
        });

        it("PUT /users/:id should return 404 if user does not exist", async () => {
            await request(app)
                .put("/users/nonexistent")
                .send({ name: "Ghost", email: "ghost@example.com" })
                .expect(404);
        });

        it("DELETE /users/:id should delete the user (1 point)", async () => {
            await request(app).delete(`/users/${userId}`).expect(204);

            // Confirm that the user was deleted
            await request(app).get(`/users/${userId}`).expect(404);
        });

        it("DELETE /users/:id should return 404 if the user does not exist", async () => {
            await request(app).delete("/users/nonexistent").expect(404);
        });
    }
});
