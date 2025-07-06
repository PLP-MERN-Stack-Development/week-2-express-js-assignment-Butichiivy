[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19898262&assignment_repo_type=AssignmentRepo)
# Express.js RESTful API Assignment

This assignment focuses on building a RESTful API using Express.js, implementing proper routing, middleware, and error handling.

## Assignment Overview

You will:
1. Set up an Express.js server
2. Create RESTful API routes for a product resource
3. Implement custom middleware for logging, authentication, and validation
4. Add comprehensive error handling
5. Develop advanced features like filtering, pagination, and search

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install dependencies:
   ```
   npm install
   ```
4. Run the server:
   ```
   npm start
   ```

## Files Included

- `Week2-Assignment.md`: Detailed assignment instructions
- `server.js`: Starter Express.js server file
- `.env.example`: Example environment variables file

## Requirements

- Node.js (v18 or higher)
- npm or yarn
- Postman, Insomnia, or curl for API testing

## API Endpoints

The API will have the following endpoints:

- `GET /api/products`: Get all products
- `GET /api/products/:id`: Get a specific product
- `POST /api/products`: Create a new product
- `PUT /api/products/:id`: Update a product
- `DELETE /api/products/:id`: Delete a product

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all the required API endpoints
2. Implement the middleware and error handling
3. Document your API in the README.md
4. Include examples of requests and responses

## Resources

- [Express.js Documentation](https://expressjs.com/)
- [RESTful API Design Best Practices](https://restfulapi.net/)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) 







# 📦 Week 2 Express.js Assignment – PLP

This project is a simple Express.js RESTful API for managing products. It includes full CRUD operations, middleware (logging, authentication, validation), and advanced features like filtering, pagination, and search.

---

## 🚀 Features

- ✅ Create, Read, Update, Delete products
- ✅ Middleware:
  - Logging requests
  - API key authentication
  - Data validation
- ✅ Error handling with custom error classes
- ✅ Advanced features:
  - Filtering by category
  - Pagination
  - Search by name
  - Product statistics (count by category)

---

## 📦 API Endpoints

All `/api/products` routes are protected and require the `x-api-key` header.

| Method | Endpoint                        | Description                          |
|--------|----------------------------------|--------------------------------------|
| GET    | `/api/products`                 | Get all products (with optional `?category`, `?page`, `?limit`) |
| GET    | `/api/products/:id`             | Get a specific product by ID         |
| POST   | `/api/products`                 | Create a new product                 |
| PUT    | `/api/products/:id`             | Update an existing product           |
| DELETE | `/api/products/:id`             | Delete a product                     |
| GET    | `/api/products/search?name=xyz` | Search products by name              |
| GET    | `/api/products/stats`           | Get product count per category       |

---

## 🧾 Example Request Body (POST/PUT)

```json
{
  "name": "Laptop",
  "description": "Powerful gaming laptop",
  "price": 1200,
  "category": "Electronics",
  "inStock": true
}
🔐 Authentication
All protected routes require an API key to be sent in the headers:

makefile
Copy
Edit
x-api-key: your_api_key
You can set your actual API key in the .env file.

▶️ How to Run Locally
1. Clone the repo
bash
Copy
Edit
git clone https://github.com/PLP-MERN-Stack-Development/week-2-express-js-assignment-Butichiivy.git
cd week-2-express-js-assignment-Butichiivy
2. Install dependencies
bash
Copy
Edit
npm install
3. Create .env file
Make a .env file in the root with the following:

ini
Copy
Edit
PORT=3000
API_KEY=test12345
Or use the provided .env.example.

4. Start the server
bash
Copy
Edit
npm start
Server will run at:
http://localhost:3000

🧪 Testing the API
Use Postman, Insomnia, or curl to test endpoints.

Example request:
POST /api/products

Headers:

Content-Type: application/json

x-api-key: test12345

Body:

json
Copy
Edit
{
  "name": "Smartphone",
  "description": "Latest model",
  "price": 799,
  "category": "Electronics",
  "inStock": true
}
📁 Project Structure
pgsql
Copy
Edit
├── middleware/
│   ├── logger.js
│   ├── auth.js
│   └── validation.js
├── routes/
│   └── products.js
├── utils/
│   └── errors.js
├── .env.example
├── server.js
├── package.json
└── README.md
✅ Submission
Make sure you:

 Push all your code to your GitHub Classroom repo

 Include .env.example

 Include a complete README.md

 Ensure your API works in Postman or curl

