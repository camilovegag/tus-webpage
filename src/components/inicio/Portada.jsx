import React from "react";

import styles from "./Portada.module.css";
import stylesTitulo from "./Titulo.module.css";
import stylesBoton from "./Boton.module.css";
import Titulo from "./Titulo.jsx";
import Boton from "./Boton.jsx";

function Portada() {
  return (
    <div className={styles.portada}>
      <div className={stylesTitulo.escuchar}>
        <Titulo texto="Tuna Universidad de La Sabana" />
      </div>
      <div className={stylesBoton.boton}>
        <Boton texto="Contáctanos" />
      </div>
    </div>
  );
}

export default Portada;
