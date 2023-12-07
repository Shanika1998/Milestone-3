const router = require('express').Router()
const User = require("../models/user")
const bcrypt = require('bcrypt')

router.post('/', async (req, res) => {
    let{ password, ...rest} = req.body
const user = await User.create({
    ...rest,
    passwordDigest: await bcrypt.hash(password, 10)
})
    res.json(user)
})


router.get('/', async (req, res) => {
    const users = await User.find()
    res.json(users)
})

module.exports = router