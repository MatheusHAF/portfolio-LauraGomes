import styles from "../styles_modules/Projeto.module.css"

import img1 from "../../images/slides/OKUTÁ/00 capa.CR2"
import img2 from "../../images/slides/TRAGÉDIA DO REI CRISTOPHE/00 CAPA.JPG"
import img3 from "../../images/slides/UMA NOITE/00 CAPA.jpg"


// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements

register();
function Projetos() {
    return (
        <div>
            <h1>Projetos</h1>
            <div className={styles.container}>
                <h2>Teatro</h2>
                <swiper-container navigation="true" loop="true">
                    <swiper-slide>
                        <div className={styles.projeto_dov}>
                            <img src={img1} alt="" />
                            <p>OKUTÁ</p>
                        </div>
                    </swiper-slide>
                    <swiper-slide><div className={styles.projeto_dov}>
                        <img src={img2} alt="" />
                        <p>REI CRISTOPHE</p>
                    </div>
                    </swiper-slide>
                    <swiper-slide><div className={styles.projeto_dov}>
                        <img src={img3} alt="" />
                        <p>UMA NOITE</p>
                    </div>
                    </swiper-slide>
                </swiper-container>
            </div>
        </div>
    );
}
export default Projetos