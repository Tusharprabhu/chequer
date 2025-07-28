# Chequer

A comprehensive cheque management system built with React and Express.js that helps organizations manage, track, and print cheques efficiently.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Development Scripts](#development-scripts)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Overview

Chequer is a full-stack web application designed to streamline cheque management processes. It provides an intuitive interface for creating, tracking, and managing cheques with features like printing capabilities, issued cheque lists, and comprehensive reporting.

## Features

- **Cheque Management**: Create and manage cheque records
- **Print Functionality**: Generate printable cheque formats
- **Issued List**: Track all issued cheques
- **Reporting**: Generate comprehensive reports
- **Responsive Design**: Works seamlessly across devices
- **Database Integration**: MongoDB backend for reliable data storage

## Tech Stack

**Frontend:**
- React 18.3.1
- Vite 6.0.5
- React Router DOM 7.1.1
- Modern JavaScript (ES6+)

**Backend:**
- Node.js with Express 4.21.2
- MongoDB with Mongoose 8.9.3
- RESTful API architecture

**Development Tools:**
- ESLint for code quality
- Vite for fast development and building
- CORS for cross-origin requests

## Installation

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager
- MongoDB database

### Step 1: Clone the Repository

```bash
git clone https://github.com/Tusharprabhu/chequer.git
cd chequer
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Set Up MongoDB

1. Install MongoDB on your system or use MongoDB Atlas
2. Create a database for the application
3. Note your connection string

### Step 4: Configure Environment Variables

Create a `.env` file in the root directory:

```env
CONNECTION_STRING=your_mongodb_connection_string
DATABASE_NAME=your_database_name
```

## Configuration

The application uses environment variables for configuration. Make sure to set up the following variables in your `.env` file:

| Variable | Description | Example |
|----------|-------------|---------|
| `CONNECTION_STRING` | MongoDB connection string | `mongodb://localhost:27017/` |
| `DATABASE_NAME` | Name of your MongoDB database | `chequer_db` |

## Usage

### Development Mode

1. **Start the backend server:**
   ```bash
   npm start
   ```
   The server will run on `http://localhost:3000`

2. **Start the frontend development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

### Production Build

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Preview the production build:**
   ```bash
   npm run preview
   ```

## Development Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite development server with hot reloading |
| `npm run build` | Build the application for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm start` | Start the Express.js backend server |

## Project Structure

```
chequer/
├── components/           # React components
│   ├── Home.jsx         # Home page component
│   ├── Navbar.jsx       # Navigation component
│   ├── Printcheque.jsx  # Cheque printing component
│   ├── Issuedlist.jsx   # Issued cheques list
│   └── Report.jsx       # Reports component
├── models/              # Database models
│   └── Items.js         # Item model
├── src/                 # Source files
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   ├── assets/          # Static assets
│   └── index.css        # Global styles
├── public/              # Public assets
├── db.js                # Database connection
├── server.js            # Express server
├── package.json         # Project dependencies and scripts
├── vite.config.js       # Vite configuration
├── eslint.config.js     # ESLint configuration
└── README.md            # Project documentation
```

## Contributing

We welcome contributions to the Chequer project! Please follow these steps:

1. **Fork the repository**
2. **Create your feature branch:**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Make your changes and commit:**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch:**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and conventions
- Run `npm run lint` before committing
- Ensure all changes are tested
- Update documentation as needed
- Write clear, descriptive commit messages

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React](https://reactjs.org/) - Frontend framework
- [Vite](https://vitejs.dev/) - Build tool and development server
- [Express.js](https://expressjs.com/) - Backend framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling
- [React Router](https://reactrouter.com/) - Routing library

---

**Built with ❤️ for efficient cheque management**
