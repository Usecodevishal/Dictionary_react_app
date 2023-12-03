import React from 'react'
import './style.css';
import { NavLink } from 'react-router-dom';
function Header() {
    return (
        <div className='navbar'>
            <h1><NavLink to='/'>Dictionary App</NavLink></h1>
            <div className='nav-pages'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/history'>History</NavLink>
            </div>
        </div>
    )
}

export default Header
