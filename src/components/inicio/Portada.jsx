import React from "react";
import { Link } from "react-router-dom";

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
      <Link to="/contacto">
        <div className={stylesBoton.boton}>
          <Boton texto="Contáctanos" />
        </div>
      </Link>
    </div>
  );
}

export default Portada;
