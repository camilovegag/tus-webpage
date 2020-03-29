import React from "react";

import styles from "./Titulo.module.css";
import stylesHistoria from "./Historia.module.css";
import Titulo from "./Titulo.jsx";
import Texto from "./Texto.jsx";

function Historia() {
  return (
    <div className={stylesHistoria.contenedor}>
      <div className={styles.historia}>
        <Titulo texto="¿Quiénes somos?" />
      </div>
      <Texto
        texto="La Tuna Universidad de La Sabana, fundada el 25 de julio de 1999, es un grupo musical 
        representativo. Estructurado bajo claros lineamientos de respeto y camaradería,
        caracterizado por su musicalidad y simpatía. "
      />
    </div>
  );
}

export default Historia;
