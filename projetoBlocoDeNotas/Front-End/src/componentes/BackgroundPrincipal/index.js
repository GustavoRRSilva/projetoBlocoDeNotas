import React from "react";
import LadoLogin from "../LadoLogin/index.js";
import "./BackgroundPrincipal.css";
function Background(props) {
  return (
    <div
      className="background"
      style={{
        backgroundColor: props.color,
        justifyContent: props.alinhamento,
        padding: props.padding,
      }}
    >
      <LadoLogin colorLado={props.colorLado}></LadoLogin>
    </div>
  );
}

export default Background;
