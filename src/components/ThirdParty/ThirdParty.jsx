import React from 'react';
import { BsGoogle, BsInstagram, BsTwitterX } from 'react-icons/bs';
import './ThirdParty.css';

const ThirdParty = () => {
    return (
        <div className='thirdParty'>
            <div className='thirdParty-heading'>
                <h3>Or Sign In with</h3>
            </div>
            <div className='thirdParty-icons'>
            <div className='icons'><BsInstagram/></div>
            <div className='icons'><BsGoogle/></div>
            <div className='icons'><BsTwitterX/></div>
            </div>
        </div>
    )
}

export default ThirdParty
