
const express = require('express');
const path=require('path')
const cors =require('cors');
const models = require('./models');
const app= express();
const userRouter=require('./routes/userRouter');
const productRouter=require('./routes/productRouter');
const orderRoute=require('./routes/orderRouter')
const corsOptions = {
    origin: '*',
  };



app.use(express.json());
app.use(cors(corsOptions));
app.use('/images',express.static(path.join(__dirname,'/images')))
app.use('/api/user',userRouter);
app.use('/api/product', productRouter);
app.use('/api/order',orderRoute);

module.exports =app;