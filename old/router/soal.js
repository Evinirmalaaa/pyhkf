const router = require('express').Router();
const soalController = require('../controllers/soal')

const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('image'), soalController.create);
router.post('/:id', upload.single('image'), soalController.update);
router.delete('/:id', soalController.delete);
router.get('/category/:id', soalController.getByCategory);
router.get('/', soalController.getAll)
router.get('/:id', soalController.findOne);

module.exports = router;