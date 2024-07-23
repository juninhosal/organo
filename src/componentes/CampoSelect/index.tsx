import './CampoSelect.css'

interface CampoSelectProps{
    label: string,
    itens: string[],
    valor: string,
    setValor: (valor: string) => void
    obrigatorio: boolean
}

export const CampoSelect = (
    {
        label,
        itens,
        valor,
        setValor,
        obrigatorio = false
    }:CampoSelectProps) => {
    return (
        <div className={'campo-select'}>
            <label>{label}</label>
            <select required={obrigatorio}
                    value={valor}
                    onChange={evento => setValor(evento.target.value)}
                   >
               <option value="">Selecione um time</option>
                {itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}