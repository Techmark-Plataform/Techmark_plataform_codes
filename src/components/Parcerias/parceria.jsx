import './parceria.css'
import WeaMe from './weame.svg'
import loquei from './loquei.svg'
import BraillinCode from './braillincode.png'

function Parcerias(){
return(

    <section className='parceria1'>
            <div>
            <h3 className="Leitura_parcerias">Parcerias</h3>
        </div>
    <div className="Negocios_parcerias1">

    <div class="parceria 2 ">
    <div class="card_parceria" >
    <img src={BraillinCode} class="card-img-top_parceria" alt="..."/>

  </div>
  </div>

    <div class="parceria 3">
    <div class="card_parceria" >
  <img src={loquei} class="card-img-top_parceria" alt="..."/>
</div>
    </div>   
    <div class="parceria 4">
    <div class="card_parceira" >
  <img src={WeaMe}  class="card-img-top_parceria" alt="..."/>
  </div>
</div>
  </div>

    </section>
)
}
export default Parcerias;