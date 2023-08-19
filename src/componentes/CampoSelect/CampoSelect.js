import './CampoSelect.css'

export const CampoSelect = (props) => {
    return (
        <div className={'campo-select'}>
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}