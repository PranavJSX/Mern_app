
const HttpError = require('../models/http_error')
const {v4:uuid} = require('uuid');
const {validationResult} = require('express-validator');

const getCoordsForAddress = require('../Utils/location');

let DUMMY_PLACES = [
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


const getPlaceById = (req,res,next)=>{
    const placeId = req.params.pid;
    console.log('get request');
    const place = DUMMY_PLACES.find(p=>{
        return p.id === placeId
    })
    if(!place){
        throw new HttpError('Could not find a places for the provided id',404);
    }
    res.json({place});
}

const getPlacesByUserId = (req,res,next)=>{
    const userid = req.params.uid;
    const places = DUMMY_PLACES.filter(p=>{
        return p.creator === userid;
    });
    if(!places || places.length===0){
        return next( new HttpError('Could not find a place for the provided user id',404));   
    }
    
    res.json({places})
};


const createPlace = async(req,res,next)=>{
    const errors = validationResult(w);

    if(!errors.isEmpty()){
        next( new HttpError('Invalid inputs passed , please check your data',422));
    }
    console.log('post request received')
    // console.log(req.body)
    let {title,description,address,creator} = req.body;

    let coordinates;
    try{
     coordinates = await getCoordsForAddress(address);
    }
    catch(error){
        return next(error);
    }
    const createdPlace = {
        id:uuid(),
        title:title,
        description:description,
        location:coordinates,
        address:address,
        creator:creator  
    };
    console.log('here')
    DUMMY_PLACES.push(createdPlace);
        res.status(201).json({place : createdPlace});
    // return res.status(200).json('SUCCESS');
}

const updatePlace = (req,res,next)=>{ 
    const {title,description} = req.body;
    const placeId = req.params.pid;

    const updatedPlace = {...DUMMY_PLACES.find(p=>p.id === placeId)};
    const placeIndex = DUMMY_PLACES.findIndex(p=>p.id === placeId);
    updatedPlace.title = title;
    updatedPlace.description = description;

    DUMMY_PLACES[placeIndex] = updatedPlace;
    res.status(200).json({place:updatedPlace});
};

const deletePlace = (req,res,next)=>{
    const placeId = req.params.pid;
    if(!DUMMY_PLACES.find(p=>p=== placeId)){
        throw new HttpError('Could not find the place for that id.' , 404);
    }
    DUMMY_PLACES = DUMMY_PLACES.filter(p=>p.id!==placeId);
    res.status(200).json({message:'Deleted Place.'});
};


exports.getPlaceById = getPlaceById;
exports.getPlacesByUserId = getPlacesByUserId
exports.createPlace = createPlace
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;