import React from 'react';
import { UserItem } from './UserItem';
import Card from '../../shared/components/UI_elements/Card';
import './UsersList.css';


export const UsersList = (props)=>{
    if(props.items.length===0){
        return (<div className='center'>
            <Card>
            <h2>No users Found!</h2>
            </Card>
        </div>)
    }
    else{
        return(
            <ul className='users-list'>
                {props.items.map(user=>(<UserItem key={user.id} 
                id={user.id} 
                image={user.image} 
                name ={user.name} 
                placecount = {user.places}/>
                ))}
            </ul>
        )
    }
}