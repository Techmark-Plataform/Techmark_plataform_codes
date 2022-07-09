import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import  styles  from "./navbar2.css";
import logo2 from './logooficce.svg'
import usuario from './usuario.svg'
import usuario2 from './usuario2.svg'
import modo from './modo.svg'
import modo2 from './modo2.svg'

import logo from './logo.svg'; 
import { useEffect } from "react";

function Navbar2(){
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const [tema, setTema] = useState('light');
    const navToggle = () => {
      if (active === "nav__menu") {
        setActive("nav__menu nav__active");
      } else setActive("nav__menu");
  
      // Icon Toggler
      if (icon === "nav__toggler") {
        setIcon("nav__toggler toggle");
      } else setIcon("nav__toggler");
    };
    function exibirlogin() {
        document.querySelector('.login').style.display = "block";}
      return(
    <nav className="nav">
        <div className="nav">
        <div>
        <Link to='/' className="nav_brand"><img src={logo} title='Techmark' alt="Techmark" id='img' className="techmark_img_nav" /><img src={logo2} id='img2'/></Link>
        </div> 
           <div className="nav_menu">
                <ul className={active}>
                <li className="nav_item"><Link to='/' className="nav_link">Home</Link></li>
                <li className="nav_item"><Link to='/comercio' className="nav_link1">Comércios</Link></li>
                <li className="nav_item"><Link to='/hospede' className="nav_link2">Hospede</Link></li>
                <li className="nav_item"><Link to='/cadastre' className="nav_link3">Cadastre-se</Link></li>
                </ul>
            </div>
            <div className="botoes" method="post">
        <Link to="/usuario"> <button className="usuario" onClick={exibirlogin} > <img src={usuario} title='perfil' alt="perfil de usúario" id="usuario"/><img src={usuario2} id="usuario2"/><img src={usuario} title='perfil' alt="perfil de usúario" id="usuario3"/></button>
            </Link>
            </div>
            <div onClick={navToggle} className={icon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
</div>
    </nav>
);
}
export default Navbar2;