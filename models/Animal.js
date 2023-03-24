const mongoose = require('mongoose')

const animalSchema = new mongoose.Schema({
    name: String,
    bio: String,
    age: String,
    breed: String,
},{
    timestamps: true
})


module.exports = mongoose.model('Animal', animalSchema)