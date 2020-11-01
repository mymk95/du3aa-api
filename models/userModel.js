const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true })

const UserModel = module.exports = mongoose.model('User', userSchema)
module.exports = mongoose.model('User', userSchema)

module.exports.get = function (callback, limit) {
  UserModel.find(callback).limit(limit)
}
