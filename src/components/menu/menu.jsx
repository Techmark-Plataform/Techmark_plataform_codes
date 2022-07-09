import mercados from './mercados.svg'
import beleza from './beleza.svg'
import servicos from './servicos.svg'
import roupas from './roupa.svg'
import barraca from './barraca.svg'
import './menu.css';
import {Link} from "react-router-dom"
function Menu() {
    return(
        <main className='menu' id='menu'>
            <ul className='items_menu'>
               <Link to="./busca/mercados"><li className='item1_menu'><button className='botao1_menu'><img src={mercados} alt="" id='icone1_menu'/><a href='#' className='texto1_menu'>Mercados</a></button></li></Link>
               <Link to="./busca/beleza"><li className='item2_menu'><button className='botao2_menu'><img src={beleza} alt="" id='icone2_menu'/> <a href='#' className='texto2_menu'>Beleza</a></button></li></Link>
                <Link to='./busca/servicos'><li className='item3_menu'><button className='botao3_menu'><img src={servicos} alt="" id='icone3_menu'/><a href='#' className='texto3_menu'>Serviços</a></button></li></Link>
                <Link to='/busca/roupas'><li className='item4_menu'><button className='botao4_menu'><img src={roupas} alt="" id='icone4_menu' /><a href='#' className='texto4_menu'>Roupas</a></button></li></Link>
                <Link to='/busca/restaurantes'><li className='item5_menu'><button className='botao5_menu'><img src={barraca} alt="" id='icone5_menu'/><a href='#' className='texto5_menu'>Restaurantes</a></button></li>
           </Link> </ul>
        </main>

    )
    }
export default Menu;