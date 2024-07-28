import React from 'react'

import './Mainheader.css';

export const Mainheader = (props) => {
  return (<header className='main-header'>
    {props.children}
  </header>)
}
