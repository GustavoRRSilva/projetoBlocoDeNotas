import React from "react";
import "./LadoLogin.css";
function LadoLogin(props) {
  return (
    <div
      className="ladoLogin"
      style={{ backgroundColor: props.colorLado }}
    ></div>
  );
}

export default LadoLogin;
