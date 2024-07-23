import './Campo.css';
import React from "react";

interface CampoProps {
    label: string;
    placeholder: string;
    valor: string;
    setValor: (valor: string) => void;
    obrigatorio?: boolean;
    type?: string
}
export const Campo = (
    {
        label,
        placeholder,
        valor,
        setValor,
        obrigatorio = false,
        type= 'text' } : CampoProps) => {
    const digitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
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
