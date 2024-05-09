import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//Swiper
import { register } from 'swiper/element/bundle';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import styles from '../styles_modules/Slider.module.css'

//imagens
import img1 from '../../images/Teatro/Okutá Hiipadatiki/00 capa.jpg'
import img2 from '../../images/Teatro/A Tragédia do Rei Christophe/00 CAPA.jpg'
import img3 from '../../images/Teatro/Uma Noite/00 CAPA.jpg'
import img5 from '../../images/Influencer/Lado B/00 CAPA.jpg'
import img6 from '../../images/Produção/FESTEJU/CAPA.jpg'
import img7 from '../../images/Teatro/Grease - O Musical/CAPA.jpg'
import img8 from '../../images/Teatro/O Alienista/capa.jpg'
import img9 from '../../images/Teatro/Ópera do Malandro/CAPA.jpg'
import img10 from '../../images/Teatro/Um Dia Ouvi a Lua/CAPA.jpg'
import img11 from '../../images/Influencer/Invisalign/Galeria .jpeg'

register();


function Slider({filter}) {
    const [slidesPerView, setSlidesPerView] = useState(3); // Defina o número inicial de slides por visualização

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
            title: 'Grease - O Musical',
            image: img7,
            direction: 'Fabiana Vitusso (2017)',
            tags: ['Teatro']
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
        {
            title: 'O Alienista',
            image: img8,
            direction: 'Direção de Dirceu de Carvalho ',
            tags: ['Teatro']
        },
        {
            title: 'Ópera do Malandro',
            image: img9,
            direction: 'Direção de Marcelo Pinta (2016)',
            tags: ['Teatro']
        },
        {
            title: 'Um Dia Ouvi a Lua',
            image: img10,
            direction: 'Direção de Sofia Fransolin e orientação de Larissa Neves (2019)',
            tags: ['Teatro']
        },
        {
            title: 'Invisalign',
            image: img11,
            direction: ' ',
            tags: ['Influencer']
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
                    <Link to={`/Projeto/${item.tags}|${item.title}|${item.direction}`}>
                        <div key={index} className={styles.card}>
                            <img src={item.image} alt={`Capa ${item.title}`} />
                            <div>
                                <h2>{item.title}</h2>
                                <p>{item.direction}</p>
                            </div>
                        </div>
                    </Link>
                </swiper-slide>
            ))}
        </swiper-container>
    );
}
export default Slider;