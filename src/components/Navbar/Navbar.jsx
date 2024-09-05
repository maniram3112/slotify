import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import images from '../../assets';
import './Navbar.css';

const Menu = ({ links }) => (
    <>
        {links.map((link, index) => (
            link.to ? (
                <p key={index}><Link to={link.to}>{link.label}</Link></p>
            ) : (
                <p key={index}><a href={link.href}>{link.label}</a></p>
            )
        ))}
    </>
);

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const getType = () => {
        switch (location.pathname) {
            case '/home':
                return 'home';
            case '/manage-slots':
                return 'manageSlots';
            case '/slots':
                return 'slots';
            default:
                return 'default';
        }
    };

    const type = getType();

    const logo = images.logo1;
    const links = {
        home: [
            { to: '/manage-slots', label: 'Manage Slots' },
            { to: '/profile', label: 'Profile' },
            { href: '#contact', label: 'Contact Us' },
        ],
        manageSlots: [
            { to: '/home', label: 'Home' },
            { to: '/profile', label: 'Profile' },
            { href: '#contact', label: 'Contact Us' },
        ],
        slots: [
            { to: '/home', label: 'Home' },
            { to: '/manage-slots', label: 'Manage Slots' },
            { to: '/profile', label: 'Profile' },
            { href: '#contact', label: 'Contact Us' },
        ]
    }[type] || [];

    const handleBookSlot = () => {
        navigate('/slots');
    };

    return (
        <div className={`navbar ${type}`}>
            <div className="navbar-content flex-col">
                <div className='flex-center'>
                    <div className='navbar-logo'>
                        <img src={logo} alt='logo' />
                    </div>
                    <div className="navbar-links">
                        <Menu links={links} />
                    </div>
                </div>
                {type === 'home' && (
                    <div className='booking-btn-container'>
                        <button className='custom-btn' onClick={handleBookSlot}>
                            Book Your Slot
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
