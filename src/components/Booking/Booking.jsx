import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Booking.css';

const Booking = () => {
    const [currentDate] = useState(new Date());
    const [availableDates, setAvailableDates] = useState([]);
    const [selectedService, setSelectedService] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const generateDates = () => {
            const dates = [];
            let tempDate = new Date(currentDate);
            for (let i = 0; i < 7; i++) {
                const newDate = new Date(tempDate);
                newDate.setDate(tempDate.getDate() + i);
                const day = newDate.getDay();

                if (day !== 0) {
                    const date = newDate.getDate();
                    const month = newDate.getMonth();
                    const firstDay = new Date(newDate.getFullYear(), month, 1).getDay();
                    const isSecondSaturday = (day === 6 && (date >= 8 && date <= 14) && (firstDay <= 6));

                    if (!isSecondSaturday) {
                        dates.push(new Date(newDate));
                    }
                }
            }
            setAvailableDates(dates);
        };

        generateDates();
    }, [currentDate]);

    const handleServiceChange = (e) => {
        setSelectedService(e.target.value);
    };

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const handleCheckAvailability = () => {
        if (selectedService && selectedDate) {
            navigate('/slots');
        } else {
            setError('Please select both a service and a date.');
        }
    };

    return (
        <div className='book-container flex-center'>
            <div className='book-modal'>
                <h2>Book Your Appointment</h2>
                <div className='form-group'>
                    <select 
                        className='custom-select' 
                        value={selectedService} 
                        onChange={handleServiceChange}
                    >
                        <option value="">Select Service</option>
                        <option>Open New Account</option>
                        <option>Apply for Credit Card</option>
                        <option>Loan Consultation</option>
                        <option>Fixed Deposit Management</option>
                        <option>Meet Relationship Manager</option>
                        <option>Update KYC Information</option>
                    </select>
                </div>
                <div className='form-group'>
                    <select 
                        className='custom-select'
                        value={selectedDate}
                        onChange={handleDateChange}
                    >
                        <option value="">Select Date</option>
                        {availableDates.map((date, index) => (
                            <option key={index} value={date.toLocaleDateString()}>
                                {date.toLocaleDateString()}
                            </option>
                        ))}
                    </select>
                </div>
                {error && <p className='error-message'>{error}</p>}
                <button className='custom-btn' onClick={handleCheckAvailability}>
                    Check Availability
                </button>
            </div>
        </div>
    );
};

export default Booking;
