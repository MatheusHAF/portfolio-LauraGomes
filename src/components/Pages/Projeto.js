import styles from "../styles_modules/Projeto.module.css";
import { useParams,Link } from "react-router-dom";
import TemplateProjeto from "./TemplateProjeto";
import { FaArrowLeft } from "react-icons/fa";

//teatro
import imgokuta1 from "../../images/Teatro/Okutá Hiipadatiki/00 capa.jpg"
import imgokuta2 from "../../images/Teatro/Okutá Hiipadatiki/4ede58ff-2806-41e3-a8c0-efea5ea18629.jpg"
import imgokuta3 from "../../images/Teatro/Okutá Hiipadatiki/IMG_5429.jpg"
import imgokuta4 from "../../images/Teatro/Okutá Hiipadatiki/IMG_5450.jpg"
import imgokuta5 from "../../images/Teatro/Okutá Hiipadatiki/IMG_5466.jpg"

import imgumanoite1 from "../../images/Teatro/Uma Noite/00 CAPA.jpg"
import imgumanoite2 from "../../images/Teatro/Uma Noite/IMG_8945.jpg"
import imgumanoite3 from "../../images/Teatro/Uma Noite/IMG_8977.jpg"
import imgumanoite4 from "../../images/Teatro/Uma Noite/IMG_9052.jpg"
import imgumanoite5 from "../../images/Teatro/Uma Noite/IMG_9311.jpg"
import imgumanoite6 from "../../images/Teatro/Uma Noite/IMG_9495.jpg"

import imgrei1 from "../../images/Teatro/A Tragédia do Rei Christophe/00 CAPA.jpg"
import imgrei2 from "../../images/Teatro/A Tragédia do Rei Christophe/IMG_3924.jpg"
import imgrei3 from "../../images/Teatro/A Tragédia do Rei Christophe/IMG_4135.jpg"
import imgrei4 from "../../images/Teatro/A Tragédia do Rei Christophe/IMG_4141.jpg"
import imgrei5 from "../../images/Teatro/A Tragédia do Rei Christophe/IMG_4142.jpg"
import imgrei6 from "../../images/Teatro/A Tragédia do Rei Christophe/IMG_4143.jpg"
import imgrei7 from "../../images/Teatro/A Tragédia do Rei Christophe/IMG_4146.jpg"
import imgrei8 from "../../images/Teatro/A Tragédia do Rei Christophe/IMG_6548 (1).jpg"
import imgrei9 from "../../images/Teatro/A Tragédia do Rei Christophe/IMG_6622.jpg"
import imgrei10 from "../../images/Teatro/A Tragédia do Rei Christophe/IMG_6783 (1).jpg"
import imgrei11 from "../../images/Teatro/A Tragédia do Rei Christophe/PIMV.png"

import msc1 from "../../images/Teatro/Grease - O Musical/CAPA.jpg"
import msc2 from "../../images/Teatro/Grease - O Musical/IMG_9572.jpg"
import msc3 from "../../images/Teatro/Grease - O Musical/IMG_9573.jpg"
import msc4 from "../../images/Teatro/Grease - O Musical/IMG_9574.jpg"

import lua1 from "../../images/Teatro/Um Dia Ouvi a Lua/CAPA.jpg"
import lua2 from "../../images/Teatro/Um Dia Ouvi a Lua/IMG_1844.jpg"
import lua3 from "../../images/Teatro/Um Dia Ouvi a Lua/IMG_9386.jpg"
import lua4 from "../../images/Teatro/Um Dia Ouvi a Lua/WhatsApp Image 2021-04-19 at 16.17.41 (6).jpeg"

import op1 from "../../images/Teatro/Ópera do Malandro/CAPA.jpg"
import op2 from "../../images/Teatro/Ópera do Malandro/IMG_9578.jpg"
import op3 from "../../images/Teatro/Ópera do Malandro/IMG_9579.jpg"


import al1 from "../../images/Teatro/O Alienista/capa.jpg"
import al2 from "../../images/Teatro/O Alienista/IMG_9570.jpg"
import al3 from "../../images/Teatro/O Alienista/IMG_9575.jpg"
import al4 from "../../images/Teatro/O Alienista/IMG_9576.jpg"
import al5 from "../../images/Teatro/O Alienista/IMG_9580.png"

//influencer
import imgladob1 from "../../images/Influencer/Lado B/00 CAPA.jpg"
import imgladob2 from "../../images/Influencer/Lado B/IMG_7619.jpg"
import imgladob3 from "../../images/Influencer/Lado B/IMG_7637.jpg"

