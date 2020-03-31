import React from "react";

import styles from "./Integrante.module.css";
import Apodo from "./Apodo.jsx";

function Integrante(props) {
  return (
    <div className={styles.integrante}>
      <Apodo name={props.apodo} />
      <img src={props.imagen} />
    </div>
  );
}

export default Integrante;
