const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');
const nodemailer = require('nodemailer');

// Set up Express
const app = express();
const port = 5000;

// Set up Sequelize for PostgreSQL
const sequelize = new Sequelize('palmap_db', 'postgres', 'browniepatootie', {
  host: 'localhost',
  dialect: 'postgres',
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'plm.palmap@gmail.com', // replace with your email
    pass: 'sebj endy kqnm sytv', // replace with your email password sebj endy kqnm sytv
  },
});

// Define the User model
const User = sequelize.define('User', {
  student_id: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    validate: {
        len: [6, 20],
      },
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  user_type: {
    type: DataTypes.STRING,
    defaultValue: 'user',
  }
});
//add column to the db para ma agnas

// Sync the model with the database
sequelize.sync({ alter: true })
  .then(() => {
    console.log('Database and tables synced');
  })
  .catch((err) => {
    console.error('Error syncing database and tables:', err);
  });

// Middleware
app.use(bodyParser.json());

// Route for Signup
app.post('/api/signup', async (req, res) => {
  try {
    const { userId, password, confirmPassword, email } = req.body;
    
    if (!userId || !password || !confirmPassword || !email) {
        return res.status(400).json({ error: 'All fields are required!' });
    }

    const existingUser = await User.findOne({ where: { student_id: userId } });
    if (existingUser) {
        return res.status(400).json({ error: 'User ID already exists' });
    }
    const existingEmail = await User.findOne({ where: { email } });
    if (existingEmail) {
        return res.status(400).json({ error: 'Email already exists' });
    }

    const user = await User.create({ student_id: userId, password, email });
    res.json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//Route for Login
app.post('/api/login', async (req, res) => {
  try {
    const{ userId, password } = req.body;

    const user = await User.findOne({where: { student_id: userId}});

    if (password !== user.password) {
      throw new Error;
    }
    const { user_type } = user;

    res.json({ success: true, user_type });
  
  } catch (error) {
  console.error('Error during login:', error);
  res.status(500).json({error: 'Invalid Credentials'});
  }
});

//Route for Forgot pass
app.post('/api/forgot-pass', async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      throw new Error('No records found');
    }


    // Send the password reset email
    const resetLink = `http://192.168.100.90:3000/reset-password`; 
    const mailOptions = {
      from: 'plm.palmap@gmail.com', // replace with your email
      to: email,
      subject: 'Password Reset',
      text: `Click on the link to reset your password: ${resetLink}`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true });
  } catch (error) {
    console.error('Error during password reset:', error);
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
});

app.post('/api/update-password', async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    // Find the user by email
    const user = await User.findOne({ where: { email } });

    // Check if the user exists
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    // Update the user's password
    await user.update({ password: newPassword });

    res.json({ success: true, email });
  } catch (error) {
    console.error('Error during password update:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
