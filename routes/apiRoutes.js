const router = require('express').Router();
const du3aaController = require('../controllers/du3aaController');
const authenticateToken = require('../middleware/jwt');
const fs = require('fs');

router.get('/', (req, res) => {
    fs.readFile('./routes/help.txt', (err, data) => {
        if (err) { console.log(err) }
        res.setHeader('Content-type', 'application/json');
        res.send(data.toString());
    })
})

router.get('/random', du3aaController.random);

router.get('/prayer', du3aaController.index);
router.get('/prayer/:du3aa_id', du3aaController.view);

router.post('/prayer', authenticateToken, du3aaController.new);
router.put('/prayer/:du3aa_id', authenticateToken, du3aaController.update);
router.delete('/prayer/:du3aa_id', authenticateToken, du3aaController.delete);

module.exports = router;
