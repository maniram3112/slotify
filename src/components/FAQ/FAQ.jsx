import React, { useState } from 'react';
import constants from '../../constants';
import './FAQ.css';

const {faq} = constants;

const FAQ = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        if(activeIndex === index){
            setActiveIndex(null);
        }else{
            setActiveIndex(index);
        }
    }

    return (
        <div className='faq-container flex-col'>
            <h2 className='title'>FAQ's</h2>
            <div className='faqs-accordion'>
                {faq.map((item, index) => (
                    <div
                        key={index}
                        className={`faqs ${activeIndex === index ? 'active' : ''}`}
                    >
                        <h4 onClick={() => toggleAccordion(index)}>{item.ques} <span>+</span></h4>
                        {activeIndex === index && <p>{item.ans}</p>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FAQ
