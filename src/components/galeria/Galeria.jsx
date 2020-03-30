import React from "react";

import styles from "./Galeria.module.css";
import Header from "../header/Header.jsx";
import Subtitulo from "../musica/Subtitulo.jsx";
import Imagen from "./Imagen.jsx";
import Footer from "../footer/Footer.jsx";

function Galeria() {
  return (
    <div className={styles.galeria}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.contenedor}>
        <div className={styles.subtitulo}>
          <Subtitulo texto="La Tuna se queda en casa - Si vas a Calatayud" />
        </div>
        <iframe title="calatayud" width="1500" height="900" src="https://www.youtube.com/embed/qz6g5DNU32s"></iframe>
        <p>Aún en casa, seguimos haciendo lo que nos gusta: compartir con nuestros amigos y hacer música. Quédate en casa, por aquellos que no lo pueden hacer. #YoMeQuedoEnCasa</p>
      </div>
      <div className={styles.contenedor2}>
        <div className={styles.subtitulo2}>
          <Subtitulo texto="Galería" />
        </div>
        <div className={styles.fila}>
          <div className={styles.imgContenedor}></div>
          <div className={styles.imgContenedor}></div>
          <div className={styles.imgContenedor}></div>
          <div className={styles.imgContenedor}></div>
        </div>
        <div className={styles.fila}>
          <div className={styles.imgContenedor}></div>
          <div className={styles.imgContenedor}></div>
          <div className={styles.imgContenedor}></div>
          <div className={styles.imgContenedor}></div>
        </div>
        <div className={styles.fila}>
          <div className={styles.imgContenedor}></div>
          <div className={styles.imgContenedor}></div>
          <div className={styles.imgContenedor}></div>
          <div className={styles.imgContenedor}></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Galeria;
