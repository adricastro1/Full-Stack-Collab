const Animal = require('../models/Animal')

module.exports = {
    new: newAnimal,
    create,
    index
}

function newAnimal(req,res){
    res.render('animals/new', {title: 'Add New Animal'})
}

function create(req,res){
    Animal.create(req.body)
    .then(function(newAnimal){
        res.redirect('/animals/')
    })
    .catch(function (err) {
        console.log(err)  
        res.redirect('/animals/')
    })
}

function index(req,res){
    Animal.find({})
    .then(function(animals){
        res.render('animals/index', {title: 'All Animals', animals})
    })
    .catch(function (err) {
        console.log(err) 
        res.redirect('/')
    })
}