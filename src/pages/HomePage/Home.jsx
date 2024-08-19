import React from "react";
import components from '../../components';
import './Home.css';

const {Navbar} = components;

const Home = () =>{
    return(
        <div className="home-container">
            <Navbar/>
            {/* <About/> */}
        </div>
    )
}

export default Home;