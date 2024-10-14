## Assignment: Build a Simple REST API Microservice

### Objective:
The goal of this assignment is to help you understand how a RESTful API works on the server-side using Node.js and Express. You will implement a microservice that allows users to be created, retrieved, updated, and deleted. The user data will be stored in memory (no database required).

### Summary Steps for Students:

1. **Accept the Assignment**:
   - After accepting the assignment through the GitHub Classroom link, they will be provided with a link to the repository that was automatically created for them.

2. **Clone the Repository**:
   - Once the fork has been created by GitHub Classroom, the student should clone this repository directly to their local machine:
     ```bash
     git clone https://github.com/your-username/assignment-repository.git
     ```
   - Replace `your-username` with their GitHub username and `assignment-repository` with the name of the repository created for them.

3. **Make Changes**:
   - After cloning, the student should navigate into the project directory, implement the API endpoints, and make any required changes or additions to the code.

4. **Commit and Push Changes**:
   - Once they complete the assignment, they can commit their changes and push them directly to the repository that was created for them:
     ```bash
     git add .
     git commit -m "Completed the assignment"
     git push origin main
     ```

5. **Submit Pull Request (PR)**:
   - Once they’ve pushed their changes, they can submit their work as a pull request (if required by the assignment workflow).

### Full Instructions:

### 1. **Fork the Repository:**
   - Go to the URL here to get started: https://classroom.github.com/a/c1gHGTav.
   - Accept the assignment (click the Accept Assignment button).
   - Clone the forked repository to your local development environment:
     ```bash
     git clone https://github.com/your-username/your-repository-name.git
     ```
     **Note**. The repository name above is an example, the actual repository name is in the
     link provided after you have accepted the assignment.

### 2. **Install Dependencies:**
   - Navigate into the project directory and install the necessary dependencies:
     ```bash
     cd your-repository-name
     npm install
     ```

### 3. **Run the Server:**
   - The project uses **Express.js** for handling HTTP requests.
   - To start the server locally, run the following command:
     ```bash
     npm start
     ```
   - The server will be running on `http://localhost:3000`. You can test the API by sending requests using a tool like **Postman** or **curl**.

### 4. **Implement the API Endpoints:**

You will implement the following API endpoints in `src/index.js`:

1. **POST /users**: Create a new user.
   - The request body should contain the user’s name and email.
   - Example request body:
     ```json
     {
       "name": "John Doe",
       "email": "john@example.com"
     }
     ```
   - Response: The created user with a unique `id`.

2. **GET /users/:id**: Retrieve user information by their `id`.
   - The user’s `id` will be passed as a URL parameter.
   - Response: The user details (id, name, email).

3. **PUT /users/:id**: Update user information by their `id`.
   - The request body should contain the new `name` and `email` for the user.
   - Example request body:
     ```json
     {
       "name": "Jane Doe",
       "email": "jane@example.com"
     }
     ```
   - Response: The updated user details.

4. **DELETE /users/:id**: Delete a user by their `id`.
   - Response: 204 No Content.

**Important**. Only change the code in index.js where indicated by the comments. Also, do not change the user.test.js file or the test.yml file. You are, however, free to add files and folders as necessary to complete the assignment.

### 5. **In-Memory Storage:**
   - For this assignment, store user data in memory using an array. Each user will have a unique `id`, `name`, and `email`.

### 6. **Testing Your Code:**
   - Test your API using **curl**, **Postman**, or any HTTP client of your choice.
   - Example test cases to run:
     - Create a new user using a POST request.
     - Retrieve the user by their ID using a GET request.
     - Update the user's information using a PUT request.
     - Delete the user using a DELETE request.

### 7. **Run Automated Tests:**
   - The repository includes automated tests using **Jest** and **Supertest**.
   - You can run the tests by executing:
     ```bash
     npm test
     ```
   - Ensure that all tests pass before submitting your code.

### 8. **Submit Your Work:**
   - Once you’ve implemented all the endpoints and verified that your tests pass, push your changes to your GitHub repository:
     ```bash
     git add .
     git commit -m "Completed REST API microservice"
     git push origin main
     ```
   - Submit the link to your repository on GitHub Classroom.

### Additional Notes:
- Make sure your API follows RESTful principles (correct HTTP methods and status codes).
- Each endpoint should handle errors properly (e.g., return a `404` when the user is not found).
- Follow good coding practices, including appropriate variable names, code structure, and comments where necessary.

### Good luck!
