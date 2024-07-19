import "./Botao.css"
import React, {ReactElement} from "react";

interface BotaoProps {
    children: ReactElement
}
export const Botao = (props: BotaoProps) => {
    return (
        <button className={'botao'}>
            {props.children}
        </button>
    )
}