import React from 'react';
import Logo from '../assets/images/Logo.svg'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="navigation">
                <div className="container py-2">
                    <div className="navbar d-flex justify-content-between align-items-center">
                        <div className="logo">
                            <NavLink to="/"><img src={Logo} className='pointer' width="150" /></NavLink>
                        </div>
                        <div className="links d-flex gap-5">
                            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
                            <NavLink to="/works" className={({ isActive }) => (isActive ? "active" : "")} >Portfolio</NavLink>
                            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar

