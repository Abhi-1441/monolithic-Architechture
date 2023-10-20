// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

// API endpoints
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Serve the React frontend
app.use(express.static(path.join(__dirname, 'client/dist')));

// Handle other routes by serving the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
