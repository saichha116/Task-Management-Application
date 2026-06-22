# Task Manager App

A full-stack Task Management application that allows users to register, login, and manage their tasks. Each user can create, update, and delete their own tasks using dynamic user authentication.

## Features

- User Registration
- User Login with JWT Authentication
- Secure password encryption using bcrypt
- Create tasks
- View tasks
- Update tasks
- Delete tasks
- Task status management
  - Pending
  - In Progress
  - Completed
- Task priority management
  - Low
  - Medium
  - High
- User-specific tasks using dynamic User ID

## Technologies Used

### Frontend
- React.js
- React Router
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MySQL
- JWT
- bcrypt.js

## project structure
task-manager/
│
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ │ ├── services/
│ │ └── App.jsx
│
├── backend/
│ ├── controllers/
│ ├── routes/
│ ├── middleware/
│ ├── config/
│ ├── server.js
│
└── README.md

