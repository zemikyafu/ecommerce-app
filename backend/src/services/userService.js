const bcrpt = require("bcryptjs");
const User=require('../models/users');
const { Order } = require("../models");

const findUserByEmail = async (email) => {
    try {
         const user = await User.findOne({where:{email:email}});
        return user;
    } catch (error) {
        console.error('Error occurred:', err);
    }
   
  };

  const validCredentials =(password, hash)=>{
    const validCredentials = bcrpt.compare(password, hash);
    return validCredentials
  }
  const hash= async(password)=>{
    const salt = await bcrpt.genSalt(10);
    const hash = await  bcrpt.hash(password, salt);
    return hash;
}
  
const createUser=async(user)=>{
    try {
        const result= await User.create(user);
        return result
       
    } catch (error) {
         console.error('Error occurred:', err);
    }
 
 return result;
}
const findAllUsers=async ()=>{
    try {
        const users= await User.findAll();
        return users
    } catch (error) {
        console.error('Error occurred:', err);
       
    }
    
} 
const findUserById=async (id)=>{
    try {
        const user=await User.findAll({where:{id:id},include:order});//eagerloading
        //  const user=await User.findByPk(id);
        // const order=await user.getOrders();//lazy loading
       console.log('order',order);
        return user;
    } catch (error) {
        console.log('error',error);
        return null;
    }
}
// module.exports.findUserByEmail=findUserByEmail
// module.exports.validCredentials=validCredentials
// module.exports.createUser=createUser
// module.exports.hash  =hash
// module.exports.findAllUsers=findAllUsers

module.exports={
findUserByEmail,
validCredentials,
createUser,
hash,
findAllUsers,
findUserById
}
