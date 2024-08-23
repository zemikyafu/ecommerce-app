const orderController=require('../controllers/orderController')
const express=require('express')

const router=express.Router();

router.get('/orders',orderController.findAllOrders);
router.get('/orders/:id',orderController.findOrderById);
router.post('/orders',orderController.createOrder);
router.put('/orders/:id',orderController.updateOrder);

module.exports=router