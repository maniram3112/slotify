import React from 'react';
import { BsGoogle, BsInstagram, BsLinkedin, BsTwitterX } from 'react-icons/bs';
import './ThirdParty.css';

const ThirdParty = () => {
    return (
        <div className='thirdParty'>
            <div className='thirdParty-heading'>
                <h3>Connect with us</h3>
            </div>
            <div className='thirdParty-icons'>
            <div className='icons'><BsInstagram/></div>
            <div className='icons'><BsGoogle/></div>
            <div className='icons'><BsTwitterX/></div>
            <div className='icons'><BsLinkedin/></div>
            </div>
        </div>
    )
}

export default ThirdParty
