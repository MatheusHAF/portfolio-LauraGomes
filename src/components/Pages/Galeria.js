import { ResponsiveMasonry } from "react-responsive-masonry";
import Masonry from "react-responsive-masonry";
import styles from "../styles_modules/Galeria.module.css";
import { useState } from 'react';

const Galeria = ({ images }) => {
    const [selectedFilter, setSelectedFilter] = useState('');

    const handleFilterClick = (filter) => {
        setSelectedFilter(filter);
    };

    const filteredImages = selectedFilter
        ? images.filter((image) => image.tags.includes(selectedFilter))
        : images;

    return (
        <>
            <div className={styles.btns}>
                <button onClick={() => setSelectedFilter('')}>Todos</button>
                <button onClick={() => handleFilterClick('teatro')}>Teatro</button>
                <button onClick={() => handleFilterClick('producao')}>Produção</button>
                <button onClick={() => handleFilterClick('capoeira')}>Capoeira</button>
                <button onClick={() => handleFilterClick('influencer')}>Influencer</button>
                {/* Adicione mais botões para outras opções de filtro */}
            </div>
            <div className={styles.container}>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                >
                    <Masonry gutter="10px">
                        {
                            filteredImages.map((image, index) => (
                                image.url && (
                                    <div key={index} className={styles.card}>
                                        <img
                                            src={image.url}
                                            alt={image.alt}
                                            className={styles.image}
                                        />
                                        <div className={styles.overlay}></div>
                                        <div className={styles.text}>
                                            {image.alt}
                                        </div>
                                    </div>
                                )
                            ))
                        }
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </>
    );
};

export default Galeria;
