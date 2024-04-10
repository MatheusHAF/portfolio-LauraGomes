import styles from '../styles_modules/Contato.module.css'

import { FaInstagram, FaFacebook, FaYoutube, FaTiktok, FaWhatsapp } from "react-icons/fa";

function Contatos() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <p>
                    Entre em contato comigo enviando um E-mail utilizando o formulário de contato <span>contato.lauragomes@gmail.com</span>,
                    ou pelas minhas redes sociais.
                </p>
                <nav><FaFacebook /> <FaInstagram /> <FaYoutube /><FaTiktok /><FaWhatsapp /></nav>
            </div>
            <div className={styles.right}>
                <h1>Formulário de Contato</h1>
                <form>
                    <nav>
                        <label>Nome: </label>
                        <input type="text" />
                    </nav>
                    <nav>
                        <label>Assunto: </label>
                        <input type="text" />
                    </nav>
                    <nav>
                        <label>Seu E-mail: </label>
                        <input type="email" />
                    </nav>
                    <nav>
                        <label>Mensagem: </label>
                        <textarea cols="30" rows="10"></textarea>
                    </nav>
                    <nav>
                        <input className={styles.submit} type="submit" value='Enviar E-mail' />
                    </nav>
                </form>
            </div>
        </div>
    );
}
export default Contatos