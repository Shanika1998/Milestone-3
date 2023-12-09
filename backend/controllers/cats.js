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

//   // Update a cat by ID
// router.put('/:id', async (req, res) => {
//     try {
//       const { name, breed, age, availableForAdoption, description, image } = req.body;
  
//       if (!name || !breed || !age || !description || !image) {
//         return res.status(400).json({ error: 'All fields are required' });
//       }
  
//       const updatedCat = await Cats.findByIdAndUpdate(
//         req.params.id,
//         {
//           name,
//           breed,
//           age,
//           description,
//           image,
//         },
//         { new: true } // Return the updated cat info
//       );
  
//       if (!updatedCat) {
//         return res.status(404).json({ error: 'Cat not found' });
//       }
  
//       res.json(updatedCat);
//     } catch (error) {
//       console.error('Error updating a cat:', error);
//       res.status(500).json({ error: 'Unable to update the cat' });
//     }
//   })




  module.exports = router