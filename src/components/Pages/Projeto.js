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
import imgfesteju1 from "../../images/Produção/FESTEJU/CAPA.jpg"
import imgfesteju2 from "../../images/Produção/FESTEJU/DSCF5132 (1).jpg"
import imgfesteju3 from "../../images/Produção/FESTEJU/DSCF5168.jpg"
import imgfesteju4 from "../../images/Produção/FESTEJU/DSCF5171.jpg"
import imgfesteju5 from "../../images/Produção/FESTEJU/DSCF5220.jpg"
import imgfesteju6 from "../../images/Produção/FESTEJU/DSCF5226.jpg"

const okuta = [
    { url: imgokuta1, alt: 'Okutá Hiipadatiki'},
    { url: imgokuta2, alt: 'Okutá Hiipadatiki'},
    { url: imgokuta3, alt: 'Okutá Hiipadatiki'},
    { url: imgokuta4, alt: 'Okutá Hiipadatiki'},
    { url: imgokuta5, alt: 'Okutá Hiipadatiki'},
]
const umanoite = [
    { url: imgumanoite1, alt: 'Uma Noite'},
    { url: imgumanoite2, alt: 'Uma Noite'},
    { url: imgumanoite3, alt: 'Uma Noite'},
    { url: imgumanoite4, alt: 'Uma Noite'},
    { url: imgumanoite5, alt: 'Uma Noite'},
    { url: imgumanoite6, alt: 'Uma Noite'}
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
    else if(name == 'FESTEJU'){
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

    console.log(pacote)
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
