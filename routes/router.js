const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
const productsController = require('../controllers/productsController');
const userController = require('../controllers/userController');

/* GET home page. */
router.get('/', indexController.index);

/* GET products pages */
router.get('/products', productsController.product_list);

/*GET product_info page*/
router.get('/products/:idproduct', productsController.product_info);

/*GET inscription page*/
router.get('/inscription',userController.sign_in);

/*POST connexion page*/
router.use(express.static('public'));


module.exports = router;
