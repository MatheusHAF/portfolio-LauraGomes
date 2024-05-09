import { FaInstagram, FaFacebook, FaYoutube, FaTiktok, FaWhatsapp } from "react-icons/fa";
import styles from '../styles_modules/Footer.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_top}>
                <div className={styles.top_left}>
                    <h1>Laura Gomes</h1>
                    <p>
                        Praesent non con
                        sequat leo. Aenean id rutrum dolor.
                        Vestibulum ut molestie augue.
                    </p>
                </div>
                <div className={styles.top_right}>
                    <p>Redes Sociais</p>
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/lauricadanica?mibextid=PlNXYD" target='_blank'>
                                <FaFacebook />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/lauragomes_lg?igsh=OW5zMWExcWExYmVj&utm_source=qr " target='_blank'>
                                <FaInstagram />
                            </a>
                        </li>
                        <li>
                            <a href="https://youtube.com/@Laurica?si=iBjHsDar9WRC7-fA " target='_blank'>
                                <FaYoutube />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.tiktok.com/@_laurica_lg?_t=8lMwj4lhlva&_r=1" target='_blank'>
                                <FaTiktok />
                            </a>
                        </li>
                        <li>
                            <a href="" target='_blank'>
                                <FaWhatsapp />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.footer_bottom}>
                <p>Copyright <span>©</span> 2024. Todos direitos reservados.</p>
            </div>
        </div>
    );
}
export default Footer