import invisa1 from "../../images/Influencer/Invisalign/Galeria .jpeg"

//producao
//festeju
import imgfesteju1 from "../../images/Produção/FESTEJU/CAPA.jpg"
import imgfesteju2 from "../../images/Produção/FESTEJU/DSCF5132 (1).jpg"
import imgfesteju3 from "../../images/Produção/FESTEJU/DSCF5168.jpg"
import imgfesteju4 from "../../images/Produção/FESTEJU/DSCF5171.jpg"
import imgfesteju5 from "../../images/Produção/FESTEJU/DSCF5220.jpg"
import imgfesteju6 from "../../images/Produção/FESTEJU/DSCF5226.jpg"

//aluno artista
import ala1 from "../../images/Produção/ALUNO ARTISTA/CAPA.jpg"
import ala2 from "../../images/Produção/ALUNO ARTISTA/Fotógrafo Theo Camargo.jpg"
import ala3 from "../../images/Produção/ALUNO ARTISTA/Noir-49.jpg"
import ala4 from "../../images/Produção/ALUNO ARTISTA/PECA-102.jpg"
import ala5 from "../../images/Produção/ALUNO ARTISTA/PECA-58.jpg"
import ala6 from "../../images/Produção/ALUNO ARTISTA/POS-PECA-10.jpg"

//colombia
import cl1 from "../../images/Produção/COLÔMBIA/CAPA.jpg"
import cl2 from "../../images/Produção/COLÔMBIA/CTRANSMEDIA-FITU2023-LOS-ADULTOS-ESTAN-EN-LA-SALA-27.jpg"
import cl3 from "../../images/Produção/COLÔMBIA/CTRANSMEDIA-FITU2023-LOS-ADULTOS-ESTAN-EN-LA-SALA-46.jpg"
import cl4 from "../../images/Produção/COLÔMBIA/CTRANSMEDIA-FITU2023-LOS-ADULTOS-ESTAN-EN-LA-SALA-49.jpg"
import cl5 from "../../images/Produção/COLÔMBIA/CTRANSMEDIA-FITU2023-LOS-ADULTOS-ESTAN-EN-LA-SALA-55.jpg"

//enearte bh
import bh1 from "../../images/Produção/ENEARTE BH/CAPA.jpg"
import bh2 from "../../images/Produção/ENEARTE BH/IMG_2052.jpg"
import bh3 from "../../images/Produção/ENEARTE BH/IMG_2366.jpg"
import bh4 from "../../images/Produção/ENEARTE BH/IMG_2389.jpg"
import bh5 from "../../images/Produção/ENEARTE BH/IMG_2623.jpg"

//etu
import etu1 from "../../images/Produção/ETU/CAPA.jpg"
import etu2 from "../../images/Produção/ETU/DSC_0394.jpg"
import etu3 from "../../images/Produção/ETU/DSC_0502.jpg"
import etu4 from "../../images/Produção/ETU/IMG_0034.jpg"
import etu5 from "../../images/Produção/ETU/IMG_9964.jpg"

//maomeiro
import mm1 from "../../images/Produção/MAMOEIRO 2021/CAPA.jpg"
import mm2 from "../../images/Produção/MAMOEIRO 2021/1639168613809.jpg"
import mm3 from "../../images/Produção/MAMOEIRO 2021/61b2d212-c03a-4967-affc-4ee47596132b.jpg"
import mm4 from "../../images/Produção/MAMOEIRO 2021/Um Dia Ouvi a Lua - Foto de Bruna Haddad (2).png"
import mm5 from "../../images/Produção/MAMOEIRO 2021/Um Dia Ouvi a Lua - Foto de Bruna Haddad.png"
import mm6 from "../../images/Produção/MAMOEIRO 2021/Um Dia Ouvi a Lua - Foto de Chiara Lazzaratto.png"

//ca ig
import ig1 from "../../images/Produção/CENTRO ACADÊMICO IG/CAPA.jpg"
import ig2 from "../../images/Produção/CENTRO ACADÊMICO IG/DSC_0022.jpg"
import ig3 from "../../images/Produção/CENTRO ACADÊMICO IG/DSC_0085.jpg"
import ig4 from "../../images/Produção/CENTRO ACADÊMICO IG/DSC_0305.jpg"
import ig5 from "../../images/Produção/CENTRO ACADÊMICO IG/DSC_0362.jpg"

