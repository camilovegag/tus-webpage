import React from "react";

import styles from "./Boton.module.css";

function Boton(props) {
  return (
    <div className={styles.boton}>
      <p>{props.texto}</p>
    </div>
  );
}

export default Boton;
