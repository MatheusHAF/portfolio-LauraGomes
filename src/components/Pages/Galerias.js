import styles from "../styles_modules/Projetos.module.css"
import Galeria from "./Galeria";

import img1 from "../../images/Galeria/00 CAPA.jpg"
import img3 from "../../images/Galeria/DSC_2113 (2).jpg"
import img4 from "../../images/Galeria/DSC_2266 (2).jpg"
import img5 from "../../images/Galeria/F6742A8F-8161-4B64-ACC3-C804F102CC37.jpg"
import img6 from "../../images/Galeria/FA6B018E-D7C8-48C5-892A-E20B8F1F3E73.jpg"
import img7 from "../../images/Galeria/IMG_0446.jpg"
import img8 from "../../images/Galeria/IMG_1173.jpg"
import img9 from "../../images/Galeria/IMG_1218.jpg"
import img10 from "../../images/Galeria/IMG_4938.jpg"
import img11 from "../../images/Galeria/IMG_4988.jpg"
import img12 from "../../images/Galeria/IMG_5458.jpg"
import img13 from "../../images/Galeria/IMG_9452.jpg"
import img14 from "../../images/Galeria/Laura Gomes - 22 anos - 1,71m - @lauragomes_lg - foto 2.jpg"

function Projetos() {
    const images = [
        {url: img1},
        {url: img3},
        {url: img4},
        {url: img5},
        {url: img6},
        {url: img7},
        {url: img8},
        {url: img9},
        {url: img10},
        {url: img11},
        {url: img12},
        {url: img13},
        {url: img14},
        ];
    // Aleatorizar o array de imagens
    const images2 = images.sort(() => Math.random() - 0.1);
    return (
        <div className={styles.container}>
            <h1>Galeria</h1>
            <Galeria images={images2} />
        </div>
    );
}
export default Projetos