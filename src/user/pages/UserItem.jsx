import React from 'react'
import './UserItem.css';
import {Link} from 'react-router-dom'
import Card from '../../shared/components/UI_elements/Card';

import Avatar from '../../shared/components/UI_elements/Avatar';

export const UserItem = (props) => {
  return (
    <li className='user-item'>
            <Card className='user-item__content'> 
            <Link to={`/${props.id}/places`}>
            <div className='user-item__image'>
                <Avatar input type='file' image={props.image} alt={props.name}/>
            </div>
            <div className='user-item__info'>
                <h2>{props.name}</h2>
                <h3>{props.placescount}{props.placecount===1?'Place':'Places'}</h3>
            </div>
            </Link>
            </Card>
    </li>
  )
}
