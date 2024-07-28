import React from 'react'
import './PlaceList.css'
import Card from '../../shared/components/UI_elements/Card'
import {Placesitem} from './Placesitem'

export const PlaceList = (props) => {
    if(props.items.length===0){
        return <div className='place-list center'>
            <Card>
                <h2>No places found , maybe create one</h2>
                <button>Share Place</button>
            </Card>
        </div>
    }
    return (
        <ul className='"place-list'>
            {console.log(props.items[0].address)}
            {props.items.map(place=><Placesitem key={place.id} id={place.id}
            image={place.imageurl}
            title={place.title}
            description = {place.discription}
            address = {place.address}
            creatorId = {place.creator}
            coordinates = {place.location}
            />)}
            
        </ul>
    )
}

