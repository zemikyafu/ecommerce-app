const User = require('./users');
const Order = require('./orders');

// Define associations
User.hasMany(Order, { foreignKey: 'user_id' });
Order.belongsTo(User, { foreignKey: 'user_id' });

// Export models
module.exports = {
  User,
  Order,
  // other models
};