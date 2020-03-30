import React from "react";
import styles from "./Canciones.module.css";
import Subtitulo from "./Subtitulo.jsx";
import Cancion from "./Cancion.jsx";

function Canciones() {
  return (
    <div className={styles.canciones}>
      <Subtitulo texto="Canciones destacadas" />
      <div className={styles.contenedor}>
        <Cancion titulo="Nathalie" cancion="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/784970014&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false" />
        <Cancion titulo="Granada" cancion="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/784965874&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
      </div>
    </div>
  );
}

export default Canciones;
