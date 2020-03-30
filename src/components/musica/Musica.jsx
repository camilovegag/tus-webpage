import React from "react";

import styles from "./Musica.module.css";
import Header from "../header/Header.jsx";
import Canciones from "./Canciones.jsx";
import Album from "./Album.jsx";
import Footer from "../footer/Footer.jsx";

function Musica() {
  return (
    <div className={styles.musica}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.canciones}>
        <Canciones />
      </div>
      <div className={styles.album}>
        <Album />
      </div>
      <Footer />
    </div>
  );
}

export default Musica;
