const express = require('express');

const HttpError = require('../models/http_error')

const router = express.Router();

const DUMMY_PLACES = [
    {
        id:'p1',
        title:'Empire state buildings',
        description:'one of the most famouse sky scrappers in the world',
        location:{
            lat:40.7484405,
            long:-73.9882393
        },
        adress:'20 W 34th St, New York , NY 100081',
        creator : 'U1'
    }
]

router.get('/:pid',(req,res,next)=>{
    const placeId = req.params.pid;
    console.log('get request');
    const place = DUMMY_PLACES.find((p)=>{
        return p.id === placeId
    })
    if(!place){
        throw new HttpError('Could not find a place for the provided id',404);
    }
    res.json({place});
})

router.get('/user/:uid',(req,res,next)=>{
    const userid = req.params.uid;
    const place = DUMMY_PLACES.find(p=>{
        return p.creator === userid
    })
    if(!place){
        return next( new HttpError('Could not find a place for the provided uesr id',404));   
    }
    
    res.json({place})
})

module.exports = router