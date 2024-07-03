import './CampoSelect.css'

export const CampoSelect = ({label, itens,  valor, setValor, obrigatorio = false}) => {
    return (
        <div className={'campo-select'}>
            <label>{label}</label>
            <select required={obrigatorio}
                    value={valor}
                    onChange={evento => setValor(evento.target.value)}
                    value={valor}>
               <option value="">Selecione um time</option>
                {itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}