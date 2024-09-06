import React from 'react';
import components from '../../components';

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