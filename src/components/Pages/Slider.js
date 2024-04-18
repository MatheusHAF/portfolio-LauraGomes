// import function to register Swiper custom elements
import { register} from 'swiper/element/bundle';
// import required modules
import { Navigation } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import styles from '../styles_modules/Slider.module.css'

import { useState, useEffect } from 'react';
import img1 from '../../images/TEATRO/OKUTÁ/00 capa.jpg'
import img2 from '../../images/TEATRO/TRAGÉDIA DO REI CRISTOPHE/00 CAPA.JPG'
import img3 from '../../images/TEATRO/UMA NOITE/00 CAPA.jpg'

register();


function Slider() {
    const [slidesPerView, setSlidesPerView] = useState(4); // Defina o número inicial de slides por visualização

    useEffect(() => {
        // Verifique o tamanho da tela e atualize o número de slides exibidos conforme necessário
        const updateSlidesPerView = () => {
            if (window.innerWidth >= 975) {
                setSlidesPerView(3);
            }
            else if (window.innerWidth >= 650) {
                setSlidesPerView(2);
            }
            else {
                setSlidesPerView(1);
            }
        };

        // Execute a função de atualização quando a janela for redimensionada
        window.addEventListener('resize', updateSlidesPerView);

        // Execute a função de atualização uma vez quando o componente for montado para definir o valor inicial
        updateSlidesPerView();

        // Remova o ouvinte de evento ao desmontar o componente para evitar vazamento de memória
        return () => {
            window.removeEventListener('resize', updateSlidesPerView);
        };
    }, []);

    const dbcards = [
        { title: 'Okutá Hiipadatiki', image: img1, direction: 'Direção de Lucienne Guedes (2022)' },
        { title: 'Uma Noite', image: img3, direction: 'Direção de Eduardo Okamoto (2023)' },
        { title: 'A Tragédia do Rei Christophe', image: img2,direction: 'Direção de Verônica Fabrini (2022)' },
    ]

    return (
        <swiper-container 
        slides-per-view={`${slidesPerView}`}
        navigation={true} modules={[Navigation]} 
        >
            {dbcards.map((item, index) => (
                <swiper-slide>
                    <div key={index} className={styles.card}>
                        <img src={item.image} alt={`Capa ${item.title}`} />
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