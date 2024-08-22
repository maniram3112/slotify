import React from "react";
import components from '../../components';
import './Home.css';

const {Navbar, Footer, About} = components;

const Home = () =>{
    return(
        <div className="home-container">
            <Navbar/>
            <About/>
            <Footer/>
        </div>
    )
}

export default Home;