import Laura from '../../images/image00001-quadrada.JPG'
import styles from '../styles_modules/Home.module.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";
import Projetos from './Projetos';

function Home() {
    return (
        <div className={`${styles.main}`}>
            <div className={styles.about}>
                <p>
                Oi! Me chamo <span>Laura Gomes</span>! Tenho 23 anos, sou atriz, produtora e criadora de conteúdo nas redes sociais.
                 Estou me formando em Artes Cênicas pela UNICAMP, trabalho como atriz no programa Perrengue na Band na TV Bandeirantes (Band) e produzo um grupo de teatro chamado NORA (Núcleo de Obras de Riso e Amargura). Sou apaixonada por capoeira, amo cozinhar, viajar, subir montanhas e acampar. Sou artista, extrovertida, comunicativa e aprendo rápido.  
                 Aqui você vai poder conhecer um pouco mais sobre meu trabalho e minha história!
                </p>
                <div>
                    <img src={Laura} alt="Foto Laura Gomes" />
                    <p><a href=""><FaFacebook /></a> <a href=""><FaInstagram /></a> <a href=""><FaYoutube /></a> <a href=""><FaLinkedin /></a></p>
                </div>
            </div>
        </div>
    );
}
export default Home