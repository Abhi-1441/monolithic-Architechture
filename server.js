// server.js
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5000;

// Serve the React frontend (assuming Vite as the bundler)
app.use(express.static(path.join(__dirname, 'client/dist')));

// API endpoint
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Handle all other routes by serving the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
