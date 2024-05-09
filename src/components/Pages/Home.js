import Laura from '../../images/image00001-quadrada.jpg'
import styles from '../styles_modules/Home.module.css'
import { FaInstagram, FaFacebook, FaYoutube, FaTiktok, FaWhatsapp } from "react-icons/fa";
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
                    <p className={styles.socialmidia}>
                        <a href="https://www.facebook.com/lauricadanica?mibextid=PlNXYD" target='_blank'>
                            <FaFacebook />
                        </a>
                        <a href="https://www.instagram.com/lauragomes_lg?igsh=OW5zMWExcWExYmVj&utm_source=qr " target='_blank'>
                            <FaInstagram />
                        </a>
                        <a href="https://youtube.com/@Laurica?si=iBjHsDar9WRC7-fA " target='_blank'>
                            <FaYoutube />
                        </a>
                        <a href="https://www.tiktok.com/@_laurica_lg?_t=8lMwj4lhlva&_r=1" target='_blank'>
                            <FaTiktok />
                        </a>
                        <a href="" target='_blank'>
                            <FaWhatsapp />
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Home