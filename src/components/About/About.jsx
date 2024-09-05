import React from 'react';
import images from '../../assets';
import constants from '../../constants';
import './About.css';

const { about } = constants;

const About = () => {
    return (
        <div className='about-container flex-col' id='#about'>
            <img className='about-img bg-img' src={images.about} alt='img' />
            <h2 className='title'>About Us</h2>
            <div className='about-info'>
                {about.map((item, index) => (
                    <div key={index} className='cards'>
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About;
