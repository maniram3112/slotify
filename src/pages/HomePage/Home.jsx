import React from "react";
import components from '../../components';
import './Home.css';

const {Navbar, Footer, About, FAQ} = components;

const Home = () =>{
    return(
        <div className="home-container">
            <Navbar/>
            {/* <Booking/> */}
            <About/>
            <FAQ/>
            <Footer/>
        </div>
    )
}

export default Home;