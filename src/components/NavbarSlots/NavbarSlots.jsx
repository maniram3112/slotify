import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../assets';
// import Booking from '../Booking/Booking';
import './NavbarSlots.css';

const Menu = () => (
    <>
        <p><Link to="/home">Home</Link></p>
        <p><a href="#manage">Manage Slots</a></p>
        <p><a href="#profile">Profile</a></p>
        <p><a href="#contact">Contact Us</a></p>
    </>
);

const NavbarSlots = () => {
    return (
        <div className='navbar-container'>
            {/* <img className='nav-bg bg-img' src={images.nav2} alt='background' /> */}
            <div className='navbar-content'>
                <div className='navbar-logo'>
                    <img src={images.logo2} alt='logo'/>
                </div>
                <div className='navbar-links'>
                    <Menu/>
                </div>
            </div>
            {/* <div className='booking'>
                <Booking />
            </div> */}
        </div>
    );
}

export default NavbarSlots;
