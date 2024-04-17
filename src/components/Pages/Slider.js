// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';

import styles from '../styles_modules/Slider.module.css'
// register Swiper custom elements

import img1 from '../../images/TEATRO/OKUTÁ/00 capa.jpg'
import img2 from '../../images/TEATRO/TRAGÉDIA DO REI CRISTOPHE/DSCF5179.jpg'
import img3 from '../../images/TEATRO/UMA NOITE/00 CAPA.jpg'

register();


function Slider() {
    const dbimgsTeatro = [
        { title: 'Okuta', image: { img1 } },
        { title: 'Uma Noite', image: { img2 } },
        { title: 'Cristhope', image: { img3 } },
    ]

    return (
        <swiper-container slides-per-view="1" navigation="true">
            {dbimgsTeatro.map((item, index) => (
                <swiper-slide>
                    <div key={index} className={styles.card}>
                        <img src={img1} alt="" />
                        <p>{item.title}</p>
                    </div>
                </swiper-slide>
            ))}
        </swiper-container>
    );
}
export default Slider;