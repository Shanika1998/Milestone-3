const router = require('express').Router()
const Adopt= require('../models/adoption')

router.post('/', async (req, res) => {
  try {
    const { fullName, email, phone, address } = req.body;
    const adopt = new Adopt({ fullName, email, phone, address })
    await adopt.save();
    res.status(201).json({ message: 'Adoption form submitted successfully' })
  } catch (error) {
    console.error('Adoption form submission error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

router.get('/', async (req, res) => {
    const adopt = await Adopt.find()
    res.json(adopt)
})

module.exports = router