import './Feed.css';

import Post from './componentes/Post/Post';

import Perfil1 from './imagens/Perfil1.png';
import Perfil2 from './imagens/Perfil2.png';
import Perfil3 from './imagens/Perfil3.png';
import Perfil4 from './imagens/Perfil4.png';
import Perfil5 from './imagens/Perfil5.png';
import Perfil6 from './imagens/Perfil6.png';
import Perfil7 from './imagens/Perfil7.png';
import Post1 from './imagens/Post1.png';
import Post2 from './imagens/Post2.png';
import Post3 from './imagens/Post3.png';
import Post4 from './imagens/Post4.png';
import Post5 from './imagens/Post5.png';
import Post6 from './imagens/Post6.png';
import Post7 from './imagens/Post7.png';
import TudoCerto from './imagens/TudoCerto.png'


export default function Feed() {
    return (
        <div className="Feed">
            <Post
                nomePerfil='ester'
                imagemPost={Post1}
                imagemPerfil={Perfil1}
                curtidas='2,478'
                nomeAutor='ester'
                legenda='  Na busca pelo conhecimento, descobrimos a nós mesmos.'
                hashtag=''
                comentarios='197'
                tempo='HÁ 3 MINUTOS'
            />

            <Post nomePerfil='joaquim'
                imagemPost={Post2}
                imagemPerfil={Perfil2}
                curtidas='154'
                nomeAutor='joaquim'
                legenda='  Abrace a jornada de autoconhecimento e veja o seu mundo se expandir.'
                hashtag=''
                comentarios='3'
                tempo='HÁ 20 MINUTOS'
            />

            <Post nomePerfil='tom'
                imagemPost={Post3}
                imagemPerfil={Perfil3}
                curtidas='589'
                nomeAutor='tom'
                legenda=' Na quietude da reflexão, encontramos as respostas que buscamos.'
                hashtag=''
                comentarios='23'
                tempo='HÁ 1 HORA'
            />

            <Post nomePerfil='hemily'
                imagemPost={Post4}
                imagemPerfil={Perfil4}
                curtidas='378'
                nomeAutor='hemily'
                legenda=' Deixe seus pensamentos serem a tela onde seus sonhos se desdobram.'
                hashtag=' '
                comentarios='112'
                tempo='HÁ 1 HORA'
            />

            <Post nomePerfil='eloa'
                imagemPost={Post5}
                imagemPerfil={Perfil5}
                curtidas='658'
                nomeAutor='eloa'
                legenda=' Desvende o poder da introspecção e testemunhe a magia dentro de si.'
                hashtag=''
                comentarios='56'
                tempo='HÁ 1 DIA'
            />

            <Post nomePerfil='mari'
                imagemPost={Post6}
                imagemPerfil={Perfil6}
                curtidas='11'
                nomeAutor='mari'
                legenda=' Cada passo à frente começa com um momento de auto-reflexão.'
                hashtag=' '
                comentarios='5'
                tempo='HÁ 1 DIA'
            />

            <Post nomePerfil='jobim'
                imagemPost={Post7}
                imagemPerfil={Perfil7}
                curtidas='42'
                nomeAutor='jobim'
                legenda=' Através da introspecção, encontramos a luz que guia nosso caminho.'
                hashtag=' '
                comentarios='24'
                tempo='HÁ 2 DIAS'
            />

            <div className='TudoCerto'>
                <img alt='Você já viu todos os posts do último mês' src={TudoCerto}/>
                <p className='TudoCertoH1'>Você já viu tudo</p>
                <p className='TudoCertoH2'>Você viu todos os novos posts do último mês</p>
                <p className='TudoCertoH3'>Ver posts antigos</p>
            </div>
        </div>
    )
}