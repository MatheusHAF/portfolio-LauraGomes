import styles from "../styles_modules/Galeria.module.css"
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
        <div>
            <div>
                <button onClick={() => setSelectedFilter('')}>Todos</button>
                <button onClick={() => handleFilterClick('teatro')}>Teatro</button>
                <button onClick={() => handleFilterClick('producao')}>Produção</button>
                <button onClick={() => handleFilterClick('capoeira')}>Capoeira</button>
                <button onClick={() => handleFilterClick('influencer')}>Influencer</button>
                {/* Adicione mais botões para outras opções de filtro */}
            </div>
            <div className={styles.galeria}>
                {filteredImages.map((image, index) => (
                    <div><img className={styles.item} key={index} src={image.url} alt={image.alt} /></div>
                ))}
            </div>
        </div>
    );
};

export default Galeria;
