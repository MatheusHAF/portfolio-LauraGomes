import { ResponsiveMasonry } from "react-responsive-masonry";
import Masonry from "react-responsive-masonry";
import styles from "../styles_modules/Galeria.module.css";


const Galeria = ({ images }) => {

    return (
        <>
            <div className={styles.container}>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                >
                    <Masonry gutter="10px">
                        {
                            images.map((image, index) => (

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
                            ))
                        }
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </>
    );
};

export default Galeria;
