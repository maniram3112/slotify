import React from 'react';
import images from '../../assets';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='navbar-logo'>
                <img src={images.logo3} alt='logo'/>
            </div>
            <div className='navbar-links'>
                <div className='link' id='about'>
                    <p>About us</p>
                </div>
                <div className='link' id='slots'>
                    <p>Manage Slots</p>
                </div>
                <div className='link' id='profile'>
                    <p>Profile</p>
                </div>
                <div className="link" id='contact'>
                    <p>Contact Us</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar
