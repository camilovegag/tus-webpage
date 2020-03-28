import React from "react";

import styles from "./Portada.module.css";
import Titulo from "./Titulo.jsx";
import Boton from "./Boton.jsx";

function Portada() {
  return (
    <div className={styles.portada}>
      <Titulo texto="Tuna Universidad de La Sabana" />
      <Boton texto="Contáctanos" />
    </div>
  );
}

export default Portada;
