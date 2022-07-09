
import Perfil from "../components/header_perfil/header_perfil";
import Agendas from "../components/AsideLeft/asideLeft";
import Center from "../components/Center/center";
import Anuncio from "../components/AsideRight/asideRight";
import Navbar2 from "../components/navbar/navbar2";
function User() {
    return(
        
        <div>  
            <Navbar2/>  
            <Perfil/>
        <div className="user_section">

            <Agendas/>
            <Center/>
            <Anuncio/>
        </div>
        </div>
    )
    
}
export default User;