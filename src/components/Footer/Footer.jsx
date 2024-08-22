import React from 'react';
import images from '../../assets';
import ThirdParty from '../ThirdParty/ThirdParty';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container' id='contact'>
            <div className='footer-content'>
                <div className='footer-logo flex-center'>
                    <img src={images.logo2} alt='logo' id='#'/>
                    <span>Why Wait? Slotify Your Day!</span>
                </div>
                <div className='footer-contact glass-effect'>
                    <form>
                        <h2>Help Us Improve</h2>
                        <input
                            type='text'
                            placeholder='Your Opinion Matters'
                        />
                        <button className='custom-btn'>Send</button>
                    </form>
                </div>
                <div className='footer-links'>
                    <ThirdParty />
                </div>
            </div>
            {/* <hr /> */}
            <div className='footer-copyright'>
                &copy; 2024 Slotify. All Rights Reserved.
            </div>
        </div>
    );
}

export default Footer;
