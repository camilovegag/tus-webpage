import React from "react";
import styles from "./Integrantes.module.css";
import Header from "../header/Header.jsx";
import Integrante from "./Integrante.jsx";
import Footer from "../footer/Footer.jsx";
import chorri from "../images/chorri.png";
import junior from "../images/junior.png";
import betun from "../images/betun.png";
import beatlejuice from "../images/beatlejuice.png";
import boyaqui from "../images/boyaqui.png";
import jhonson from "../images/jhonson.png";
import locomia from "../images/locomia.png";
import up from "../images/up.png";
import wolowitz from "../images/wolowitz.png";
import pinzas from "../images/pinzas.png";
import barrica from "../images/barrica.png";

function Integrantes() {
  return (
    <div className={styles.integrantes}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.cjb}>
        <Integrante className={styles.top} imagen={chorri} apodo="Chorri" />
        <Integrante className={styles.top} imagen={junior} apodo="Junior" />
        <Integrante className={styles.top} imagen={betun} apodo="Betún" />
      </div>
      <div className={styles.bb}>
        <Integrante className={styles.mid} imagen={beatlejuice} apodo="Beatlejuice" />
        <Integrante className={styles.mid} imagen={boyaqui} apodo="Boyaqui  " />
      </div>
      <div className={styles.jlu}>
        <Integrante className={styles.bot} imagen={jhonson} apodo="Jhonson" />
        <Integrante className={styles.bot} imagen={locomia} apodo="Locomia" />
        <Integrante className={styles.bot} imagen={up} apodo="Up" />
      </div>
      <div className={styles.wpb}>
        <Integrante className={styles.bot} imagen={wolowitz} apodo="Wolowitz" />
        <Integrante className={styles.bot} imagen={pinzas} apodo="Pinzas" />
        <Integrante className={styles.bot} imagen={barrica} apodo="Barrica" />
      </div>
      <Footer />
    </div>
  );
}

export default Integrantes;
