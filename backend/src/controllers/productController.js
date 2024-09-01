
const productService=require('../services/productService')
const createProduct=async (request,response)=>{
    //const product=request.body;
    const { name, description, price } = request.body;
    const image = request.file.filename;
 
    if (!name || !description || !price || !image) {
        return res.status(400).json({ error: 'All fields are required.' });
    }
    try {
       
        const product = {
            name,
            description,
            price ,
            image_url :image
        };

        
        const result= await productService.createProduct(product);

        response.status(201).json({
            id: result.id,
            name: result.name,
            description: result.description,
            price: result.price,
            image: `/images/${result.image_url}`
        });
    
    } catch (error) {
        console.error('Error while creating product:', error.message, error.stack);
        response.status(500).send({ 'Error': 'Internal server error' });
    }
}

const findAllProducts=async(request,response)=>{
    try {
        const result=await productService.findAllProducts();
        const products= result.map(product=>({
        id:product.id,
        name:product.name,
        description:product.description,
        price:product.price,
        image:`${request.protocol}://${request.get('host')}/images/${product.image_url}`
        }))
        response.status(200).json(products);
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
        console.log(product)
        if (!product|| product===null|| !product.length >0)
            return response.status(401).json({ 'error': "Product doesn't exist" });

          else{
                response.status(200).json({
                id:product[0].id,
                name:product[0].name,
                description:product[0].description,
                price:product[0].price,
                image:`${request.protocol}://${request.get('host')}/images/${product[0].image_url}`
            });
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