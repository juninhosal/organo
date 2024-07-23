import './Colaborador.css'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {IColaborador} from "../../compartilhado/interfaces/IColaborador";

interface ColaboradorProps{
    colaborador: IColaborador,
    corDeFundo: string,
    deletarColaborador: (id: string) => void,
    favoritar: (id: string) => void
}
export const Colaborador =  (
    {
        colaborador,
        corDeFundo,
        deletarColaborador,
        favoritar
    }:ColaboradorProps) => {
    function favoritei(){
        favoritar(colaborador.id);
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritei
    }

    return(
        <div className="colaborador">
            <AiFillCloseCircle
                size={25}
                className="deletar"
                onClick={() => deletarColaborador(colaborador.id)}
            />
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={colaborador.imagem} alt={colaborador.nome}/>
            </div>
            <div className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className={'favoritar'}>
                    {colaborador.favorito
                        ? <AiFillHeart {...propsFavorito} color='#ff0000' />
                        : <AiOutlineHeart {...propsFavorito} />}
                </div>
            </div>
        </div>
    )
}