import React from "react";

import styles from "./Redes.module.css";
import Icono from "./Icono.jsx";

function Redes() {
  return (
    <div className={styles.redes}>
      <Icono icono="fab fa-facebook-f" enlace="https://facebook.com/tunasabana" color="facebook" />
      <Icono icono="fab fa-instagram" enlace="https://twitter.com/tunausabana" color="instagram" />
      <Icono icono="fab fa-twitter" enlace="https://instagram.com/tunasabana" color="twitter" />
      <Icono icono="fab fa-youtube" enlace="https://youtube.com/tunasabana" color="youtube" />
    </div>
  );
}

export default Redes;
