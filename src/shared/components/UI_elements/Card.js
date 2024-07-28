import React from 'react';

import './Card.css';

const Card = props => {
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
      {/* {console.log(props.style)}
      {console.log(props.children)} */}
    </div>
  );
};

export default Card;
