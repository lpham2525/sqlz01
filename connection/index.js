const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:rootroot@localhost:3306/users_db')

module.exports = sequelize
