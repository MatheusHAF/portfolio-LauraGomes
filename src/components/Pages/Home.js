import Laura from '../../images/image00001-quadrada.JPG'
import styles from '../styles_modules/Home.module.css'
import { FaFacebook,FaInstagram,FaLinkedin,FaYoutube } from "react-icons/fa6";

function Home() {
    return (
        <div className={`${styles.main}`}>
            <div className={styles.about}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus id mi ultrices, venenatis ligula ut, consequat erat. Aenean quis ultricies lacus. Quisque condimentum vel odio eget tristique.
                    Nullam eget lacus et libero porta egestas. Donec lobortis convallis lacus eu tempus. Praesent non consequat leo. Aenean id rutrum dolor.
                    Vestibulum ut molestie augue.
                    Phasellus id est vel nisi placerat convallis.
                </p>
                <div>
                    <img src={Laura} alt="Foto Laura Gomes"/>
                    <p><a href=""><FaFacebook/></a> <a href=""><FaInstagram/></a> <a href=""><FaYoutube/></a> <a href=""><FaLinkedin/></a></p>
                </div>
            </div>
        </div>
    );
}
export default Home