import styles from '../styles_modules/Contato.module.css'

import { FaInstagram, FaFacebook, FaYoutube, FaTiktok, FaWhatsapp } from "react-icons/fa";

function Contatos() {
    return (
        <div>
            <div className={styles.container}>
                <h1 className={styles.title}>Contatos</h1>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <p>
                            Entre em contato comigo enviando um E-mail para <span>contato.lauragomes@gmail.com</span>,
                            ou utilize o Formulário de contato.
                        </p>
                        <h2>Acesse minhas redes sociais</h2>
                        <nav>
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
                        </nav>
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
            </div>
        </div>
    );
}
export default Contatos