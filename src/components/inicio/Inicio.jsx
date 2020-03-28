import React from "react";

import styles from "./Inicio.module.css";
import Header from "../header/Header.jsx";
import Portada from "../inicio/Portada.jsx";

function Inicio() {
  return (
    <div>
      <div className={styles.bg}>
        <Header />
        <Portada />
      </div>
    </div>
  );
}

export default Inicio;
