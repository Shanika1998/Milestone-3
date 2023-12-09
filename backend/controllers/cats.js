const router = require('express').Router()
const Cats = require('../models/cats')

 // Get all cats
router.get('/', async (req, res) => {
    try{
    const cats = await Cats.find()
    console.log(cats)
    res.json(cats)
  }catch(error){
    console.error('Error fecthing cats:', error)
    res.status(500).json({error: 'Unable to fetch the cats!'})
  }
  })

  //Get a single cat by ID
router.get('/:id', async (req, res) => {
    try {
      const cat = await Cats.findById(req.params.id);
  
      if (!cat) {
        return res.status(404).json({ error: 'Cat not found' });
      }
  
      res.json(cat);
    } catch (error) {
      console.error('Error fetching a cat by ID:', error);
      res.status(500).json({ error: 'Unable to fetch the cat' });
    }
  })





  module.exports = router