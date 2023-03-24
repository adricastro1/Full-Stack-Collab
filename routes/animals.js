var express = require('express');
var router = express.Router();

const animalsCtrl = require("../controllers/animals")


router.get('/new', animalsCtrl.new)

router.post('/', animalsCtrl.create)

router.get('/', animalsCtrl.index)

router.get('/:id', animalsCtrl.show)


module.exports = router;
