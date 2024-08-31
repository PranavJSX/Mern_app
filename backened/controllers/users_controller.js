
const HttpError = require('../models/http_error')
// const uuid = require('uuid/v')
const DUMMY_USERS = [
    {
        id:'u1',
        name:'Lewis Strauss',
        emails:'test@test.com',
        password:'test123'
    }
]


const getUsers = (req,res,next)=>{
    res.json({DUMMY_USERS});
};


const signup = (req,res,next)=>{
    const {name,email,password} = req.body;

    const hasUser = DUMMY_USERS.find(u=>u.emails===email)
    if(hasUser){
        throw new HttpError('Could not create user , email already used',422); 
    }
    const createdUser = {
        id:'u2',
        name,
        email,
        password
    };

    DUMMY_USERS.push(createdUser);
    res.status(201).json({user:createdUser});
};

const login = (req,res,next)=>{
    const {email,password} = req.body;

    const identifiedUser = DUMMY_USERS.find(u=>u.email ===email);
    if(!identifiedUser || identifiedUser.password != password){
        throw new HttpError('Could not identify user , wrong credentials ', 401);

    }

    res.json({message:'Log in succesfull !'});
};

exports.getUsers = getUsers
exports.signup = signup
exports.login = login
