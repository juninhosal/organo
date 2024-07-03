import './Formulario.css';
import Campo from "../Campo";
import {CampoSelect} from "../CampoSelect/CampoSelect";
import Botao from "../Botao";
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

export const Formulario = ({nomeDosTimes,colaboradorCadastrado, cadastrarTime}) =>{
    const [nome,setNome] = useState('')
    const [cargo,setCargo] = useState('')
    const [imagem,setImagem] = useState('')
    const [time,setTime] = useState('')
    const [nomeTime,setnomeTime] = useState('')
    const [corTime,setcorTime] = useState('')
    const id = uuidv4();
    const favorito = false;

    const salvar = (evento) => {
        evento.preventDefault()
        colaboradorCadastrado({
             nome
            ,cargo
            ,imagem
            ,time
            ,id
            ,favorito
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }
    return(
        <section className={"formulario"}>
            <form onSubmit={salvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Campo
                    obrigatorio={true}
                    label={'Nome'}
                    placeholder={'Digite o seu nome'}
                    valor={nome}
                    setValor={valor => setNome(valor)}
                />
                <Campo
                    obrigatorio={true}
                    label={'Cargo'}
                    placeholder={'Digite o seu cargo'}
                    valor={cargo}
                    setValor={valor => setCargo(valor)}
                />
                <Campo
                    label={'Imagem'}
                    placeholder={'Informe o endereço da imagem'}
                    valor={imagem}
                    setValor={valor => setImagem(valor)}
                />
                <CampoSelect
                    obrigatorio={true}
                    label='Time'
                    itens={nomeDosTimes}
                    valor={time}
                    setValor={valor => setTime(valor)}
                />
                <Botao text='Criar Card'/>
            </form>
            <form onSubmit={(evento) => {
                evento.preventDefault()
                cadastrarTime({nome: nomeTime, cor: corTime})
            }}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Campo
                    obrigatorio
                    label={'Nome'}
                    placeholder={'Digitre o nome do time'}
                    valor={nomeTime}
                    setValor={valor => setnomeTime(valor)}
                />
                <Campo
                    obrigatorio
                    type={'color'}
                    label={'Cargo'}
                    placeholder={'Digite a cor do time'}
                    valor={corTime}
                    setValor={valor => setcorTime(valor)}
                />
                <Botao text='Criar um novo time'/>
            </form>
        </section>
    )
}
