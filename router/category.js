const router = require('express').Router();
const categoryController = require('../controllers/category')

router.post('/', categoryController.create);
router.get('/', categoryController.getAll);
router.put('/:id', categoryController.update);
router.delete('/:id', categoryController.delete);
router.get('/:id', categoryController.findOne);

module.exports = router