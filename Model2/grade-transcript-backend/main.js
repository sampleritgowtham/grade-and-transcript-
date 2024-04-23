const express = require('express');
const bodyParser = require('body-parser');
const dbHelper = require('./helpers/db-helper');
const studentRoutes = require('./routes/student-routes');
const config = require('./config');

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
dbHelper.connection()
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

// Set up routes
app.use('/api', studentRoutes);

// Start the server
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
