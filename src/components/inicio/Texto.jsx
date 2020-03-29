import React from "react";

import styles from "./Texto.module.css";

function Texto(props) {
  return (
    <div className={styles.texto}>
      <p>{props.texto}</p>
    </div>
  );
}

export default Texto;
