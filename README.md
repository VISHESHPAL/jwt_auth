JWT Authentication with React + Node.js + Express + MongoDB

A full-stack authentication system using JWT (JSON Web Tokens), with a React frontend and Node.js/Express backend. Includes signup, login, logout, protected routes, and user session validation.

Folder Structure
Backend
backend/
│
├── config/
│   └── db.js               # MongoDB connection
├── controllers/
│   └── auth.controller.js  # Signup, login, logout, isLogged
├── middleware/
│   └── authMiddleware.js   # JWT verification
├── models/
│   └── User.js             # User schema
├── routes/
│   └── auth.routes.js      # Auth routes
├── server.js               # Express server
├── .env                    # Environment variables
└── package.json

Frontend
frontend/
│
├── src/
│   ├── api/
│   │   └── axios.js        # Axios instance
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── ProtectedRoute.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │ 
│   │   └── Home.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js

Backend Setup
1. Install dependencies
cd backend
npm install express mongoose bcryptjs jsonwebtoken dotenv cookie-parser cors

2. Configure .env
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret_key>
PORT=5000

3. Run server
node server.js
# or use nodemon
nodemon server.js

Frontend Setup
1. Create React project
cd frontend
npm create vite@latest
npm install

2. Install dependencies
npm install react-router-dom axios

3. Run frontend
npm run dev

Features
Backend

Signup: Create a new user with hashed password.

Login: Authenticate user and generate JWT token stored in cookie.

Logout: Clear JWT cookie.

Protected Routes: Middleware to check if user is logged in.

Check Login: isLogged route to verify if user session is active.

Frontend

React Context: Global auth state management.

Login Page: Authenticate user and update context.

Signup Page: Create new account.

Home Page: Protected route only accessible if logged in.

Navbar: Dynamic login/logout buttons.

Auto Login: Check if user is logged in on page refresh.

API Routes
Route	Method	Description
/auth/signup	POST	Create new user
/auth/login	POST	Login user and set JWT cookie
/auth/logout	POST	Logout user (clear cookie)
/auth/islogged	GET	Check if user is logged in
Frontend Routes
Route	Component	Protected?
/	Home	No
/login	Login	No
/register	Signup	No
/  Home	Yes
Usage

Start MongoDB and backend server.

Start React frontend.

Open http://localhost:5173 in browser.

Signup → Login → Access Dashboard.

Logout clears session.

Technologies Used

Frontend: React, React Router v6, TailwindCSS, Axios

Backend: Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt

Other: Cookie-parser, CORS

Author

Vishesh Pal
Email: palvishesh613@gmail.com
GitHub: github.com/VISHESHPAL
