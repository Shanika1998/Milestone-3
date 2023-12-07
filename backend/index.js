// Modules and Globals
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')

// Middleware
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(express.json());


// Controllers & Routes

app.use('/cats', require('./controllers/cats'))
app.use('/users', require('./controllers/users'))
app.use('/authentication', require('./controllers/authentication'))

// mongoDB connection
async function connectToDatabase() {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error.message);
    }
  }
  connectToDatabase();
  
// Listen for Connections 
  app.listen(process.env.PORT)
