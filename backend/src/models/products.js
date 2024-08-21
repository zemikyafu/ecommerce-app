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
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'  
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'  
    }
    
},{timestamps: true,tableName: 'products'})

module.exports=Product