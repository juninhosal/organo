import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import {useState} from "react";
import Time from "./componentes/Time";
import Footer from "./componentes/Footer";
function App() {
    const times = [
        {
            nome: 'Front-End',
            corPrimaria: '#57C278',
            corSecundaria: '#D9F7E9'
        },
        {
            nome: 'Programação',
            corPrimaria: '#82CFFA',
            corSecundaria: '#E8F8FF'
        },
        {
            nome: 'Data Science',
            corPrimaria: '#A6D157',
            corSecundaria: '#F0F8E2'
        },
        {
            nome: 'Devops',
            corPrimaria: '#ED6B69',
            corSecundaria: '#FDE7E8'
        },
        {
            nome: 'UX e Desing',
            corPrimaria: '#DB6EBF',
            corSecundaria: '#FAE9F5'
        },
        {
            nome: 'Mobile',
            corPrimaria: '#FFBA05',
            corSecundaria: '#FFF5D9'
        },
        {
            nome: 'Inovação e Gestão',
            corPrimaria: '#FF8A29',
            corSecundaria: '#FFEEDF'
        },
    ]

    const [colaboradores, setColaboradores] = useState([])

    const novoColaborador = (colaborador) =>{
        setColaboradores([...colaboradores,colaborador])
    }
  return (
    <div className="App">
        <Banner/>
        <Formulario nomeDosTimes={times.map(time => time.nome)}
                    colaboradorCadastrado={colaborador => novoColaborador(colaborador)}/>
        {times.map((time,index )=> <Time
            key={index}
            time={time}
            corPrimaria={time.corPrimaria}
            corSecundaria={time.corSecundaria}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />)}
        <Footer/>
    </div>
  );
}

export default App;
