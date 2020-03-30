import React from "react";
import { Link } from "react-router-dom";

import styles from "./Escuchar.module.css";
import stylesTitulo from "./Titulo.module.css";
import stylesBoton from "./Boton.module.css";
import Titulo from "./Titulo.jsx";
import Boton from "./Boton.jsx";

function Escuchar() {
  return (
    <div className={styles.contenedor}>
      <div className={stylesTitulo.escuchar}>
        <Titulo texto="!Ya puedes escuchar nuestras canciones!" />
      </div>
      <Link to="/musica">
        <div className={stylesBoton.boton}>
          <Boton texto="Escuchar" />
        </div>
      </Link>
    </div>
  );
}

export default Escuchar;
