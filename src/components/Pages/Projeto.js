import styles from "../styles_modules/Projeto.module.css";
import { useParams } from "react-router-dom";
import TemplateProjeto from "./TemplateProjeto";

//teatro
import imgokuta1 from "../../images/Teatro/Okutá Hiipadatiki/00 capa.jpg"
import imgokuta2 from "../../images/Teatro/Okutá Hiipadatiki/IMG_5425.jpg"
import imgokuta3 from "../../images/Teatro/Okutá Hiipadatiki/IMG_5429.jpg"
import imgokuta4 from "../../images/Teatro/Okutá Hiipadatiki/IMG_5450.jpg"
import imgokuta5 from "../../images/Teatro/Okutá Hiipadatiki/IMG_5465.jpg"
import imgokuta6 from "../../images/Teatro/Okutá Hiipadatiki/IMG_5466.jpg"
import imgokuta7 from "../../images/Teatro/Okutá Hiipadatiki/IMG_5476.jpg"
import imgokuta8 from "../../images/Teatro/Okutá Hiipadatiki/IMG_5729.jpg"
import imgokuta9 from "../../images/Teatro/Okutá Hiipadatiki/IMG_5792.jpg"
import imgokuta10 from "../../images/Teatro/Okutá Hiipadatiki/IMG_5857.jpg"

import imgumanoite1 from "../../images/Teatro/Uma Noite/00 CAPA.jpg"
import imgumanoite2 from "../../images/Teatro/Uma Noite/IMG_8945.jpg"
import imgumanoite3 from "../../images/Teatro/Uma Noite/IMG_8977.jpg"
import imgumanoite4 from "../../images/Teatro/Uma Noite/IMG_9052.jpg"
import imgumanoite5 from "../../images/Teatro/Uma Noite/IMG_9311.jpg"
import imgumanoite6 from "../../images/Teatro/Uma Noite/IMG_9495.jpg"

import imgrei1 from "../../images/Teatro/A Tragédia do Rei Christophe/00 CAPA.jpg"
import imgrei2 from "../../images/Teatro/A Tragédia do Rei Christophe/IMG_6548 (1).jpg"
import imgrei3 from "../../images/Teatro/A Tragédia do Rei Christophe/IMG_6622.jpg"
import imgrei4 from "../../images/Teatro/A Tragédia do Rei Christophe/IMG_6783 (1).jpg"
import imgrei5 from "../../images/Teatro/A Tragédia do Rei Christophe/IMG_6792.jpg"
import imgrei6 from "../../images/Teatro/A Tragédia do Rei Christophe/PIMV.png"

//influencer
import imgladob1 from "../../images/Influencer/Lado B/00 CAPA.jpg"
import imgladob2 from "../../images/Influencer/Lado B/IMG_7619.jpg"
import imgladob3 from "../../images/Influencer/Lado B/IMG_7637.jpg"

//producao
import imgfesteju1 from "../../images/Produção/FESTEJU/00 CAPA.jpg"
import imgfesteju2 from "../../images/Produção/FESTEJU/DSCF5131.jpg"
import imgfesteju3 from "../../images/Produção/FESTEJU/DSCF5132.jpg"
import imgfesteju4 from "../../images/Produção/FESTEJU/IMG_2612.jpg"

const okuta = [
    { url: imgokuta1, alt: 'Okutá Hiipadatiki'},
    { url: imgokuta2, alt: 'Okutá Hiipadatiki'},
    { url: imgokuta3, alt: 'Okutá Hiipadatiki'},
    { url: imgokuta4, alt: 'Okutá Hiipadatiki'},
    { url: imgokuta5, alt: 'Okutá Hiipadatiki'},
    { url: imgokuta6, alt: 'Okutá Hiipadatiki'},
    { url: imgokuta7, alt: 'Okutá Hiipadatiki'},
    { url: imgokuta8, alt: 'Okutá Hiipadatiki'},
    { url: imgokuta9, alt: 'Okutá Hiipadatiki'},
    { url: imgokuta10, alt: 'Okutá Hiipadatiki'}
];

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
    { url: imgrei6, alt: 'A Tragédia do Rei Christophe'}
]
const ladob = [
    { url: imgladob1, alt: 'Lado B'},
    { url: imgladob2, alt: 'Lado B'},
    { url: imgladob3, alt: 'Lado B'}
]
const FESTEJU = [
    { url: imgfesteju1, alt: 'FESTEJU'},
    { url: imgfesteju2, alt: 'FESTEJU'},
    { url: imgfesteju3, alt: 'FESTEJU'},
    { url: imgfesteju4, alt: 'FESTEJU'}
]

function Projeto() {
    // Pegando o GET da página
    const { id } = useParams();

    // Construindo o caminho da pasta dinamicamente
    const [folder, name] = id.split('-');
    let imgs = {}
    let pacote ={name,imgs}
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

    console.log(pacote)
    // return
    return (
        <div className={styles.container}>
            <h1>{name}</h1>
            <TemplateProjeto pacote={pacote}/>
        </div>
    );
}

export default Projeto;
