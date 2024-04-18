// import function to register Swiper custom elements
import { register} from 'swiper/element/bundle';
// import required modules
import { Navigation } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import styles from '../styles_modules/Slider.module.css'

import img1 from '../../images/TEATRO/OKUTÁ/00 capa.jpg'
import img2 from '../../images/TEATRO/TRAGÉDIA DO REI CRISTOPHE/00 CAPA.JPG'
import img3 from '../../images/TEATRO/UMA NOITE/00 CAPA.jpg'

register();


function Slider() {
    const dbimgsTeatro = [
        { title: 'Okutá Hiipadatiki', image: img1, direction: 'Direção de Lucienne Guedes (2022)' },
        { title: 'Uma Noite', image: img3, direction: 'Direção de Eduardo Okamoto (2023)' },
        { title: 'A Tragédia do Rei Christophe', image: img2,direction: 'Direção de Verônica Fabrini (2022)' },
    ]

    return (
        <swiper-container 
        slides-per-view="1"
        navigation={true} modules={[Navigation]} 
        >
            {dbimgsTeatro.map((item, index) => (
                <swiper-slide>
                    <div key={index} className={styles.card}>
                        <img src={item.image} alt="" />
                        <div>
                            <h2>{item.title}</h2>
                            <p>{item.direction}</p>
                        </div>
                    </div>
                </swiper-slide>
            ))}
        </swiper-container>
    );
}
export default Slider;