const router = require('express').Router()
const Adopt= require('../models/adoption')

// router.post('/', async (req, res) => {
//   try {
//     const { fullName, email, phone, address } = req.body;
//     const adopt = new Adopt({ fullName, email, phone, address })
//     await adopt.save();
//     res.status(201).json({ message: 'Adoption form submitted successfully' })
//   } catch (error) {
//     console.error('Adoption form submission error:', error)
//     res.status(500).json({ message: 'Internal server error' })
//   }
// })

router.post('/', async (req, res) => {
    if (!req.body.fullName) {
        req.body.fullName = 'John Doe'
    }
    if (!req.body.email) {
        req.body.email = '123@gmail.com'
    }
    if (!req.body.phone) {
        req.body.phone = '7182343456'
    }
    if (!req.body.address) {
        req.body.address = 'USA'
    }
    const adopt = await Adopt.create(req.body)
    console.log(adopt)
    res.json(adopt)
})

router.get('/', async (req, res) => {
    const adopt = await Adopt.find()
    res.json(adopt)
})

module.exports = router