const express = require('express');
const router = express.Router()
const controller = require('../controllers/guitars.js')

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/', controller.createGuitar)
router.put('/:id', controller.updateGuitar)
router.delete('/:id', controller.destroyGuitar)
module.exports = router
