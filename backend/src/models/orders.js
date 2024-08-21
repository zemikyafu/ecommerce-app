
const { DataTypes } =require("sequelize");

const sequelize= require('../../config/database');
const Users =require('./users');

const Order=sequelize.define('Order',{
    user_id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Users,
            key: 'id',
        },

    },
   
    total:{
        type:DataTypes.DECIMAL,
        allowNull: false,
    },
    
},{timestamps: true,tableName: 'orders'})

module.exports=Order

