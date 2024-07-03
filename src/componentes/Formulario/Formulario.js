import './Formulario.css';
import CampoTexto from "../CampoTexto";
import {CampoSelect} from "../CampoSelect/CampoSelect";
import Botao from "../Botao";
import {useState} from "react";

export const Formulario = ({nomeDosTimes,colaboradorCadastrado}) =>{
console.log(nomeDosTimes);
    const [nome,setNome] = useState('')
    const [cargo,setCargo] = useState('')
    const [imagem,setImagem] = useState('')
    const [time,setTime] = useState('')

    const salvar = (evento) => {
        evento.preventDefault()
        colaboradorCadastrado({
             nome
            ,cargo
            ,imagem
            ,time
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
                <CampoTexto
                    obrigatorio={true}
                    label={'Nome'}
                    placeholder={'Digite o seu nome'}
                    valor={nome}
                    setValor={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label={'Cargo'}
                    placeholder={'Digite o seu cargo'}
                    valor={cargo}
                    setValor={valor => setCargo(valor)}
                />
                <CampoTexto
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
        </section>
    )
}
