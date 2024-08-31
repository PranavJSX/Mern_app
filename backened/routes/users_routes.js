const express = require('express')
const router = express.Router();


const dummy_user = [{
    uid:'u1',
    name:'Pranav',
    age : 24
}]



const usersControllers = require('../controllers/users_controller')

router.get('/',usersControllers.getUsers)


router.post('/signup',usersControllers.signup);

router.post('/login',usersControllers.login);

module.exports = router 