import { useEffect } from "react";
import { useState } from "react";
import transportadora from "./transportadora.jpg";
import salao from "./salao.jpg";
import frutas from "./frutas.jpg";
import pintor from "./pintor.jpg";
import lanhouse from "./computadores.jpg";
import quitanda from "./mercadinho.jpg";
import raquel from "./sobrancelha.jpg"
import espetinhos from "./churrasco.jpg"
import bolos from "./bolos.jpg";
import roupas from "./roupas.jpg"
import './center.css'
import lan from "./lanhouse.jpg"
import transportadora1 from "./transportadora1.jpg";
import salao1 from "./salao1.jpg";
import frutas1 from "./quitanda1.jpg";
import pintor1 from "./pintor1.jpg";
import lanhouse1 from "./computadores1.jpg";
import quitanda1 from "./mercadinho1.jpg";
import raquel1 from "./sobrancelha1.jpg"
import espetinhos1 from "./churrasco1.jpg"
import bolos1 from "./bolos1.jpg";
import roupas1 from "./roupas1.jpg"
const PAGE_NUMBER = 1;

function Center(){
 const [state, setState] = useState( []);
 const[page, setPage]= useState(PAGE_NUMBER);
 useEffect(  () =>{
fetch(
    'https://api.instantwebtools.net/v1/passenger?page=${page}&size=5'
)
.then(res=>res.json())
.then(json=> setState([...state, ...json.data]))
 }, [page]);
 const scrollToEnd = () =>{
    setPage( page+1);
 }
 window.onscroll = function (){
    if(window.innerHeight+document.doctype.scrollTop===document.documentElement.offsetHeight){
        scrollToEnd()
    }
 };
 return(
    <div className="center">
            <div  className={'container'}>
         <div className="public_name">
        <img src={transportadora} width={60} alt="" className="imagem-comercio" />
        <h3 className="comercios_name">Transportadora Felix</h3>
        </div>
        <div className="public">
            <h3 className="public_h3">Segurança de ponta a ponta na nossa transportadora, entre em contato</h3>
            <img src={transportadora1} width={365} alt="" />
        </div>
        <div className="public_name">
        <img src={frutas} width={60} alt="" className="imagem-comercio" />
        <h3 className="comercios_name">Frutumania</h3>
        </div>
        <div className="public">
            <h3 className="public_h3">Semana da fruta, venham nos visitar todas as frutas com 5% de desconto, conheça nossas novidades</h3>
            <img src={frutas1} width={365} alt="" />
        </div>
        <div className="public_name">
        <img src={salao} width={60} alt="" className="imagem-comercio" />
        <h3 className="comercios_name">Barbearia da Bárbara</h3>
        </div>
        <div className="public">
            <h3 className="public_h3">Cortes profissionais por um preço justo, trazendo um amigo você recebe desconto de 30% no seu corte</h3>
            <img src={salao1} width={365} alt="" />
        </div>
        <div className="public_name">
        <img src={pintor} width={60} alt="" className="imagem-comercio" />
        <h3 className="comercios_name">Bruno pintor</h3>
        </div>
        <div className="public">
            <h3 className="public_h3">Pintura rápida, bem feita, e pronta pra sua casa</h3>
            <img src={pintor1} width={365} alt="" />
</div>
<div className="public_name">
        <img src={lanhouse} width={60} alt="" className="imagem-comercio" />
        <h3 className="comercios_name">Lan House do Emerson</h3>
        </div>
        <div className="public">
            <h3 className="public_h3">Computadores, peça e manutenção você encontra aqui</h3>
            <img src={lanhouse1} width={365} alt="" />
</div>
<div className="public_name">
        <img src={quitanda} width={60} alt="" className="imagem-comercio" />
        <h3 className="comercios_name">Quitanda de Banda</h3>
        </div>
        <div className="public">
            <h3 className="public_h3">Tudo que você precisa em um só lugar, venha conhecer.</h3>
            <img src={quitanda1} width={365} alt="" />
</div>
<div className="public_name">
        <img src={raquel} width={60} alt="" className="imagem-comercio" />
        <h3 className="comercios_name">Raquel sobrancelhas</h3>
        </div>
        <div className="public">
            <h3 className="public_h3">melhor designer de sobrancelhas da sua região, venha conhecer nossa equipe</h3>
            <img src={raquel1} width={365} alt="" />
</div>
<div className="public_name">
        <img src={espetinhos} width={60} alt="" className="imagem-comercio" />
        <h3 className="comercios_name">Espetinhos Churrascada</h3>
        </div>
        <div className="public">
            <h3 className="public_h3"> Do campo direto para o seu churras de domingo.</h3>
            <img src={espetinhos1} width={365} alt="" />
</div>
<div className="public_name">
        <img src={bolos} width={60} alt="" className="imagem-comercio" />
        <h3 className="comercios_name">Bom feito</h3>
        </div>
        <div className="public">
            <h3 className="public_h3">Bolos variados com tamanhos diferentes, doces para sua festa, aqui tem, vem</h3>
            <img src={bolos1} width={365} alt="" />
</div>
<div className="public_name">
        <img src={roupas} width={60} alt="" className="imagem-comercio" />
        <h3 className="comercios_name">Passe e compre</h3>
        </div>
        <div className="public">
            <h3 className="public_h3">todas as roupas com 20% de desconto venha comprar conosco.</h3>
            <img src={roupas1} width={365} alt="" />
</div>
        
    </div>
    </div>
 )
}
export default Center;