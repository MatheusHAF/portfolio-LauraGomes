import styles from "../styles_modules/Navbar.module.css";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";

import logo from "../../images/logo.png"

import Container from "./Container";
import { configure } from "@testing-library/react";

function Navbar() {
    const[menuOpen,setMenuOpen] = useState(true)
    function toggleMenu() {
        setMenuOpen(!menuOpen);
    };
    return (
        <nav className={styles.header}>
            <Link to="/"><img src={logo} alt="logo" /></Link>
            <FaBars className={styles.menu_icon} onClick={toggleMenu} />
            <Container>
                <ul className={menuOpen ? `${styles.list} ${styles.open}` : `${styles.list}`}>
                    <li><Link onClick={toggleMenu} to="/">Inicio</Link></li>
                    <li><Link onClick={toggleMenu} to="/Sobre">Sobre</Link></li>
                    <li><Link onClick={toggleMenu} to="/Projetos">Projetos</Link></li>
                    <li><Link onClick={toggleMenu} to="/Galerias">Galeria</Link></li>
                    <li><Link onClick={toggleMenu} to="/Contatos">Contatos</Link></li>
                </ul>
            </Container>
        </nav>
    );
}
export default Navbar