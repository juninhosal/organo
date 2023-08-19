import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import {useState} from "react";
function App() {
    const [colaboradores, setColaboradores] = useState([])

    const novoColaborador = (colaborador) =>{
        console.log(colaboradores)
        setColaboradores([...colaboradores,colaborador])
    }
  return (
    <div className="App">
      <Banner/>
      <Formulario colaboradorCadastrado={colaborador => novoColaborador(colaborador)}/>
    </div>
  );
}

export default App;
