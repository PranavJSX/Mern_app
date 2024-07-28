import React from "react";
import { PlaceList } from "../components/PlaceList";
import { useParams } from "react-router";


const DUMMY_PLACES=[
    {
        id:'p1',
        title:'empire state buidling',
        description:'Famous skyscrapper',
        imageURL:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FEmpire_State_Building&psig=AOvVaw3Qja4Yg_1KImcknNQ9c3eX&ust=1722191973147000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPDQqZfvx4cDFQAAAAAdAAAAABAE',
        address:'20 W 34th St., New York, NY 10001, United States',
        location:{
            lat:40.7484405,
            lng:-73.9882393,
        },
        creator:'u1'
    },
    {
        id:'p2',
        title:'empire state buidling',
        description:'Famous skyscrapper',
        imageURL:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FEmpire_State_Building&psig=AOvVaw3Qja4Yg_1KImcknNQ9c3eX&ust=1722191973147000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPDQqZfvx4cDFQAAAAAdAAAAABAE',
        address:'20 W 34th St., New York, NY 10001, United States',
        location:{
            lat:40.7484405,
            lng:-73.9882393,
        },
        creator:'u2'
    }
]
export const UserPlaces=()=>{
    const userid = useParams().userid;
    const loadedPlaces = DUMMY_PLACES.filter(place=>place.creator===userid);
    return <PlaceList items={loadedPlaces}/>
}