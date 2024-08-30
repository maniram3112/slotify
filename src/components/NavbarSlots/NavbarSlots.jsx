import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../assets';
import './NavbarSlots.css';

const Menu = () => (
    <>
        <p><Link to="/home">Home</Link></p>
        <p><Link to='/manage-slots'>Manage Slots</Link></p>
        <p><a href="#profile">Profile</a></p>
        <p><a href="#contact">Contact Us</a></p>
    </>
);

const NavbarSlots = () => {
    return (
        <div className='navbar-container'>
            <div className='navbar-content'>
                <div className='navbar-logo'>
                    <img src={images.logo1} alt='logo'/>
                </div>
                <div className='navbar-links'>
                    <Menu/>
                </div>
            </div>
        </div>
    );
}

export default NavbarSlots;
