import React from 'react';
import './CheckSlots.css';

const CheckSlots = ({ slots = [], onSlotClick }) => {
    return (
        <div className='slots-container'>
            <h3>Available Slots</h3>
            <div className='slots-list'>
                {slots.length > 0 ? (
                    slots.map((slot, index) => (
                        <button
                            key={index}
                            className={`slot-btn ${slot.status ? 'available' : 'unavailable'}`}
                            disabled={!slot.status}
                            onClick={() => onSlotClick(slot)}
                        >
                            {slot.time}
                        </button>
                    ))
                ) : slots.length === 0 ? "Select a service and date to book a slot" :
                (
                    <p>No slots available for the selected service.</p>
                )
                }
            </div>
        </div>
    );
};

export default CheckSlots;
