import React from "react";
import components from '../../components';
import './Home.css';

const {NavbarMain, Footer, About, FAQ} = components;

const Home = () =>{
    return(
        <div className="home-container">
            <NavbarMain/>
            <About/>
            <FAQ/>
            <Footer/>
        </div>
    )
}

export default Home;