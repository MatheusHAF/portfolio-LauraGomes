import styles from "../styles_modules/Projetos.module.css"
import Galeria from "./Galeria";

function Projetos() {
    const images = [
        { url: 'url', alt: 'alt', tags: ['tag'] },
        ];
    // Aleatorizar o array de imagens
    const images2 = images.sort(() => Math.random() - 0.1);
    return (
        <div className={styles.container}>
            <h1>Galeria</h1>
            <Galeria images={images2} />
        </div>
    );
}
export default Projetos