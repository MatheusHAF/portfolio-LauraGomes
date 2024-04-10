import styles from '../styles_modules/Contato.module.css'
function Contatos() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1>Titulo</h1>
                <p>Magna esse ullamco eiusmod nulla dolore.</p>
                <h3> Me siga nas redes sociais</h3>
                <nav>Icones aqui</nav>
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
                        <input className={styles.submit} type="submit" value='Enviar E-mail'/>
                    </nav>
                </form>
            </div>
        </div>
    );
}
export default Contatos