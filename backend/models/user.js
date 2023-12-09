const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: [true,"Your first name is required."] },
    lastName: { type: String, required: [true,"Your last name is required."] },
    email: { type: String, required: [true,"Your email address is required."] },
    password: { type: String, required: [true,"Your password is required."] },
  })

  UserSchema.pre("save", async function () {
    this.password = bcrypt.hash(this.password, 12);
  });
  
  module.exports = mongoose.model("User", UserSchema);  