import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import components from '../../components';
import constants from '../../constants';
import './ManageSlots.css';

const {NavbarSlots, Footer} = components;
const {slotsHistory} = constants;

const ManageSlots = () => {

    const [activeTab, setActiveTab] = useState('upcoming');
    const [upcomingSlots, setUpcomingSlots] = useState(slotsHistory.find(s => s.status === 'upcoming').availSlots);
    const [completedSlots] = useState(slotsHistory.find(s => s.status === 'completed').availSlots);

    const handleTabClick = (tab) =>{
        setActiveTab(tab);
    }

    const handleDelete = (index) =>{
        const updateSlots = [...upcomingSlots];
        updateSlots.splice(index, 1);
        setUpcomingSlots(updateSlots);
    }

    // const handleEdit = (index) => {
    //     alert(`Edit slot at ${index}`);
    // }

    return (
        <div className='manage'>
            <NavbarSlots/>
            <div className='manage-container'>
                <div className='tabs flex-center'>
                    <button
                        className={`tab ${activeTab === 'upcoming' ? 'active' : ''}`}
                        onClick={() => handleTabClick('upcoming')}
                    >
                        Upcoming
                    </button>
                    <button
                        className={`tab ${activeTab === 'completed' ? 'active' : ''}`}
                        onClick={() => handleTabClick('completed')}
                    >
                        Completed
                    </button>
                </div>
                    {
                        activeTab === 'upcoming' && (
                            <div className='manage-upcoming'>
                                <h3>Upcoming Slots</h3>
                                {
                                    upcomingSlots.map((slot, index) =>(
                                        <div key={index} className='slot-item'>
                                            <div className='slot-info'>
                                                <p>Service: {slot.service}</p>
                                                <p>Time: {slot.time}</p>
                                                <p>Date: {slot.date}</p>
                                            </div>
                                            <div className='slots-action'>
                                                {/* <FaEdit className='icon edit' onClick={() => handleEdit(index)}/> */}
                                                <FaTrashAlt className='icon delete' onClick={() => handleDelete(index)}/>
                                            </div>
                                        </div>
                                    )
                                )
                                }
                            </div>
                        )
                    }

{
                        activeTab === 'completed' && (
                            <div className='manage-completed'>
                                <h3>Completed Slots</h3>
                                {
                                    completedSlots.map((slot, index) =>(
                                        <div key={index} className='slot-item'>
                                            <div className='slot-info'>
                                                <p>Service: {slot.service}</p>
                                                <p>Time: {slot.time}</p>
                                                <p>Date: {slot.date}</p>
                                            </div>
                                        </div>
                                    )
                                )
                                }
                            </div>
                        )
                    }
            </div>
            <Footer/>
        </div>
    )
}

export default ManageSlots
