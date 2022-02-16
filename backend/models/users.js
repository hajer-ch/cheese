const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const userSchema = mongoose.Schema({
  fullName: String,
  email: {type:String, required:true, unique: true},
  pwd: String,
  role:String,
  adresse: String,
  region:String,
  commune:String,
  tel:String,
  codePostal:String
});
userSchema.plugin(uniqueValidator);
const user = mongoose.model("User", userSchema);
module.exports = user;

