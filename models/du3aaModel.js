const mongoose = require('mongoose')

const prayerSchema = new mongoose.Schema({
  du3aa: {
    type: String,
    required: true
  }
})

const Du3aaModel = module.exports = mongoose.model('du3aa', prayerSchema)
module.exports = mongoose.model('du3aa', prayerSchema)

module.exports.get = function (callback, limit) {
  Du3aaModel.find(callback).limit(limit)
}
