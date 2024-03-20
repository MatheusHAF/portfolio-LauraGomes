import styles from "../styles_modules/Navbar.module.css";
import { Link } from "react-router-dom";

import Container from "./Container";

function Navbar() {
    return (
        <nav className={styles.header}>
            <Container>
                <h1><Link to="/Home">Laura Gomes</Link></h1>
                <ul className={styles.list}>
                    <li><Link to="/Home">Inicio</Link></li>
                    <li><Link to="/Sobre">Sobre</Link></li>
                    <li><Link to="/Projetos">Projetos</Link></li>
                    <li><Link to="/Contatos">Contatos</Link></li>
                </ul>
            </Container>
        </nav>
    );
}
export default Navbar