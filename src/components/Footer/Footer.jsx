import React, { useState } from 'react';
import images from '../../assets';
import FeedbackModal from '../FeedbackModal/FeedbackModal';
import ThirdParty from '../ThirdParty/ThirdParty';
import './Footer.css';

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <>
            <footer className='footer-container' id='contact'>
                <div className='footer-content'>
                    <div className='footer-logo flex-center'>
                        <img src={images.logo2} alt='logo' />
                        <span>Why Wait? Slotify Your Day!</span>
                    </div>
                    <div className='footer-links'>
                        <ThirdParty />
                    </div>
                    <div className='footer-contact glass-effect'>
                        <button className='custom-btn' onClick={handleOpenModal}>
                            Give Your Feedback
                        </button>
                    </div>
                </div>
                <div className='footer-copyright'>
                    &copy; 2024 Slotify. All Rights Reserved.
                </div>
            </footer>
            <FeedbackModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </>
    );
};

export default Footer;
