import React from "react";

import styles from "./Titulo.module.css";

function Titulo(props) {
  return (
    <div className={styles.titulo}>
      <h1>{props.texto}</h1>
    </div>
  );
}

export default Titulo;
