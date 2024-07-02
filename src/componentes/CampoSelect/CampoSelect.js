import './CampoSelect.css'

export const CampoSelect = (props) => {
    return (
        <div className={'campo-select'}>
            <label>{props.label}</label>
            <select onChange={evento => props.setValor(evento.target.value)} value={props.valor}>
               <option value="">Selecione um time</option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}