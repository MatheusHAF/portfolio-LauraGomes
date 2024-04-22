
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import styles from "../styles_modules/TemplateProjeto.module.css"

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function TemplateProjeto({ pacote }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className={styles.projetocontainer}>
            <Swiper

                spaceBetween={1}
                navigation={true}
                //thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className={styles.mySwiper2}
            >
                {pacote.imgs.map((item) => (
                    <SwiperSlide>
                        <img src={item.url} alt={`Capa ${item.alt}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={1}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className={styles.mySwiper}
            >
                {pacote.imgs.map((item, index) => (
                    <SwiperSlide>
                        <div key={index}>
                            <img src={item.url} alt={`Capa ${item.alt}`} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>);
}