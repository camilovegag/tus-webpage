import React from "react";
import styles from "./Canciones.module.css";

function Cancion(props) {
  return (
    <div className={styles.contenedor}>
      <iframe title={props.titulo} width="100%" height="100%" scrolling="no" frameborder="no" allow="autoplay" src={props.cancion}></iframe>
    </div>
  );
}

export default Cancion;
