import './Campo.css';

export const Campo = ({ label, placeholder, valor, setValor, obrigatorio = false, type= 'text' }) => {
    const digitado = (evento) => {
        setValor(evento.target.value)
    }
    return(
        <div className={`campo campo-${type}`}>
            <label>
                {label}
            </label>
            <input
                type={type}
                value={valor}
                onChange={digitado}
                required={obrigatorio}
                placeholder={placeholder}
            />
        </div>
    )
}
