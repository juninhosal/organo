import './CampoTexto.css';

export const CampoTexto = ({ label, placeholder, valor, setValor, obrigatorio = false }) => {
    const digitado = (evento) => {
        setValor(evento.target.value)
    }
    return(
        <div className={"campo-texto"}>
            <label>
                {label}
            </label>
            <input value={valor} onChange={digitado} required={obrigatorio} placeholder={placeholder}/>
        </div>
    )
}
