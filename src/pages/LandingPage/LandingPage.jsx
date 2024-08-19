import React from 'react';
import images from '../../assets';
import components from '../../components';
import './LandingPage.css';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

const {ThirdParty} = components;

const LandingPage = ({authType, onLogin}) => {
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
                    <div className='pageAuth-cred'>
                        {
                            authType === 'signin'
                                ?
                                    <SignIn onLogin={onLogin}/>
                                :
                                    <SignUp onLogin={onLogin}/>
                        }
                    </div>
                    <ThirdParty/>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
