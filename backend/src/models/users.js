 const { DataTypes }=require ("sequelize");
const sequelize = require("../../config/database");

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at'  
},
updatedAt: {
    type: DataTypes.DATE,
    field: 'updated_at'  
}

  
},{timestamps: true,tableName: 'users'});
// User.hasMany(Order,{foreignKey:user_id})

// Sync the model with the database
// User.sync()
//     .then(() => {
//         console.log('Database synchronized successfully.');
//     })
//     .catch(err => {
//         console.error('Error synchronizing database:', err);
//     });
module.exports = User

