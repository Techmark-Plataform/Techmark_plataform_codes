import React from "react";
import './header.css'
import img from"./searchicone.svg"
import mulher from './mulher1.png'
import { Link } from "react-router-dom";


function Header() {
    return(
        <header className="header">
        
            <h1 className="title1">Descubra lugares incríveis</h1>
            <h2 className="title2">Busque aqui os melhores comércios da região</h2>
     <div className="header_place">
            <form className="formheader" action='/' method='post'>
  <input type='text' name='pesquisa' placeholder='O que você procura?'/>
  <Link to='/busca' className="nav_link2">  <button type='submit'><img src={img} alt="A imagem retrata uma mulher de braços cruzados em posição de poder e confiança, ela está usando uma calça preta com uma camiseta branca de riscas azuis." srcset=""id='lupa' /></button>
</Link>
</form>

<img src={mulher} className='img_mulher'alt="" />
</div>
    </header>
    )
    }
export default Header;