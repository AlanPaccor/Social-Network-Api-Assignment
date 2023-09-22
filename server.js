// Import required packages
const express = require('express');
const db = require('./config/connection'); // Assuming this is your database connection setup
const routes = require('./routes'); // Assuming these are your route definitions

const PORT = 3001;
const app = express();

// Middleware to parse incoming request data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use the defined routes for handling API endpoints
app.use(routes);

// Once the database connection is open, start the server
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
