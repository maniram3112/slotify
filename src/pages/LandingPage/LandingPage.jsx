import React from 'react';
import { BsGoogle, BsInstagram, BsTwitterX } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import images from '../../assets';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className='landingPage'>
            <div className='pageContainer'>
                <div className='pageImg'>
                    <img src={images.landingImg} alt='bankImage'/>
                </div>
                <div className='pageAuth'>
                    <div className='pageAuth-logo'>
                        <img src={images.logo2} alt='logo'/>
                    </div>
                    <div className='pageAuth-heading'>
                        <h1>Welcome to Slotify</h1>
                    </div>
                    <div className='pageAuth-signIn'>
                        <Link to="/signin" className='auth-link'/>
                        <Link to="/signup" className='auth-link'/>
                    </div>
                    <div className='pageAuth-thirdParty'>
                        <div className='thirdParty-heading'>
                            <h3>Or Sign In with</h3>
                        </div>
                        <div className='thirdParty'>
                            <BsInstagram/>
                            <BsGoogle/>
                            <BsTwitterX/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
