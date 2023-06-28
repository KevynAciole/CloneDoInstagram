import './Stories.css'

import Story from './componentes/Story';

import ProaPerfil from './imagens/ProaPerfil.png';
import MeuPerfil from './imagens/MeuPerfil.png';
import EntrelinhasPerfil from './imagens/ElPerfil.png';
import OraclePerfil from './imagens/OraclePerfil.png';
import GabsPerfil from './imagens/GabsPerfil.png';
import SenacPerfil from './imagens/SenacPerfil.png';

function Stories () {
    return (
        <div className="Stories">
            <Story 
            imgPerfil={ProaPerfil} nomeDaConta="instituto.proa"/>
            <Story
            imgPerfil={MeuPerfil} nomeDaConta="kevyn_aciole"/>
            <Story
            imgPerfil={EntrelinhasPerfil} nomeDaConta="entre.linhas"/>
            <Story
            imgPerfil={OraclePerfil} nomeDaConta="oracle"/>
            <Story
            imgPerfil={GabsPerfil} nomeDaConta="gab.augustoz"/>
            <Story
            imgPerfil={SenacPerfil} nomeDaConta="senac"/>
        </div>
    )
}

export default Stories;