const router = require('express').Router()
const prayerController = require('../controllers/prayerController')
const authenticateToken = require('../middleware/jwt')
const fs = require('fs')

router.get('/', (req, res) => {
  fs.readFile('./routes/help.txt', (err, data) => {
    if (err) { console.log(err) }
    res.setHeader('Content-type', 'application/json')
    res.send(data.toString())
  })
})

router.get('/random', prayerController.random)

router.get('/count', prayerController.count)

router.get('/prayer', prayerController.index)
router.get('/prayer/:du3aa_id', prayerController.view)

router.post('/prayer', authenticateToken, prayerController.new)
router.put('/prayer/:du3aa_id', authenticateToken, prayerController.update)
router.delete('/prayer/:du3aa_id', authenticateToken, prayerController.delete)

module.exports = router
