import "./App.css";
import Background from "./componentes/BackgroundPrincipal/index.js";
function App(props) {
  return (
    <div className="backgroundGeral">
      <Background
        color="#6F7357"
        colorLado="#FFFFFF"
        alinhamento="rigth"
        padding="0 0 0 20px"
      ></Background>
      <Background
        color="#273A2D"
        colorLado="#6F7357"
        alinhamento="left"
        padding="0 20px 0 0"
      ></Background>
    </div>
  );
}

export default App;
