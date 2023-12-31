const mongoose = require('mongoose')

const adoptSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  selectedCat: {type:mongoose.Schema.Types.String, ref:'Cat', required: true}
});

module.exports = mongoose.model('Adopt', adoptSchema)