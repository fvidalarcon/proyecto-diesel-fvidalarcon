import React from 'react';
import '../assets/css/styles.css';

export default function Comunes({result,mostrarCuadros}){
    return(
        <div key={result.cod_comuna} className="div_list" onClick={()=>{mostrarCuadros(result.cod_comuna,result.nom_comuna)}}>
            <h3>{result.nom_comuna}</h3>
        </div>
    )
}