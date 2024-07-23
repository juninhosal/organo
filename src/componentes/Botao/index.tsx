import React, {ReactElement} from 'react';
import './Botao.css';

interface BotaoProps {
    children: ReactElement | string;
    onClick?: () => void;
}

export const Botao = ({ children, onClick }: BotaoProps) => {
    return (
        <button className="botao" onClick={onClick}>
            {children}
        </button>
    );
};