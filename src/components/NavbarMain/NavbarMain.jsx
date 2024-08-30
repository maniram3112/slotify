import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import images from '../../assets';
import './NavbarMain.css';

const Menu = () => (
    <>
        {/* <p><a href="#aboutUs">About Us</a></p> */}
        <p><Link to='/manage-slots'>Manage Slots</Link></p>
        <p><a href="#profile">Profile</a></p>
        <p><a href="#contact">Contact Us</a></p>
    </>
);

const NavbarMain = () => {

    const navigate = useNavigate();

    const handleBookSlot = () =>{
        navigate('/slots')
    }

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
            <div className='flex-center'>
                <button
                    className='custom-btn'
                    onClick={handleBookSlot}
                >
                    Book Your Slot
                </button>
            </div>
        </div>
    )
}

export default NavbarMain
