
const productService=require('../services/productService')
const createProduct=async (request,response)=>{
    const product=request.body;
    try {
        const result= await productService.createProduct(product);
        response.status(201).json(result);
    } catch (error) {
        console.error('Error while creating product:', error.message, error.stack);
        response.status(500).send({ 'Error': 'Internal server error' });
    }
}

const findAllProducts=async(request,response)=>{
    try {
        const users=await productService.findAllProducts();
        response.status(200).json(users);
    } catch (error) {
        console.error('Error while fetching products:', error.message, error.stack);
        response.status(500).send({ 'Error': 'Internal server error' });
    }
}
 
const findProductById=async(request,response)=>{
    try {
        const id =request.params.id
        if(!id)
            return response.status(401).json({'error':'Missing request paramarer '})
        const product=await productService.findProductById(id);
       
        if(product){
            response.status(200).json(product);
        }
       else{
        response.status(404).json({'error':'Product not found'});
       }
    } catch (error) {
        console.error('Error while fetching products:', error.message, error.stack);
        response.status(500).send({ 'Error': 'Internal server error' });
    }
}
 
const updateProduct=async(request,response)=>{
    try {
        const id =request.params.id
        const product=request.body
        const result=await productService.updateProduct(id,product);
        if(result){
            response.status(200).json(result);
        }
       else{
        response.status(404).json({'error':'Product not found'});
       }
    } catch (error) {
        console.error('Error while fetching products:', error.message, error.stack);
        response.status(500).send({ 'Error': 'Internal server error' });
    }
}

module.exports.createProduct=createProduct
module.exports.findAllProducts=findAllProducts
module.exports.updateProduct=updateProduct
module.exports.findProductById=findProductById