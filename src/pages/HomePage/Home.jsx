import React from "react";
import components from '../../components';

const { Navbar, Footer, About, FAQ} = components;

const Home = () =>{
    return(
        <div className="home-container">
            <Navbar/>
            <About/>
            <FAQ/>
            <Footer/>
        </div>
    )
}

export default Home;