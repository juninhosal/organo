import './CampoTexto.css';

export const CampoTexto = (props) => {
    const digitado = (evento) => {
        props.setValor(evento.target.value)
    }
    return(
        <div className={"campo-texto"}>
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={digitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}
