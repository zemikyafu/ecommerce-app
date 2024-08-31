const Product=require('../models/products');

const findAllProducts= async ()=>{
    try {
        const products= await Product.findAll();
        return products
    } catch (error) {
        console.log('error',error);
        return null
    }
}
const findProductById=async (id)=>{
    try {
        const products=await Product.findAll({where:{id:id}});
        return products;
    } catch (error) {
        console.log('error',error);
        return null;
    }
}
const createProduct=async (product)=>{
    try {
        const result=await Product.create(product);
        return result;
    } catch (error) {
        console.log('error',error);
        return null;
    }
}

const updateProduct=(id,product)=>{
       try {
            const {name,description,price,image_url}=product;
            const result=Product.update({name:name,description:description,price:price,image_url:image_url},{where:{id:id},returning:true});
            return result;
        } catch (error) {
            console.log('error',error);
            return null;
        }
}


module.exports.createProduct=createProduct;
module.exports.findAllProducts=findAllProducts;
module.exports.findProductById=findProductById;
module.exports.updateProduct=updateProduct;