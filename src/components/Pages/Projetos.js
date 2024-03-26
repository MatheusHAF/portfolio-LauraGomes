import styles from "../styles_modules/Projeto.module.css"
import Galeria from "./Galeria";


import imgokuta1 from "../../images/TEATRO/OKUTÁ/00 capa.jpg"
import imgokuta2 from "../../images/TEATRO/OKUTÁ/IMG_5425.jpg"
import imgokuta3 from "../../images/TEATRO/OKUTÁ/IMG_5429.jpg"
import imgokuta4 from "../../images/TEATRO/OKUTÁ/IMG_5450.jpg"
import imgokuta5 from "../../images/TEATRO/OKUTÁ/IMG_5465.jpg"
import imgokuta6 from "../../images/TEATRO/OKUTÁ/IMG_5466.jpg"
import imgokuta7 from "../../images/TEATRO/OKUTÁ/IMG_5476.jpg"
import imgokuta8 from "../../images/TEATRO/OKUTÁ/IMG_5729.jpg"
import imgokuta9 from "../../images/TEATRO/OKUTÁ/IMG_5792.jpg"
import imgokuta10 from "../../images/TEATRO/OKUTÁ/IMG_5857.jpg"

import imgumanoite1 from "../../images/TEATRO/UMA NOITE/00 CAPA.jpg"
import imgumanoite2 from "../../images/TEATRO/UMA NOITE/IMG_8945.jpg"
import imgumanoite3 from "../../images/TEATRO/UMA NOITE/IMG_8977.jpg"
import imgumanoite4 from "../../images/TEATRO/UMA NOITE/IMG_9052.jpg"
import imgumanoite5 from "../../images/TEATRO/UMA NOITE/IMG_9311.jpg"
import imgumanoite6 from "../../images/TEATRO/UMA NOITE/IMG_9495.jpg"

import imgcapoeira1 from "../../images/CAPOEIRA/ubutuba/capa.jpg"
import imgcapoeira2 from "../../images/CAPOEIRA/ubutuba/LP-45.jpg"

import imginfluencer1 from "../../images/INFLUENCER/00 CAPA.jpg"
import imginfluencer2 from "../../images/INFLUENCER/IMG_7619.jpg"
import imginfluencer3 from "../../images/INFLUENCER/IMG_7637.jpg"


function Projetos() {
    const images = [
        { url: imgokuta1, alt: 'Okutá', tags: ['teatro'] },
        { url: imgokuta2, alt: 'Okutá', tags: ['teatro'] },
        { url: imgokuta3, alt: 'Okutá', tags: ['teatro'] },
        { url: imgokuta4, alt: 'Okutá', tags: ['teatro'] },
        { url: imgokuta5, alt: 'Okutá', tags: ['teatro'] },
        { url: imgokuta6, alt: 'Okutá', tags: ['teatro'] },
        { url: imgokuta7, alt: 'Okutá', tags: ['teatro'] },
        { url: imgokuta8, alt: 'Okutá', tags: ['teatro'] },
        { url: imgokuta9, alt: 'Okutá', tags: ['teatro'] },
        { url: imgokuta10, alt: 'Okutá', tags: ['teatro'] },

        { url: imgumanoite1, alt: 'Uma Noite', tags: ['teatro'] },
        { url: imgumanoite2, alt: 'Uma Noite', tags: ['teatro'] },
        { url: imgumanoite3, alt: 'Uma Noite', tags: ['teatro'] },
        { url: imgumanoite4, alt: 'Uma Noite', tags: ['teatro'] },
        { url: imgumanoite5, alt: 'Uma Noite', tags: ['teatro'] },
        { url: imgumanoite6, alt: 'Uma Noite', tags: ['teatro'] },

        { url: imgcapoeira1, alt: 'Ubutuba - Capoeira', tags: ['capoeira'] },
        { url: imgcapoeira2, alt: 'Ubutuba - Capoeira', tags: ['capoeira'] },

        { url: imginfluencer1, alt: 'Lado B', tags: ['influencer'] },
        { url: imginfluencer2, alt: 'Lado B', tags: ['influencer'] },
        { url: imginfluencer3, alt: 'Lado B', tags: ['influencer'] },


        { url: '', alt: '', tags: [''] },

    ];
    // Aleatorizar o array de imagens
    const images2 = images.sort(() => Math.random() - 0.1);
    return (
        <div className={styles.container}>
            <h1>Projetos</h1>
            <Galeria images={images2} />
        </div>
    );
}
export default Projetos