const Order=require('../models/orders');
const User = require('../models/users');
 
const findAllOrders= async ()=>{
    try {
        const orders= await Order.findAll();
        return orders
    } catch (error) {
        console.log('error',error);
        return null
    }
}
const findOrdersById=async (id)=>{
    try {
        const orders=await Order.findAll({where:{id:id}});
        console.log('user',user);
        return orders;
    } catch (error) {
        console.log('error',error);
        return null;
    }
}
const createOrder=async (order)=>{
    try {
        const result=await Order.create(order);
        return result;
    } catch (error) {
        console.log('error',error);
        return null;
    }
}

const updateOrder=(id,order)=>{
       try {
            const {user_id,total}=order;
            const result=Order.update({user_id:user_id,total:total},{where:{id:id},returning:true});
            return result;
        } catch (error) {
            console.log('error',error);
            return null;
        }
}

module.exports.createOrder=createOrder;
module.exports.findAllOrders=findAllOrders;
module.exports.findOrdersById=findOrdersById;
module.exports.updateOrder=updateOrder;