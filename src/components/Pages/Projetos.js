import styles from "../styles_modules/Projeto.module.css"

import img1 from "../../images/slides/cortina-de-palco-vermelho-para-teatro-cortina-de-cena-de-opera_107791-1552.avif"
import img2 from "../../images/slides/depositphotos_5903137-stock-photo-actor-with-maks-in-a.jpg"
import img3 from "../../images/slides/images.jpeg"
import img4 from "../../images/slides/inedi_in_cena_3-q92e6i4qhsgybw5qk451rqi4urhrewjyxf9s9wvkhc.jpg"
import img5 from "../../images/slides/teatro-portugues.jpg"

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
                <swiper-container navigation="true" slides-per-view="2" loop="true" css-mode="true">
                    <swiper-slide><img src={img1} alt=""/></swiper-slide>
                    <swiper-slide><img src={img2} alt=""/></swiper-slide>
                    <swiper-slide><img src={img3} alt=""/></swiper-slide>
                    <swiper-slide><img src={img4} alt=""/></swiper-slide>
                    <swiper-slide><img src={img5} alt=""/></swiper-slide>
                </swiper-container>
            </div>
        </div>
    );
}
export default Projetos