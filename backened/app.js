const express = require('express')
const bodyParser = require('body-parser');

const placesroutes = require('/New folder/Udemy/reacg/My_full_stack_app/backened/routes/places_routes');
const usersroutes = require('/New folder/Udemy/reacg/My_full_stack_app/backened/routes/users_routes');
const HttpError = require('./models/http_error');

const app = express();
app.use(express.json());
// app.use(bodyParser.json());

app.use('/api/places',placesroutes);
app.use((req,res,next)=>{
    const error = new HttpError('Could not find this route.',404);
    throw error;
});

app.use((error,req,res,next)=>{
    if(res.headerSent){
        return next(error);
    }
    
    res.status(error.code || 500);
    res.json({message:error.message || 'An unknown error occured !'});
})

app.listen(5000)