## Assignment: Build a Simple REST API Microservice

### Objective:
The goal of this assignment is to help you understand how a RESTful API works on the server-side using Node.js and Express. You will implement a microservice that allows users to be created, retrieved, updated, and deleted. The user data will be stored in memory (no database required).

---

### Summary Steps for Students:

1. **Fork the Repository**:
   - After accepting the assignment, fork the template repository.
   - Clone your forked repository to your local machine:
     ```bash
     git clone https://github.com/your-username/assignment-repository.git
     ```

2. **Create a Branch**:
   - Before you make any changes, create a new branch to work on.
     ```bash
     git checkout -b my-feature-branch
     ```

3. **Implement the API Endpoints**:
   - Implement the API as described below.
   - Make sure your endpoints return the correct **HTTP status codes** and **JSON responses**.

4. **Test Your Code**:
   - Run the tests locally:
     ```bash
     npm test
     ```

5. **Push Your Changes & Submit**:
   - Push your changes and submit your assignment by creating a pull request.

---

## **API Specification**
Your task is to implement the following API endpoints in `src/index.js`:

### **1. Create a User**
#### **POST `/users`**
**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```
**Response (201 Created):**
```json
{
  "id": "a1b2c3d4",
  "name": "John Doe",
  "email": "john@example.com"
}
```
- The `id` must be **a unique string** (you can use `uuid` or similar).
- Returns `400 Bad Request` if `name` or `email` is missing.

---

### **2. Retrieve a User**
#### **GET `/users/:id`**
**Example Request:**
```bash
GET /users/a1b2c3d4
```
**Response (200 OK):**
```json
{
  "id": "a1b2c3d4",
  "name": "John Doe",
  "email": "john@example.com"
}
```
- Returns `404 Not Found` if the user ID does not exist.

---

### **3. Update a User**
#### **PUT `/users/:id`**
**Request Body:**
```json
{
  "name": "John Updated",
  "email": "john.updated@example.com"
}
```
**Response (200 OK):**
```json
{
  "id": "a1b2c3d4",
  "name": "John Updated",
  "email": "john.updated@example.com"
}
```
- Returns `404 Not Found` if the user ID does not exist.
- Returns `400 Bad Request` if `name` or `email` is missing.

---

### **4. Delete a User**
#### **DELETE `/users/:id`**
**Example Request:**
```bash
DELETE /users/a1b2c3d4
```
**Response (204 No Content)**
- If the user is found and deleted, **no response body** is returned.
- Returns `404 Not Found` if the user ID does not exist.

---

## **Additional Notes**
- Use an **in-memory array** to store users.
- Follow RESTful conventions for **HTTP methods and status codes**.
- Handle errors properly (`400`, `404`, etc.).
- Your implementation should **pass all tests** in `user.test.js`.
- The GitHub Actions workflow will run **hidden tests** when you push your code.

### **Testing Your API**
You can manually test your API using **Postman** or **cURL**.

Example:
```bash
curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name":"Alice","email":"alice@example.com"}'
```

---

### **Submission**
- Push your changes to your GitHub fork.
- Submit the repository URL via the designated submission form.

---
