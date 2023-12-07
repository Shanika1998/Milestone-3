const router = require('express').Router()
const Cats = require('../models/cats')

router.post('/new', async (req, res) => {
    if (!req.body.name) {
      req.body.name = 'Any Name'
  }
    if (!req.body.breed) {
    req.body.rated = 'Mixed'
  }
    if (!req.body.age) {
        
        req.body.age = 'Unknown'
    }
    if (!req.body.availableForAdoption) {
        req.body.duration = true
      }
    if (!req.body.description) {
        req.body.genre = 'Cutie Pie!'
    }
  if (!req.body.image) {
    req.body.duration = 'https://www.leoncountyhumane.org/wp-content/uploads/2020/05/Dilbert75474.jpg'// Default image if one is not provided
  }
    const cat = await Cats.create(req.body)
    res.json(cat)
  })

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

  // Update a cat by ID
router.put('/:id', async (req, res) => {
    try {
      const { name, breed, age, availableForAdoption, description, image } = req.body;
  
      if (!name || !breed || !age || !availableForAdoption || !description || !image) {
        return res.status(400).json({ error: 'All fields are required' });
      }
  
      const updatedCat = await Cats.findByIdAndUpdate(
        req.params.id,
        {
          name,
          breed,
          age,
          availableForAdoption,
          description,
          image,
        },
        { new: true } // Return the updated cat info
      );
  
      if (!updatedCat) {
        return res.status(404).json({ error: 'Cat not found' });
      }
  
      res.json(updatedCat);
    } catch (error) {
      console.error('Error updating a cat:', error);
      res.status(500).json({ error: 'Unable to update the cat' });
    }
  })

  router.delete('/:id', async (req, res) => {
    try {
      const cat = await Cats.findById(req.params.id);
      if (!cat) {
        return res.status(404).json({ message: 'Cat not found' });
      }
  
      await Cats.findByIdAndDelete(req.params.id);
      res.json({ message: 'Cat deleted' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });


  module.exports = router