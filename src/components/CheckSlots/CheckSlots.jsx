import React, { useState } from 'react';
import './CheckSlots.css';

const CheckSlots = ({ slots = [], selectedService }) => {
    const [showBookingModal, setShowBookingModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [updatedSlots, setUpdatedSlots] = useState(slots); // State to handle updated slots

    const handleSlotClick = (slot) => {
        setSelectedSlot(slot);
        setShowBookingModal(true);
    };

    const handleConfirmBooking = () => {
        // Update the slot status to unavailable
        const updated = updatedSlots.map((slot) =>
        slot.time === selectedSlot.time ? { ...slot, status: false } : slot
        );
        setUpdatedSlots(updated);
        setShowBookingModal(false);
        setShowSuccessModal(true);
    };

    const handleCloseModal = () => {
        setShowBookingModal(false);
        setShowSuccessModal(false);
    };

    return (
        <div className="slots-container">
        <h3>Available Slots</h3>
        <div className="slots-list">
            {updatedSlots.length > 0 ? (
            updatedSlots.map((slot, index) => (
                <button
                key={index}
                className={`slot-btn ${slot.status ? 'available' : 'unavailable'}`}
                disabled={!slot.status}
                onClick={() => handleSlotClick(slot)}
                >
                {slot.time}
                </button>
            ))
            ) : updatedSlots.length === 0 ? (
            'Select a service and date to book a slot'
            ) : (
            <p>No slots available for the selected service.</p>
            )}
        </div>

        {showBookingModal && (
            <div className="modal-overlay flex-center">
            <div className="modal-content">
                <h4>Confirm Your Booking</h4>
                <p>Service: {selectedService}</p>
                <p>Time: {selectedSlot.time}</p>
                <div className="modal-actions">
                <button className="confirm-btn" onClick={handleConfirmBooking}>
                    Confirm
                </button>
                <button className="exit-btn" onClick={handleCloseModal}>
                    Exit
                </button>
                </div>
            </div>
            </div>
        )}

        {showSuccessModal && (
            <div className="modal-overlay flex-center">
            <div className="modal-content">
                <h4>Booking Successful!</h4>
                <p>Your slot has been booked successfully.</p>
                <button className="confirm-btn" onClick={handleCloseModal}>
                OK
                </button>
            </div>
            </div>
        )}
        </div>
    );
};

export default CheckSlots;
