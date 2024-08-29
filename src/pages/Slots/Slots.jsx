import React from 'react';
import components from '../../components';
import './Slots.css';

const {NavbarSlots, Footer, Booking} = components;

const Slots = () => {

    return (
        <div>
            <NavbarSlots />
            <Booking/>
            <Footer />
        </div>
    );
};

export default Slots;