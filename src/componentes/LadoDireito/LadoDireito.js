import MeuPerfil from './componentes/MeuPerfil';
import Sugestao from './componentes/Sugestao'
import './LadoDireito.css';

import fotoMeuPerfil from './imagens/MeuPerfil copy.png'
import Sugestao1 from './imagens/Sugestao1.png'
import Sugestao2 from './imagens/Sugestao2.png'
import Sugestao3 from './imagens/Sugestao3.png'
import Sugestao4 from './imagens/Sugestao4.png'
import Sugestao5 from './imagens/Sugestao5.png'

export default function LadoDireito() {
    return (

        <div className='LadoDireito'>
            <MeuPerfil
                fotoMeuPerfil={fotoMeuPerfil}
                meuNick='kevyn_aciole'
                meuNome='Kevyn Aciole'
            />
            <div className='Sugeridos'>
                <span className='SugestaoPessoal'>Sugestões para você</span>
                <span className='VerTudo'>Ver tudo</span>
            </div>
            <Sugestao
                fotoPerfilSugerido={Sugestao1}
                nickSugerido='george_orwell'
                nomeSugerido='Sugestão para você'
            />
            <Sugestao
                fotoPerfilSugerido={Sugestao2}
                nickSugerido='virginia_woolf'
                nomeSugerido='Sugestão para você'
            />
            <Sugestao
                fotoPerfilSugerido={Sugestao3}
                nickSugerido='robert_cialdini'
                nomeSugerido='Sugestão para você'
            />
            <Sugestao
                fotoPerfilSugerido={Sugestao4}
                nickSugerido='chimamanda_ngozi'
                nomeSugerido='Sugestão para você'
            />
            <Sugestao
                fotoPerfilSugerido={Sugestao5}
                nickSugerido='yuval_noah'
                nomeSugerido='Sugestão para você'
            />
            <footer className='Footer'>
                <p>
                    <span> Sobre </span> &bull;
                    <span> Ajuda </span> &bull;
                    <span> Imprensa </span> &bull;
                    <span> API </span> &bull;
                    <span> Carreiras </span> &bull;
                    <span> Privacidade </span> &bull;
                    <span> Termos </span> &bull;
                    <span> Localização </span> &bull;
                    <span> Idioma </span> &bull;
                    <span> Meta Verified </span>
                </p>
                <p className='FeitoPor' >&copy; <a href='https://github.com/KevynAciole' target="_blank" rel="noreferrer">2023 KEVYN ACIOLE</a></p>
            </footer>
        </div>
    );
}