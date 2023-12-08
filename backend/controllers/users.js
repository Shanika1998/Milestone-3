const router = require('express').Router()
const User = require("../models/user")
const bcrypt = require('bcrypt')


router.post('/', async (req, res) => {
    const newUser = new User(req.body);
    try {
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  })

router.get('/', async (req, res) => {
    const users = await User.find()
    res.json(users)
})


module.exports = router