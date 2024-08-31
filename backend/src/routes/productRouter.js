const producController=require('../controllers/productController')
const express=require('express')
const upload =require('../middlewares/multer');
const router=express.Router();

router.get('/products',producController.findAllProducts);
router.get('/products/:id',producController.findProductById);
router.post('/products',upload.single('image'),producController.createProduct);
router.put('/products/:id',producController.updateProduct);

module.exports=router