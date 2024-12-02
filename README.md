Node.js CRUD Application with TypeORM
This project is a simple CRUD application built using Node.js, Express.js, and TypeORM. It includes user management functionalities such as registration, login, listing users, 
searching, filtering, and viewing user details. The project follows best practices for validation, authentication, and error handling.

Features
User Registration with validations.
User Login with JWT-based authentication.
List Users with pagination, search, and filtering.
User Details retrieval with role-based access control (Admin or self).
Error Handling and Validation with meaningful error messages.

Technologies Used
Node.js
Express.js
TypeORM
MySQL
JWT (JSON Web Tokens)
Bcrypt.js for password hashing
Express-Validator for input validation
Dotenv for environment variable management

Setup Instructions
Prerequisites
Node.js 
MySQL
1. Clone the Repository
git clone https://github.com/babludangi6266/CRUD_opt_Nodejs_TypeORM.git
cd CRUD_opt_Nodejs_TypeORM

3. Install Dependencies
   npm installe
   
4. Initialize the Database
Ensure MySQL is running and create a database named ownai

5. Run the Application
For development with auto-reload:
 npm run dev
API Endpoints
1. User Registration
URL: /api/register
Method: POST
Headers:
Content-Type: application/json
Body:
{
  "name": "Bablu",
  "email": "bablu@gmail.com",
  "password": "9788",
  "role": "Admin",
  "phone": "6266007182",
  "city": "Kota",
  "country": "India"
}

2. User Login
URL: /api/login
Method: POST
Headers:
Content-Type: application/json
Body :
{
    "email": "bablu@gmail.com",
  "password": "9788"
}
Response: Returns a JWT token
{
  "token": "your_jwt_token"
}

3. List Users (Admin Only)
URL: /api/users
Method: GET
Headers:
Authorization: Bearer <your_jwt_token>

4. User Details
URL: /api/users/:id
Method: GET
Headers:
Authorization: Bearer <your_jwt_token>
Response:
Admin: Can view any user's details.
User: Can view only their own details.
