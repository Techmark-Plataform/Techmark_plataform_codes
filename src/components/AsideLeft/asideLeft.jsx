import "./asideLeft.css";
import foto from"./lanhouse.jpg"
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import "../../../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-calendars/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-lists/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-popups/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
import raquel from "./sobrancelha.jpg"
import salao from "./salao.jpg"
import roupas from "./roupas.jpg"
function Agendas() {
  const [value, onChange] = useState(new Date());
    return( 
        <div className="agenda_completa">
        <aside className="agenda_favoritos">   
        <h3 className="agenda_title">Agenda</h3>
            <div className="agenda">
            <ScheduleComponent height={300}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
</ScheduleComponent>
    </div>
        <div className="favoritos_usuario">
        <h3 className="favoritos_title">Favoritos</h3>
        <div className="comercios_grid">
        <div className="comercios" id="primeiro">
        <img src={raquel} width={90} height={90} alt="" className="img_comercio" />

        </div>
        <div className="comercios" id="primeiro">
        <img src={salao} width={90} height={90} alt="" className="img_comercio"/>

        </div>
        <div className="comercios" id="primeiro">
        <img src={roupas} width={90} height={90} alt="" className="img_comercio" />

        </div>
    
    
    
        </div>
        </div>
        </aside>
        </div>
    )
}
export default Agendas;