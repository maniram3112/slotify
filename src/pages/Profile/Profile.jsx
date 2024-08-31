import React from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import components from '../../components';
import './Profile.css';

const {Footer} = components;

const Profile = () => {

    const navigate = useNavigate();

    const handleActivityClick =()=>{
        navigate('/manage-slots');
    }

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/signin');
    };

    return (
        <>
            <div className='profile-container'>
                <h1 className='profile-title'>User Profile</h1>
                <div className='profile-img'>
                    <BiUserCircle/>
                </div>
                <div className='user-info'>
                    <h2>Personal Information</h2>
                    <p><strong>Name:</strong> User1</p>
                    <p><strong>Email:</strong> abc@gmail.com</p>
                    <p><strong>Phone:</strong> xxx-xxx-xx06</p>
                    <p><strong>Address:</strong> 123 Main St, City, Country</p>
                    <p><strong>Date of Birth:</strong> December 31, 2002</p>
                </div>
                <div className='service-history'>
                    <h2>Service History</h2>
                    <p onClick={handleActivityClick} className="clickable-activity">
                        <strong>Activity:</strong> View recent activities
                    </p>
                </div>
                <div className="security-settings">
                    <h2>Security Settings</h2>
                    <p><strong>Last Login:</strong> 30/08/2024 10:00 AM</p>
                    <p><strong>Two-Factor Authentication:</strong> Enabled</p>
                </div>
                <div className="logout-container">
                    <button onClick={handleLogout} className="logout-button">
                        Logout
                    </button>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Profile
