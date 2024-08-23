 
const orderService=require('../services/orderService')
const createOrder=async (request,response)=>{
    const order=request.body;
    try {
        const result= await orderService.createOrder(order);
        response.status(201).json(result);
    } catch (error) {
        console.error('Error while creating order:', error.message, error.stack);
        response.status(500).send({ 'Error': 'Internal server error' });
    }
}

const findAllOrders=async(request,response)=>{
    try {
        const users=await orderService.findAllOrders();
        response.status(200).json(users);
    } catch (error) {
        console.error('Error while fetching orders:', error.message, error.stack);
        response.status(500).send({ 'Error': 'Internal server error' });
    }
}
 
const findOrderById=async(request,response)=>{
    try {
        const id =request.params.id
        if(!id)
            return response.status(401).json({'error':'Missing request paramarer '})

        const order=await orderService.findOrdersById(id);
       
        if(order){
            response.status(200).json(order);
        }
       else{
        response.status(404).json({'error':'Order not found'});
       }
    } catch (error) {
        console.error('Error while fetching Orders:', error.message, error.stack);
        response.status(500).send({ 'Error': 'Internal server error' });
    }
}
 
const updateOrder=async(request,response)=>{
    try {
        const id =request.params.id
        const order=request.body
        const result=await orderService.updateOrder(id,order);
        if(result){
            response.status(200).json(result);
        }
       else{
        response.status(404).json({'error':'Order not found'});
       }
    } catch (error) {
        console.error('Error while fetching Orders:', error.message, error.stack);
        response.status(500).send({ 'Error': 'Internal server error' });
    }
}

module.exports.createOrder=createOrder
module.exports.findAllOrders=findAllOrders
module.exports.updateOrder=updateOrder
module.exports.findOrderById=findOrderById