import React from 'react';
import components from '../../components';
import constants from '../../constants';
import './Slots.css';

const {SlotsNavbar, Booking, Footer} = components;
const {slotAvail} = constants;

const Slots = () => {
    return (
        <div>
            <SlotsNavbar/>
            <Booking/>
            <>
                {slotAvail}
            </>
            <Footer/>
        </div>
    )
}

export default Slots
