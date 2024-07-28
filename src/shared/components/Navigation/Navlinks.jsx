import React from "react";
import './Navlinks.css'
import { NavLink } from "react-router-dom";

export const Navlinks=(props)=>{
    return (
        <ul className="nav-links">
        <li>
            <NavLink to="/"> All users</NavLink>
        </li>
        <li>
            <NavLink to="/u1/places"> My Places</NavLink>
        </li>
        <li> 
            <NavLink to="/places/new"> Add Place</NavLink>
        </li>
        <li>
            <NavLink to="/auth"> Authenticate</NavLink>
        </li>
        </ul>
    )
}