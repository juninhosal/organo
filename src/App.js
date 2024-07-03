import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import {useContext, useState} from "react";
import Time from "./componentes/Time";
import Footer from "./componentes/Footer";
import { v4 as uuidv4 } from 'uuid';

function App() {

    const [times, setTimes] = useState([
        {
            id: uuidv4(),
            nome: 'Front-End',
            cor: '#57C278',
        },
        {
            id: uuidv4(),
            nome: 'Programação',
            cor: '#82CFFA',
        },
        {
            id: uuidv4(),
            nome: 'Data Science',
            cor: '#A6D157',
        },
        {
            id: uuidv4(),
            nome: 'Devops',
            cor: '#ED6B69',
        },
        {
            id: uuidv4(),
            nome: 'UX e Desing',
            cor: '#DB6EBF',
        },
        {
            id: uuidv4(),
            nome: 'Mobile',
            cor: '#FFBA05',
        },
        {
            id: uuidv4(),
            nome: 'Inovação e Gestão',
            cor: '#FF8A29',
        },
    ])

    const [colaboradores, setColaboradores] = useState([])

    const novoColaborador = (colaborador) =>{
        setColaboradores([...colaboradores,colaborador])
    }

    function mudarCorTime(cor, id){
        setTimes(times.map(time => {
            if(time.id === id) {
                time.cor = cor;
            }
            return time;
        }));
    }

    function deletarColaborador(id) {
        setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
    }

    function cadastrarTime(novoTime){
        setTimes([...times,{ ...novoTime, id: uuidv4() }])
    }

    function resolverFavorito(id){
        setColaboradores(colaboradores.map(colaborador =>{
            if(colaborador.id === id) colaborador.favorito = !colaborador.favorito
            return colaborador
        }))
    }

  return (
    <div className="App">
        <Banner/>
        <Formulario
            cadastrarTime={cadastrarTime}
            nomeDosTimes={times.map(time => time.nome)}
            colaboradorCadastrado={colaborador => novoColaborador(colaborador)}/>
        {times.map((time,index )=>
            <Time
                key={index}
                time={time}
                cor={time.cor}
                colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
                deletarColaborador={deletarColaborador}
                mudarCor={mudarCorTime}
                favoritar={resolverFavorito}
            />
        )}
        <Footer/>
    </div>
  );
}

export default App;
