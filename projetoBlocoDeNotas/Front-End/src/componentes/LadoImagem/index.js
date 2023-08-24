import React from "react";
import './LadoImagem.css';
import logo from "../../assets/imgLogin.png"
const LadoImagem = (props) => {
    return(
      <div className="ladoImagem" style={{padding : props.padding}}>
        <div className="foto">
        <img src= {logo} alt= "logo" className="imagem"/> 
        </div>
      </div>
    )
}

export default LadoImagem;