const okuta = [
    { url: imgokuta1, alt: 'Okutá Hiipadatiki'},
    { url: imgokuta2, alt: 'Okutá Hiipadatiki'},
    { url: imgokuta3, alt: 'Okutá Hiipadatiki'},
    { url: imgokuta4, alt: 'Okutá Hiipadatiki'},
    { url: imgokuta5, alt: 'Okutá Hiipadatiki'},
]
const colombia = [
    { url: cl1, alt: 'XVIII FITU - Festival Internacional de Teatro Universitário'},
    { url: cl2, alt: 'XVIII FITU - Festival Internacional de Teatro Universitário'},
    { url: cl3, alt: 'XVIII FITU - Festival Internacional de Teatro Universitário'},
    { url: cl4, alt: 'XVIII FITU - Festival Internacional de Teatro Universitário'},
    { url: cl5, alt: 'XVIII FITU - Festival Internacional de Teatro Universitário'},
]
const etu = [
    { url: etu1, alt: 'VII Encontro de Teatro Universitário (ETU)'},
    { url: etu2, alt: 'VII Encontro de Teatro Universitário (ETU)'},
    { url: etu3, alt: 'VII Encontro de Teatro Universitário (ETU)'},
    { url: etu4, alt: 'VII Encontro de Teatro Universitário (ETU)'},
    { url: etu5, alt: 'VII Encontro de Teatro Universitário (ETU)'},
]
const enearte = [
    { url: bh1, alt: 'XXIV ENEARTE'},
    { url: bh2, alt: 'XXIV ENEARTE'},
    { url: bh3, alt: 'XXIV ENEARTE'},
    { url: bh4, alt: 'XXIV ENEARTE'},
    { url: bh5, alt: 'XXIV ENEARTE'},
]
const umanoite = [
    { url: imgumanoite1, alt: 'Uma Noite'},
    { url: imgumanoite2, alt: 'Uma Noite'},
    { url: imgumanoite3, alt: 'Uma Noite'},
    { url: imgumanoite4, alt: 'Uma Noite'},
    { url: imgumanoite5, alt: 'Uma Noite'},
    { url: imgumanoite6, alt: 'Uma Noite'}
]
const alunoartista = [
    { url: ala1, alt: 'XII Programa Aluno Artista do Serviço de Apoio ao Estudante'},
    { url: ala2, alt: 'XII Programa Aluno Artista do Serviço de Apoio ao Estudante'},
    { url: ala3, alt: 'XII Programa Aluno Artista do Serviço de Apoio ao Estudante'},
    { url: ala4, alt: 'XII Programa Aluno Artista do Serviço de Apoio ao Estudante'},
    { url: ala5, alt: 'XII Programa Aluno Artista do Serviço de Apoio ao Estudante'},
    { url: ala6, alt: 'XII Programa Aluno Artista do Serviço de Apoio ao Estudante'}
]
const rei = [
    { url: imgrei1, alt: 'A Tragédia do Rei Christophe'},
    { url: imgrei2, alt: 'A Tragédia do Rei Christophe'},
    { url: imgrei3, alt: 'A Tragédia do Rei Christophe'},
    { url: imgrei4, alt: 'A Tragédia do Rei Christophe'},
    { url: imgrei5, alt: 'A Tragédia do Rei Christophe'},
    { url: imgrei6, alt: 'A Tragédia do Rei Christophe'},
    { url: imgrei7, alt: 'A Tragédia do Rei Christophe'},
    { url: imgrei8, alt: 'A Tragédia do Rei Christophe'},
    { url: imgrei9, alt: 'A Tragédia do Rei Christophe'},
    { url: imgrei10, alt: 'A Tragédia do Rei Christophe'},
    { url: imgrei11, alt: 'A Tragédia do Rei Christophe'},
]
const musical = [
    { url: msc1, alt: 'Grease - O Musical'},
    { url: msc2, alt: 'Grease - O Musical'},
    { url: msc3, alt: 'Grease - O Musical'},
    { url: msc4, alt: 'Grease - O Musical'},
]
const opera = [
    { url: op1, alt: 'Ópera do Malandro'},
    { url: op2, alt: 'Ópera do Malandro'},
    { url: op3, alt: 'Ópera do Malandro'},
]
const lua = [
    { url: lua1, alt: 'Um Dia Ouvi a Lua'},
    { url: lua2, alt: 'Um Dia Ouvi a Lua'},
    { url: lua3, alt: 'Um Dia Ouvi a Lua'},
    { url: lua4, alt: 'Um Dia Ouvi a Lua'},
]
const alienista = [
    { url: al1, alt: 'O Alienista'},
    { url: al2, alt: 'O Alienista'},
    { url: al3, alt: 'O Alienista'},
    { url: al4, alt: 'O Alienista'},
    { url: al4, alt: 'O Alienista'},
    { url: al5, alt: 'O Alienista'},
]
const ladob = [
    { url: imgladob1, alt: 'Lado B'},
    { url: imgladob2, alt: 'Lado B'},
    { url: imgladob3, alt: 'Lado B'}
]
const invisalign = [
    {url: invisa1 ,alt: 'Invisalign'},
]
const maomeiro = [
    { url: mm1, alt: 'Grupo Mamoeiro de Teatro PROEC-PEX (424)'},
    { url: mm2, alt: 'Grupo Mamoeiro de Teatro PROEC-PEX (424)'},
    { url: mm3, alt: 'Grupo Mamoeiro de Teatro PROEC-PEX (424)'},
    { url: mm4, alt: 'Grupo Mamoeiro de Teatro PROEC-PEX (424)'},
    { url: mm5, alt: 'Grupo Mamoeiro de Teatro PROEC-PEX (424)'},
    { url: mm6, alt: 'Grupo Mamoeiro de Teatro PROEC-PEX (424)'},
]
const caig = [
    { url: ig1, alt: 'CENTRO ACADÊMICO DE GEOLOGIA - UNICAMP'},
    { url: ig2, alt: 'CENTRO ACADÊMICO DE GEOLOGIA - UNICAMP'},
    { url: ig3, alt: 'CENTRO ACADÊMICO DE GEOLOGIA - UNICAMP'},
    { url: ig4, alt: 'CENTRO ACADÊMICO DE GEOLOGIA - UNICAMP'},
    { url: ig5, alt: 'CENTRO ACADÊMICO DE GEOLOGIA - UNICAMP'},
]
const FESTEJU = [
    { url: imgfesteju1, alt: 'FESTEJU'},
    { url: imgfesteju2, alt: 'FESTEJU'},
    { url: imgfesteju3, alt: 'FESTEJU'},
    { url: imgfesteju4, alt: 'FESTEJU'},
    { url: imgfesteju5, alt: 'FESTEJU'},
    { url: imgfesteju6, alt: 'FESTEJU'},
]

