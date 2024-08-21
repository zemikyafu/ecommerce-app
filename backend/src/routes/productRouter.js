const producController=require('../controllers/productController')
const express=require('express')

const router=express.Router();

router.get('/products',producController.findAllProducts);
router.get('/products/:id',producController.findProductById);
router.post('/products',producController.createProduct);
router.put('/products/:id',producController.updateProduct);

module.exports=router