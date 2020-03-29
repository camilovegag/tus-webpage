import React from "react";

import styles from "./Inicio.module.css";
import Header from "../header/Header.jsx";
import Portada from "../inicio/Portada.jsx";
import Historia from "../inicio/Historia.jsx";

function Inicio() {
  return (
    <div>
      <div className={styles.bg_portada}>
        <Header />
        <Portada />
      </div>
      <div className={styles.bg_historia}>
        <Historia />
      </div>
    </div>
  );
}

export default Inicio;
