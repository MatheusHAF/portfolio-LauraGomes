
import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import styles from "../styles_modules/TemplateProjeto.module.css"

// import required modules
import {Navigation, Thumbs } from 'swiper/modules';

export default function TemplateProjeto({ pacote }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Swiper
                    navigation={true}
                    slidesPerView={1}
                    thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                    //modules={[Navigation, Thumbs]}
                    className={styles.mySwiper2}
                >
                    {pacote.imgs.map((item) => (
                        <SwiperSlide>
                            <img src={item.url} alt={`Capa ${item.alt}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className={styles.right}>
                <div className={styles.top}>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        slidesPerView={4}
                        modules={[Thumbs]}
                        className={styles.mySwiper}
                    >
                        {pacote.imgs.map((item, index) => (
                            <SwiperSlide>
                                <div>
                                    <img src={item.url} alt={`Capa ${item.alt}`} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className={styles.bottom}>
                        <p>{pacote.desc}</p>
                </div>
            </div>
        </div>);
}