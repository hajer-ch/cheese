// Import Mongoose Module
const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    title: String,
    description: String,
   
});
// Create Model named Match that respect Match Schema
const order = mongoose.model('Order', orderSchema);
// Model is exportable
module.exports = order;