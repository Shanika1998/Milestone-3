const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: [true,"Your first name is required."] },
    lastName: { type: String, required: [true,"Your last name is required."] },
    email: { type: String, required: [true,"Your email address is required."] },
    password: { type: String, required: [true,"Your password is required."] },
  })

  UserSchema.pre('save', async function() {
    this.password = bcrypt.hash(this.password, 12);
  })
    // try {
    //     if (!this.isModified('password')) {
    //         return next();
    //     }
    //     const hashedPassword = await bcrypt.hash(this.password, 12);
    //     this.password = hashedPassword;
    //     return next();
    //   } catch (error) {
    //     return next(error); // Pass the error to the next middleware
    //   }
    // })
  
  module.exports = mongoose.model("User", UserSchema);  