import { useEffect, useState } from "react";
import "./App.css";
import Background from "./componentes/BackgroundPrincipal/index.js";
import LadoImagem from "./componentes/LadoImagem";
function App(props) {
const [tamanhoTela,setTamanhoTela] = useState("");

useEffect(() =>{
  const trocaTamanho = ()=>{
    setTamanhoTela(window.innerWidth)
  }
  window.addEventListener("resize",trocaTamanho);
  return()=>{
    window.removeEventListener("resize",trocaTamanho)
  }
})

  if(window.innerWidth >= 901){
    return (
      <div className="backgroundGeral">
        <Background
          color="#6F7357"
          colorLado="#FFFFFF"
          alinhamento="rigth"
          padding="0 0 0 20px"
        ></Background>
        <LadoImagem
          color="#273A2D"
          colorLado="#6F7357"
          alinhamento="left"
          padding = '0 20px 0 0'
        ></LadoImagem>
      </div>
    );
  }
  else{
    return (
    <div className="backgroundGeral">
      <Background
        color="#6F7357"
        colorLado="#FFFFFF"
        alinhamento="end"
        padding=" 0 20px"
      ></Background>
    
    </div>
  );
  }
  
}

export default App;
