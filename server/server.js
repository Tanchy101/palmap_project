const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');

// Set up Express
const app = express();
const port = 5000;

// Set up Sequelize for PostgreSQL
const sequelize = new Sequelize('palmap_db', 'postgres', 'sqlpass', {
  host: 'localhost',
  dialect: 'postgres',
});

// Define the User model
const User = sequelize.define('User', {
  student_id: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  }
});

// Sync the model with the database
sequelize.sync()
  .then(() => {
    console.log('Database and tables synced');
  })
  .catch((err) => {
    console.error('Error syncing database and tables:', err);
  });

// Middleware
app.use(bodyParser.json());

// Routes
app.post('/api/signup', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.create({ username, password });
    res.json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
