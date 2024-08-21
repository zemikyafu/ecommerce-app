
const userController=require('../controllers/userController')
var express = require('express')
const userRouter=express.Router();

userRouter.post('/login',userController.login)
userRouter.post('/users',userController.registerUser)
userRouter.get('/users',userController.findAllUsers)
module.exports=userRouter;