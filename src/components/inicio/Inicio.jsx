import React from "react";

import styles from "./Inicio.module.css";
import Header from "../header/Header.jsx";
import Portada from "../inicio/Portada.jsx";
import Historia from "../inicio/Historia.jsx";
import Escuchar from "../inicio/Escuchar.jsx";
import Footer from "../footer/Footer.jsx";

function Inicio() {
  return (
    <div className={styles.inicio}>
      <div className={styles.bg_portada}>
        <Header />
        <Portada />
      </div>
      <div className={styles.bg_historia}>
        <Historia />
      </div>
      <div className={styles.bg_escuchar}>
        <Escuchar />
      </div>
      <Footer />
    </div>
  );
}

export default Inicio;
