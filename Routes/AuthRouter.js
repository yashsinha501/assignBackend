const { signup, login, updatePoints } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');


const router = require('express').Router();


router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);
router.post('/updatePoints', updatePoints)

module.exports = router;