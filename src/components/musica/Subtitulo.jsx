import React from "react";
import styles from "./Subtitulo.module.css";

function Subtitulo(props) {
  return (
    <div className={styles}>
      <h2>{props.texto}</h2>
    </div>
  );
}

export default Subtitulo;
