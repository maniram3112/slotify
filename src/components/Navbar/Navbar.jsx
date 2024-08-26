import React from 'react';
import images from '../../assets';
import Booking from '../Booking/Booking';
import './Navbar.css';

const Menu = () => (
    <>
        <p><a href="#aboutUs">About Us</a></p>
        <p><a href="#manage">Manage Slots</a></p>
        <p><a href="#profile">Profile</a></p>
        <p><a href="#contact">Contact Us</a></p>
    </>
);

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <img className='nav-bg bg-img' src={images.nav2} alt='background' />
            <div className='navbar-content'>
                <div className='navbar-logo'>
                    <img src={images.logo3} alt='logo'/>
                </div>
                <div className='navbar-links'>
                    <Menu/>
                </div>
            </div>
            <div className='booking'>
                <Booking/>
            </div>
        </div>
    );
}

export default Navbar;
