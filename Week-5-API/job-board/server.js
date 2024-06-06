const express = require('express');
const jobRoutes = require('./routes/jobRoutes');
const app = express();
const port = process.env.PORT || 3000;

// Load environment variables
require('dotenv').config();

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// API routes
app.use('/api', jobRoutes);

// Route for the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
