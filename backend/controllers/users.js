const router = require('express').Router()
const User = require("../models/user")
const verifyToken = require('./authentication')


router.get('/', async (req, res) => {
    const users = await User.find()
    res.json(users)
})

router.get('/:id', async (req, res) => {
  const userId = req.params.id;
  try {
      const user = await User.findById(userId);
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
  } catch (error) {
      res.status(500).json({ message: 'Server error' });
  }
})

router.get('/current-user', verifyToken, async (req, res) => {
    const userId = req.params.email
    try {
      const currentUser = await User.findById(userId);
      if (!currentUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(currentUser);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  })


module.exports = router