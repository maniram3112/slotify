import React from "react";
import components from '../../components';
import './Home.css';

const {Navbar, Footer} = components;

const Home = () =>{
    return(
        <div className="home-container">
            <Navbar/>
            <Footer/>
        </div>
    )
}

export default Home;