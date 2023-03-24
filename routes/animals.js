var express = require('express');
var router = express.Router();

const animalsCtrl = require("../controllers/animals")


router.get('/new', animalsCtrl.new)


// router.get('/', animalsCtrl.index)

module.exports = router;
