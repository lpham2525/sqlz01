const Pet = require('./Pet')

const User = require('./User')

User.hasMany(Pet)
Pet.belongsTo(User)

module.exports = { User, Pet }
