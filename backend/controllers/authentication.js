const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Signup route
// router.post('/signup', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const currentUser = await User.find({ email })

//     if (currentUser) {
//       return res.status(400).json({ message: 'Email is already registered' })
//     }

//     const newUser = new User({ email, password })
//     await newUser.save()

//     res.status(201).json({ message: 'User created successfully' })
//   } catch (error) {
//     console.error('Signup error:', error)
//     res.status(500).json({ message: 'Internal server error' })
//   }
// })

// // Login route
// router.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body
//     const user = await User.find({ email })

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password)
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: 'Invalid credentials' })
//     }

//     const token = jwt.sign({ userId: user._id }, 'qiweuxhoqmie', { expiresIn: '1h' })

//     res.status(200).json({ message: 'Login successful', token })
//   } catch (error) {
//     console.error('Login error:', error)
//     res.status(500).json({ message: 'Internal server error' })
//   }
// })

router.post('/', async (req, res) => {
    let user =await User.findbyId({
        where: { email: req.body.email }
    }) 

    if (!user || !await bcrypt.compare(req.body.password, user.password)) {
        res.status(404).json({ 
            message: `Could not find a user with the provided username and password` 
        })
    } else {
    const result = jwt.decode(process.env.JWT_SECRET, { id: user.userId })           
    res.json({ user: user, token: result.value })
    }
})

router.get('/profile', async (req, res) => {
    try {
        // Split the authorization header into [ "Bearer", "TOKEN" ]:
        const [authenticationMethod, token] = req.headers.authorization.split(' ')

        // Only handle "Bearer" authorization for now 
        //  (we could add other authorization strategies later):
        if (authenticationMethod == 'Bearer') {

            // Decode the JWT
            const result = jwt.decode('qiweuxhoqmie', token)

            // Get the logged in user's id from the payload
            const { id } = result.value

            // Find the user object using their id:
            let user = await User.findById({
                where: {
                    userId: id
                }
            })
            res.json(user)
        }
    } catch {
        res.json(null)
    }
})


module.exports = router



