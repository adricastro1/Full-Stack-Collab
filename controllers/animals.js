const Animal = require('../models/Animal')

module.exports = {
    new: newAnimal,
    create
}

function newAnimal(req,res){
    res.render('animals/new', {title: 'Add New Animal'})
}

function create(req,res){
    Animal.create(req.body)
    .then(function(newAnimal){
        res.redirect('/animals/new')
    })
    .catch(function (err) {
        console.log(err)  
        res.redirect('/animals/new')
    })
}