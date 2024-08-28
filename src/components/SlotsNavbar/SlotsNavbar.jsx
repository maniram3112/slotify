import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../assets';
import './SlotsNavbar.css';

const Menu = () => (
    <>
        <p><Link to="/home">Home</Link></p>
        <p><a href="#manage">Manage Slots</a></p>
        <p><a href="#profile">Profile</a></p>
        <p><a href="#contact">Contact Us</a></p>
    </>
);

const SlotsNavbar = () => {
    return (
        <div className='slotsNav'>
            <div className='slotsNav-container flex-center'>
                <div className='slotsNav-logo'>
                    <img src={images.logo2} alt='logo'/>
                </div>
                <div className='slotsNav-links flex-center'>
                    <Menu/>
                </div>
            </div>
        </div>
    )
}

export default SlotsNavbar
