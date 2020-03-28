import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul className={styles.list}>
        <li>Inicio</li>
        <li>Música</li>
        <li>Galería</li>
        <li>Integrantes</li>
        <li className={styles.fixed}>Contacto</li>
      </ul>
    </div>
  );
}

export default Navbar;
