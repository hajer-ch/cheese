// Import Mongoose Module
const mongoose = require('mongoose');

// Create Match Schema (structure)
const recetteSchema = mongoose.Schema({
    title: String,
    description: String,
   
});
// Create Model named Match that respect Match Schema
const recette = mongoose.model('Recette', recetteSchema);
// Model is exportable
module.exports = recette;