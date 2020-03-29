import React from "react";

import styles from "./Icono.module.css";

function Icono(props) {
  return (
    <a href={props.enlace}>
      <div className={`${styles.icono} ${styles[props.color]}`}>
        <i className={props.icono}></i>
      </div>
    </a>
  );
}

export default Icono;
