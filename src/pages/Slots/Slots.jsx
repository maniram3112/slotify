import React from 'react';
import components from '../../components';
import constants from '../../constants';
import './Slots.css';

const {NavbarSlots, Footer} = components;
const {slotAvail} = constants;

const Slots = () => {
    return (
        <div>
            <NavbarSlots/>
            <>
                {slotAvail}
            </>
            <Footer/>
        </div>
    )
}

export default Slots;
