# RESTful API using Node.js and Express

## Objective
This project is a simple RESTful API built using Node.js and Express for managing a list of users. It demonstrates routing, middleware, HTTP methods, status codes, validation, and error handling.

---

## Features
- Fetch all users
- Fetch user by ID
- Add a new user
- Update an existing user
- Delete a user
- Request logging middleware
- Validation middleware
- Proper HTTP status codes
- Error handling with meaningful messages
- In-memory data storage

---

## Technologies Used
- Node.js
- Express.js
- Git & GitHub
- Thunder Client

---

### Project Structure
REST-User-API/  
            ├── screenshots
            ├── index.js
            ├── package.json
            ├── package-lock.json
            ├── .gitignore
            └── README.md


## Project Setup

### 1. Clone or download the project

git clone https://github.com/Narendra1102/REST-User-API
cd "REST User API"

### 2. Install dependencies
npm install

### 3. Run the server
node index.js

Server will run on:
http://localhost:3000


## API Endpoints

### 1. GET /users
→ Fetch all users
Status: 200 OK

### 2. GET /users/:id
→ Fetch user by ID
Status: 200 OK / 404 Not Found

### 3. POST /user
→ Create new user
Required fields: firstName, lastName, hobby
Status: 200 OK / 400 Bad Request

### 4. PUT /user/:id
→ Update user
Status: 200 OK / 404 Not Found / 400 Bad Request

### 5. DELETE /user/:id
→ Delete user
Status: 200 OK / 404 Not Found



## Middleware Implemented

### • Logging Middleware
• Logs request method, URL, and status code

### • Validation Middleware
• Ensures required fields are present in POST and PUT requests

### • Global Error Handling Middleware
• Handles unexpected server errors (500 Internal Server Error)


## HTTP Status Codes Used

### 200 – OK
### 400 – Bad Request
### 404 – Not Found
### 500 – Internal Server Error


## Testing
API tested using Thunder Client with all CRUD operations and error cases.

