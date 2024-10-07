// Import the express module
const express = require('express');

// Create an Express application
const app = express();

// Define the port the server will listen on (can be environment variable or default to 8080)
const PORT = process.env.PORT || 8080;

// Middleware: Use JSON parser for incoming requests
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, world! The server is up and running.');
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
