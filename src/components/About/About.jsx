import React from 'react';
import constants from '../../constants';
import './About.css';

const {about} = constants;

const About = () => {
    return (
        <div className='about-container flex-center'>
            <div className='about-info' id='#about'>
            {about.map((item, index) => (
                <div key={index} className='cards'>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default About
