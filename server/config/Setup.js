const Sequelize = require('sequelize');
const sequelize = require('./db');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  password: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  adress: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  phone_number: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  refreshToken: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
});

const Product = sequelize.define('product', {
  id : {
    type : Sequelize.INTEGER,
    autoIncrement : true,
    allowNull : false, 
    primaryKey : true,
  },
  name : {
    type : Sequelize.STRING,
    allowNull : false   
  },
  quantity : {
    type : Sequelize.INTEGER,
    allowNull : true
  },
  price : {
    type : Sequelize.INTEGER,
    allowNull : false
  },
})

// sequelize
//   .sync({ force: false })
//   .then(() => {
//     console.log('table created');
//   })
//   .catch((err) => {
//     console.log(err);
//   });

module.exports = {
  User, Product
};
