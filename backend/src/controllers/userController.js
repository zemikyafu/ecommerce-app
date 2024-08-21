
const jwt = require("jsonwebtoken");
const userService =require('../services/userService')
const env = require('dotenv').config();
if (env.error) {
    throw env.error;
}

const login = async (request,response) => {
    const { email, password } = request.body;
   
    try {
      //find user by email
      const user = await userService.findUserByEmail(email);
      if (!user)
        return response.status(401).json({ 'error': "User doesn't exist" });
       
      const hash = user.dataValues.password;
       
      //compare saved hashed password and given password
      const validCredentials = userService.validCredentials(password, hash);
      if (!validCredentials)
        return response.status(401).json({ 'error': "Invalid Credentials" });

      const userInfo = { id: user.dataValues.id, email: user.dataValues.email,name:user.dataValues.name};
      const json_web_token = jwt.sign(userInfo, process.env.JWT_SECRET, {
        expiresIn: "0.5h",
      });
  
      //return jwt token with user information
      response.status(200).json({ token: json_web_token, user: userInfo });
    } catch (error) {
      console.log(error.message);
      response.status(500).json({ 'error': "Server error" });
    }
  };

   //user registration
const registerUser = async (request, response) => {
    const { name, email, password,  } = request.body;
    const hash= await userService.hash(password);
  
    //check if user exis
    const userexits = await userService.findUserByEmail(email)

    if (userexits)
      return response.status(400).json({ 'error': "User already exist" });
  
    try {
   
     const result=await userService.createUser({name,email,password:hash});
     response.status(201).json(result);
    } catch (error) {
      console.error('Error while registering user:', error.message, error.stack);
      response.status(500).send({ 'Error': 'Internal server error' });
    }
  };
const findAllUsers=async(request,response)=>{
    try {
        const users=await userService.findAllUsers();
        response.status(200).json(users);
    } catch (error) {
        console.error('Error while registering user:', error.message, error.stack);
        response.status(500).send({ 'Error': 'Internal server error' });
    }
}
  
  module.exports.login=login
  module.exports.registerUser=registerUser
  module.exports.findAllUsers=findAllUsers
