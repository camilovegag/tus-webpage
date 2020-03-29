import React from "react";

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
      <div className={stylesBoton.boton}>
        <Boton texto="Escuchar" />
      </div>
    </div>
  );
}

export default Escuchar;
