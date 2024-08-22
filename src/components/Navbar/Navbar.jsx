import React from 'react';
import images from '../../assets';
import './Navbar.css';

const Menu = () =>(
    <>
        <p><a href="#aboutUs">About Us</a></p>
        <p><a href="#manage">Manage Slots</a></p>
        <p><a href="#profile">Profile</a></p>
        <p><a href="#contact">Contact Us</a></p>
    </>
)

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='navbar-logo'>
                <img src={images.logo3} alt='#logo'/>
            </div>
            <div className='navbar-links'>
                <Menu/>
            </div>
        </div>
    )
}

export default Navbar
