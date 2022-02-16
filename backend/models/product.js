// Import Mongoose Module
const mongoose = require('mongoose');
// var now = require('time')(Date);

// Create Match Schema (structure)
const productSchema = mongoose.Schema({
    title: String,
    description: String,
    price:String,
    image:String
   
});
// Create Model named Match that respect Match Schema
const product = mongoose.model('Product', productSchema);
// Model is exportable
module.exports = product;