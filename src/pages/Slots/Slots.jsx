import React from 'react';
import components from '../../components';
import './Slots.css';

const {Navbar, Footer, Booking} = components;

const Slots = () => {

    return (
        <div>
            <Navbar/>
            <Booking/>
            <Footer />
        </div>
    );
};

export default Slots;