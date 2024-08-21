const { DataTypes } =require("sequelize");

const sequelize= require('../../config/database');

const Product=sequelize.define('Product',{
    name:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    description:{
        type:DataTypes.TEXT
    },
    price:{
        type:DataTypes.DECIMAL,
        allowNull: false,
    },
    image_url:{
        type:DataTypes.STRING
    }
    
},{timestamps: true,tableName: 'products'})

module.exports=Product