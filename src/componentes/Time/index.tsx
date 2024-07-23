import './Time.css'
import hexToRgba from 'hex-to-rgba';
import {IColaborador} from "../../compartilhado/interfaces/IColaborador";
import {Colaborador} from "../Colaborador";
import {ITime} from "../../compartilhado/interfaces/ITime";

interface TimeProps{
    time: ITime,
    colaboradores: IColaborador[],
    cor: string,
    deletarColaborador: (id: string) => void
    mudarCor: (cor: string, id: string) => void,
    favoritar: (id: string) => void,
}
export const Time = (
    {
        time,
        colaboradores,
        cor,
        deletarColaborador,
        mudarCor,
        favoritar
    }:TimeProps) => {
    const css = {backgroundColor: hexToRgba(cor,'0.6'), backgroundImage: `url(/imagens/fundo.png)`}

    return(
        (colaboradores.length > 0) ?
        <section className='time' style={css}>
            <input value={cor} onChange={event => mudarCor(event.target.value, time.id)} type='color' className='input-cor' />
            <h3 style={{borderColor: cor}}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador,index) =>{
                    return (
                        <Colaborador
                        key={index}
                        colaborador={colaborador}
                        corDeFundo={cor}
                        deletarColaborador={deletarColaborador}
                        favoritar={favoritar}
                        />
                    )
                })}
            </div>
        </section>
            : ''
    )
}