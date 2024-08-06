import React from 'react';
import images from '../../assets';
import './LandingPage.css';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

const LandingPage = () => {
    return (
        // <div className='landingPage'>
            <div className='pageContainer'>
                <div className='pageImg'>
                    <img src={images.landingImg} alt='bankImage'/>
                </div>
                <div className='pageAuth'>
                    {/* <div className='pageAuth-logo'>
                        <img src={images.logo2} alt='logo'/>
                    </div> */}
                    <SignIn/>
                    <SignUp/>
                </div>
            </div>
        // </div>
    )
}

export default LandingPage
