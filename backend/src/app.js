
const express = require('express');
const cors =require('cors');
const app= express();
const userRouter=require('./routes/userRouter');
const productRouter=require('./routes/productRouter');
const corsOptions = {
    origin: '*',
  };



app.use(express.json());
app.use(cors(corsOptions));
app.use('/api/user',userRouter);
app.use('/api/product', productRouter);

module.exports =app;