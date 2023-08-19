import './Formulario.css';
import CampoTexto from "../CampoTexto";
import {CampoSelect} from "../CampoSelect/CampoSelect";
import Botao from "../Botao";

const times = [
    'Programação'
    ,'Front-End'
    ,'Data Science'
    ,'Devops'
    ,'UX e Desing'
    ,'Mobile'
    ,'Inovação e Gestão'
]

const salvar = (evento) => {
    evento.preventDefault()
}
export const Formulario = () =>{
    return(
        <section className={"formulario"}>
            <form onSubmit={salvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label={'Nome'} placeholder={'Digite o seu nome'}/>
                <CampoTexto obrigatorio={true} label={'Cargo'} placeholder={'Digite o seu cargo'}/>
                <CampoTexto label={'Imagem'} placeholder={'Informe o endereço da imagem'}/>
                <CampoSelect label={'Time'} itens={times}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}
