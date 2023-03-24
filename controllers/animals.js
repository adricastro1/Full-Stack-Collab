const Animal = require('../models/Animal')

module.exports = {
    new: newAnimal
}

function newAnimal(req,res){
    res.render('animals/new', {title: 'Add New Animal'})
}