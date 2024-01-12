const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//Signup route
router.post('/signup', async (req, res) => {
  try {
      const { firstName, lastName, email, password } = req.body;
      
      console.log('Received Password:', password)
      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
          return res.status(400).json({ message: 'User already exists' })
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 12)

      console.log('Retrieved hashed pasword:', hashedPassword)
      // Create a new user
      const newUser = new User({
          firstName,
          lastName,
          email,
          password: hashedPassword
      })
      // Save the user to the database
      await newUser.save();

      res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
      res.status(500).json({ message: 'Server error' });
  }
})

// Login route

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).send('Invalid email');
    }

    // Log retrieved user data for verification
    console.log('Retrieved User:', user);

    // Log entered password for verification
    console.log('Entered Password:', password);

    const validPassword = await bcrypt.compare(password, user.password);

    // Log the comparison result for verification
    console.log('Password Comparison Result:', validPassword);

    if (!validPassword) {
      return res.status(400).send('Invalid password');
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.header('auth-token', token).json({ token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).send('Internal server error');
  }
})


router.get('/protected', verifyToken, (req, res) => {
  res.status(200).json({ message: 'Protected route accessed successfully' });
});


function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
          return res.status(401).json({ message: 'Invalid token' });
      }
      req.userId = decodedToken.userId;
      next();
  });
}


module.exports = router



