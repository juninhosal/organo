import './CampoSelect.css'

export const CampoSelect = (props) => {
    return (
        <div className={'campo-select'}>
            <label>{props.label}</label>
            <select onChange={evento => props.setValor(evento.target.value)} value={props.value}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}