import React, { useState } from 'react';
import './FeedbackModal.css';

const FeedbackModal = ({ isOpen, onClose }) => {
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Feedback submitted:', feedback);
        setFeedback('');
        onClose();
    };

    return (
        isOpen ? (
            <div className='modal-overlay'>
                <div className='modal-content'>
                    <button className='modal-close' onClick={onClose}>×</button>
                    <h2>Provide Your Feedback</h2>
                    <form onSubmit={handleSubmit}>
                        <textarea
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            placeholder='Your feedback here...'
                            required
                        ></textarea>
                        <button type='submit' className='custom-btn'>Send Feedback</button>
                    </form>
                </div>
            </div>
        ) : null
    );
};

export default FeedbackModal;
