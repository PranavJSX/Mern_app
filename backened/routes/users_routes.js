const express = require('express')
const router = express.Router();


const dummy_user = [{
    uid:'u1',
    name:'Pranav',
    age : 24
}]



const usersControllers = require('../controllers/users_controller');
const { check } = require('express-validator');

router.get('/',usersControllers.getUsers)


router.post('/signup',[
    check('name').not().isEmpty(),check('email').normalizeEmail().isEmail(),
    check('password').isLength({min:6})
],usersControllers.signup);

router.post('/login',usersControllers.login);

module.exports = router 