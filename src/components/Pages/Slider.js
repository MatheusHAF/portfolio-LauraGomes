import { useState, useEffect } from 'react';

//Swiper
import { register } from 'swiper/element/bundle';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import styles from '../styles_modules/Slider.module.css'

//imagens
import img1 from '../../images/TEATRO/OKUTÁ/00 capa.jpg'
import img2 from '../../images/TEATRO/TRAGÉDIA DO REI CRISTOPHE/00 CAPA.JPG'
import img3 from '../../images/TEATRO/UMA NOITE/00 CAPA.jpg'
import img4 from '../../images/CAPOEIRA/ubutuba/capa.jpg'
import img5 from '../../images/INFLUENCER/00 CAPA.jpg'
import img6 from '../../images/PRODUÇÃO/FESTEJU/00 CAPA.JPG'

register();


function Slider({filter}) {
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
        {
            title: 'Okutá Hiipadatiki',
            image: img1,
            direction: 'Direção de Lucienne Guedes (2022)',
            tags: ['Teatro']
        },
        {
            title: 'Uma Noite',
            image: img3,
            direction: 'Direção de Eduardo Okamoto (2023)',
            tags: ['Teatro']
        },
        {
            title: 'A Tragédia do Rei Christophe',
            image: img2,
            direction: 'Direção de Verônica Fabrini (2022)',
            tags: ['Teatro']
        },
        {
            title: 'Ubutuba',
            image: img4,
            direction: '',
            tags: ['Capoeira']
        },
        {
            title: 'Lado B',
            image: img5,
            direction: '',
            tags: ['Influencer']
        },
        {
            title: 'FESTEJU',
            image: img6,
            direction: '',
            tags: ['Produção']
        },
    ]
    const [selectedFilter, setSelectedFilter] = useState('');
    useEffect(() => {
        // Define o filtro selecionado quando a prop "filter" mudar
        setSelectedFilter(filter);
    }, [filter]);
    const filteredImages = selectedFilter
        ? dbcards.filter((image) => image.tags.includes(selectedFilter))
        : dbcards;
    return (
        <swiper-container
            slides-per-view={`${slidesPerView}`}
            navigation={true} modules={[Navigation]}
        >
            {filteredImages.map((item, index) => (
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