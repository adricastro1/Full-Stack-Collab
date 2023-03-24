var express = require('express');
var router = express.Router();

const animalsCtrl = require("../controllers/animals")


router.get('/new', animalsCtrl.new)

router.post('/', animalsCtrl.create)

router.get('/', animalsCtrl.index)

router.get('/:id', animalsCtrl.show)

router.delete('/:id', animalsCtrl.destroy)

router.get('/:id/edit', animalsCtrl.edit)

router.put('/:id', animalsCtrl.updateOne)



module.exports = router;
