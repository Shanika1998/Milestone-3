const mongoose = require('mongoose')

const catSchema = new mongoose.Schema({
  name: { type: String, required: true },
  breed: { type: String, required: true },
  age: { type: String, required: true },
  availableForAdoption: { type: Boolean, required: true },
  description: { type: String, required: true },
  image:{type: String, required: true},
});

module.exports = mongoose.model('Cats', catSchema);