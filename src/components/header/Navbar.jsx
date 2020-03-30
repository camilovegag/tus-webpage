import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <Link to="/">
          <li>Inicio</li>
        </Link>
        <Link to="/musica">
          <li>Música</li>
        </Link>
        <Link to="/galeria">
          <li>Galería</li>
        </Link>
        <Link to="/integrantes">
          <li>Integrantes</li>
        </Link>
        <Link to="/contacto">
          <li>Contacto</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
