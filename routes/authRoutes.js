const router = require('express').Router();
const userController = require('../controllers/userController');
const authenticateToken = require('../middleware/jwt');
const Disabled = require('../middleware/Disabled');

router.get('/user', Disabled, userController.index);
router.post('/user', Disabled, userController.new);
router.post('/login', userController.login);

router.post('/verify', authenticateToken, (req, res) => {
    res.json({
        verified: res.locals.verified,
        payload: res.locals.payload
    })
})

module.exports = router;
