import React from "react";
import "./LadoLogin.css";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto/index.js";
function LadoLogin(props) {
  return (
    <div className="ladoLogin" style={{ backgroundColor: props.colorLado }}>
      <h1 className="titulo">Welcome back!</h1>
      <Botao botao="Entre com o google"></Botao>
      <div className="or">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="198"
          height="2"
          viewBox="0 0 198 2"
          fill="none"
        >
          <path d="M1 1.5L197 1.04419" stroke="black" />
        </svg>
        <p>or</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="198"
          height="2"
          viewBox="0 0 198 2"
          fill="none"
        >
          <path d="M1 1.5L197 1.04419" stroke="black" />
        </svg>
      </div>
      <CampoTexto CampoTexto="Seu email"></CampoTexto>
      <CampoTexto CampoTexto="Sua senha"></CampoTexto>
      <div className="check">
        <div className="checkboxDiv">
          <input type="checkbox" className="checkbox"></input>
          <p className="textoCheck">Salve minha conta</p>
        </div>
        <p className="textoCheck sublinhado">Esqueci a senha</p>
      </div>
      <div className="barraEstilo"></div>
      {/*
      Trocar estização de inline para a pagina normal e finalizar a mesma
      <div style={{display:'flex',height:'auto',justifyContent:'space-between',width:'100%',maxWidth:'65%'}}>
      <p>Não tem conta?</p>
      <p className="sublinhado">Faça o cadastro!</p>
      </div>
      */}
      <Botao botao="Login" imagem="none"></Botao>
    </div>
  );
}

export default LadoLogin;
