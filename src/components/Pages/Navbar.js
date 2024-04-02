import styles from "../styles_modules/Navbar.module.css";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";

import logo from "../../images/logo.png"

import Container from "./Container";

function Navbar() {

    const[menuOpen,setMenuOpen] = useState(false)
    function toggleMenu() {
        setMenuOpen(!menuOpen);
    };
    return (
        <nav className={styles.header}>
            <img src={logo} alt="logo" />
            <FaBars className={styles.menu_icon} onClick={toggleMenu} />
            <Container>
                <ul className={menuOpen ? `${styles.list} ${styles.open}` : `${styles.list}`}>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/Sobre">Sobre</Link></li>
                    <li><Link to="/Projetos">Projetos</Link></li>
                    <li><Link to="/Contatos">Contatos</Link></li>
                </ul>
            </Container>
        </nav>
    );
}
export default Navbar