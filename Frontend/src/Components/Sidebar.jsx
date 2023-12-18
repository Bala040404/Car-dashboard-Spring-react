import React, { useRef } from 'react'

import { NavLink } from "react-router-dom"
import "../Styles/Sidebar.css"
function Sidebar() {

    return (
        <div className='Sidebar'>
            <div className='top'>
                <div className='logo'>logo</div>

            </div>
            <div className='Navs'>
                <NavLink className="navlink" to="/">Home</NavLink>
                <NavLink className="navlink" to="/addcar">Addcar</NavLink>
                <NavLink className="navlink" to="/contact">Contact</NavLink>
                <NavLink className="navlink" to="/about">About</NavLink>
            </div>


        </div>
    )
}

export default Sidebar
