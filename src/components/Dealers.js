import React from "react";
import { Paper }  from "@material-ui/core";
import moment from "moment";
import 'moment/locale/es';



export default function Dealers({ detail, openModal }) {
  /*  console.log(detail.precios["petroleo diesel"]);
    
    let sortedDealers = [...detail.precios["petroleo diesel"]];

    sortedDealers.sort((a , b) => {
        if (detail.precios["petroleo diesel"] < detail.precios["petroleo diesel"]) {
        return -1;
    }
    if (detail.precios["petroleo diesel"] > detail.precios["petroleo diesel"]) {
        return 1;
    }
    return 0;
    });
    */

   let date = detail.fecha_hora_actualizacion;
   let dateok = moment(date).locale('es').format('lll');
   

   
  return (

<Paper className="paper">
        <div onClick={() => {   openModal(detail); }}>
          {typeof(detail.precios["petroleo diesel"]) === 'undefined' ?
             null
            :
            <div>
            <img src={detail.distribuidor.logo_svg} className="img_logo_svg" alt="imagen_logo"/>
            <h3>{detail.direccion_calle} {detail.direccion_numero}</h3>
            <h3> ${detail.precios["petroleo diesel"]}</h3>
            
            <h5>Ultima Actualización: {dateok}</h5>



          </div>
          }
        </div>
            </Paper>
 
  );

}

