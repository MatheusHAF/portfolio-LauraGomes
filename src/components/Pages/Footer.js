import { FaFacebook,FaInstagram,FaLinkedin } from "react-icons/fa6";
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
                        <li><FaFacebook/></li>
                        <li><FaInstagram/></li>
                        <li><FaLinkedin/></li>
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