import React from "react";
import './CampoTexto.css';

const CampoTexto = (props)=>{
    return(
        <input
        type={props.tipoInput}
        className="inputTexto"
        placeholder={props.CampoTexto}
      />
    )
}

export default CampoTexto;