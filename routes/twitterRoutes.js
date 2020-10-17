const router = require('express').Router();
const twitterController = require('../controllers/twitterController');
const authenticateToken = require('../middleware/jwt');

router.post('/oauth', twitterController.oauth);
router.get('/callback', twitterController.callback);
router.get('/count', twitterController.count);

router.get('/subs', authenticateToken,twitterController.index);

module.exports = router;
