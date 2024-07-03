import './Time.css'
import Colaborador from "../Colaborador";
import hexToRgba from 'hex-to-rgba';

export const Time = ({time, colaboradores, cor, deletarColaborador, mudarCor, favoritar}) => {
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