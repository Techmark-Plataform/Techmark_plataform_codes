import React from "react";
import Navbar2 from "../components/navbar/navbar2";
import Login from "../components/Login/login";
import Header from "../components/header/header";
import Menu from "../components/menu/menu"
import Negocio from "../components/carrossel/carrosel";
import About from "../components/About/about";
import Negocio2 from "../components/carrossel1/carrosel1";
import Regioes from "../components/Regioes/regioes";
import Parcerias from "../components/Parcerias/parceria";
import Footer from '../components/Footer/Footer';
function Home() {
    return(
        <main>
            <Navbar2/>
            <Login/>
            <Header/>
            <Menu/>
            <Negocio/>
            <About/>
            <Negocio2/>
            <Regioes/>
            <Parcerias/>
            <Footer/>
        </main>
    )
};
export default Home;