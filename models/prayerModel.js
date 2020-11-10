const mongoose = require('mongoose')

const prayerSchema = new mongoose.Schema({
  prayer: {
    type: String,
    required: true
  }
})

const PrayerModel = module.exports = mongoose.model('prayer', prayerSchema)
module.exports = mongoose.model('prayer', prayerSchema)

module.exports.get = function (callback, limit) {
  PrayerModel.find(callback).limit(limit)
}
