import './Time.css'
import Colaborador from "../Colaborador";

export const Time = ({time, colaboradores, corPrimaria, corSecundaria}) => {
    const css = {backgroundColor: corSecundaria}

    return(
        (colaboradores.length > 0) ?
        <section className='time' style={css}>
            <h3 style={{borderColor: corPrimaria}}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map(colaborador => <Colaborador
                    key={colaborador.nome}
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                    corDeFundo={corPrimaria}
                />)}
            </div>
        </section>
            : ''
    )
}