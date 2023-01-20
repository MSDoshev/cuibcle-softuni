const router = require('express').Router();

const {getCreateCube} = require('./controllers/cubeController')


router.get('/', (req, res) => {

    res.render('index');
});
router.get('/about', (req, res) => {

    res.render('about');
});

router.get('/create', getCreateCube)

module.exports = router