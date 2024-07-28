import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './MainNavigation.css';
import { Mainheader } from './Mainheader';
import { Navlinks } from './Navlinks';
import { SideDrawer } from './SideDrawer';
import Backdrop from '../UI_elements/Backdrop';
export const MainNavigation = (props) => {
  const [drawer_is_open,setdrawer_is_open] = useState(false)
  const openDrawer=()=>{
    setdrawer_is_open(true)
  };

  const close_drawer=()=>{
    setdrawer_is_open(false)
  }
  
  return (<>
  {/* {drawer_is_open && <Backdrop onClick={close_drawer}/>}
      <SideDrawer show={drawer_is_open}>
      <nav className="main-navigation__drawer_nav">
      <Navlinks/>
      </nav>
    </SideDrawer> */}
  <Mainheader>
    {/* <button className='main-navigation__menu_btn' onClick={openDrawer}>
    <span/>
    <span/>
    <span/>
    </button> */}
    <h1 className='main-navigation__title'>
        <Link to='/'> Your Places </Link>
    </h1>
    <nav className='main-navigation__header-nav'>
        <Navlinks/>
    </nav>
    {console.log('In main navigation')}
  </Mainheader>
  </>
  )
}
