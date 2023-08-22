import React from "react";
import './CampoTexto.css';

const CampoTexto = (props)=>{
    return(
        <input
        type="text"
        className="inputTexto"
        placeholder={props.CampoTexto}
      />
    )
}

export default CampoTexto;