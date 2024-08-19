import React from 'react';
import { BsGoogle, BsInstagram, BsTwitterX } from 'react-icons/bs';
import images from '../../assets';
import './LandingPage.css';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

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
                    <div className='pageAuth-thirdParty'>
                        <div className='thirdParty-heading'>
                            <h3>Or Sign In with</h3>
                        </div>
                        <div className='thirdParty'>
                            <div className='icons' onLogin={onLogin}><BsInstagram/></div>
                            <div className='icons'><BsGoogle/></div>
                            <div className='icons'><BsTwitterX/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