function Projeto() {
    // Pegando o GET da página
    const { id } = useParams();
    // Construindo o caminho da pasta dinamicamente
    const [folder, name, direction] = id.split('|');
    let imgs = {}
    let desc = direction
    let pacote ={name,imgs,desc}
    if (name == 'Okutá Hiipadatiki') {
        pacote.imgs = okuta
    }
    else if(name == 'Uma Noite'){
        pacote.imgs = umanoite
    }
    else if(name == 'A Tragédia do Rei Christophe'){
        pacote.imgs = rei
    }
    else if(name == 'Lado B'){
        pacote.imgs = ladob
    }
    else if(name == '7º Festival de Teatro de Jundiaí '){
        pacote.imgs = FESTEJU
    }
    else if(name == 'Grease - O Musical'){
        pacote.imgs = musical
    }
    else if(name == 'O Alienista'){
        pacote.imgs = alienista
    }
    else if(name == 'Ópera do Malandro'){
        pacote.imgs = opera
    }
    else if(name == 'Um Dia Ouvi a Lua'){
        pacote.imgs = lua
    }
    else if(name == 'Invisalign'){
        pacote.imgs = invisalign
    }
    else if(name == 'XII Programa Aluno Artista do Serviço de Apoio ao Estudante'){
        pacote.imgs = alunoartista
    }
    else if(name == 'XVIII FITU - Festival Internacional de Teatro Universitário'){
        pacote.imgs = colombia
    }
    else if(name == 'XXIV ENEARTE'){
        pacote.imgs = enearte
    }
    else if(name == 'VII Encontro de Teatro Universitário (ETU)'){
        pacote.imgs = etu
    }
    else if(name == 'Grupo Mamoeiro de Teatro PROEC-PEX (424)'){
        pacote.imgs = maomeiro
    }
    else if(name == 'CENTRO ACADÊMICO DE GEOLOGIA - UNICAMP'){
        pacote.imgs = caig
    }
    // return
    return (
        <div className={styles.container}>
            <Link to="../Projetos" className={styles.btnvoltar}><FaArrowLeft /><nav>Voltar</nav></Link>
            <h1>{name}</h1>
            <TemplateProjeto pacote={pacote}/>
        </div>
    );
}

export default Projeto;
