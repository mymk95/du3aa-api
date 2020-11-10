const PrayerModel = require('../models/prayerModel')

exports.index = function (req, res) {
  PrayerModel.get(function (err, prayers) {
    if (err) {
      res.json({
        statusText: 'error',
        message: err
      })
    } else {
      if (prayers === undefined || prayers.length === 0) {
        res.json({
          status: 200,
          statusText: 'success',
          message: 'No data'
        })
      } else {
        res.json({
          status: 200,
          statusText: 'success',
          count: prayers.length,
          data: prayers
        })
      }
    }
  })
}

exports.random = function (req, res) {
  PrayerModel.get(function (err, prayers) {
    if (err) {
      res.json({
        statusText: 'error',
        message: err
      })
    } else {
      if (prayers === undefined || prayers.length === 0) {
        res.json({
          status: 200,
          statusText: 'success',
          message: 'No data'
        })
      } else {
        const random = Math.floor(Math.random() * prayers.length)
        const prayer = prayers[random].prayer
        res.json({
          prayer
        })
      }
    }
  })
}

exports.new = function (req, res) {
  const du3aa = new PrayerModel()

  du3aa.du3aa = req.body.du3aa

  du3aa.save(function (err) {
    if (err) {
      res.json({
        statusText: 'error',
        message: err
      })
    } else {
      res.json({
        status: 200,
        statusText: 'success',
        message: 'New du3aa created',
        data: du3aa
      })
    }
  })
}

exports.view = function (req, res) {
  PrayerModel.findById(req.params.du3aa_id, function (err, du3aa) {
    if (err) {
      res.json({
        statusText: 'error',
        message: err
      })
    } else {
      if (du3aa == null) {
        res.json({
          status: 200,
          statusText: 'success',
          message: 'No data'
        })
      } else {
        res.json({
          status: 200,
          statusText: 'success',
          data: du3aa
        })
      }
    }
  })
}

exports.update = function (req, res) {
  PrayerModel.findById(req.params.du3aa_id, function (err, du3aa) {
    if (err) {
      res.json({
        statusText: 'error',
        message: err
      })
    } else {
      du3aa.du3aa = req.body.du3aa

      du3aa.save(function (err) {
        if (err) {
          res.json({
            statusText: 'error',
            message: err
          })
        } else {
          res.json({
            status: 200,
            statusText: 'success',
            message: 'du3aa updated',
            data: du3aa
          })
        }
      })
    }
  })
}

exports.delete = function (req, res) {
  PrayerModel.deleteOne({
    _id: req.params.du3aa_id
  }, function (err, du3aa) {
    if (err) {
      res.json({
        statusText: 'error',
        message: err
      })
    } else {
      res.json({
        status: 200,
        statusText: 'success',
        message: 'Du3aa deleted'
      })
    }
  })
}

exports.count = (req, res) => {
  PrayerModel.find().countDocuments()
    .then(count => {
      res.send({ count })
    })
    .catch(err => {
      console.log(err)
    })
}
