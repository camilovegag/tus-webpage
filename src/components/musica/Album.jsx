import React from "react";
import Subtitulo from "./Subtitulo.jsx";

import styles from "./Album.module.css";

function Album() {
  return (
    <div className={styles.album}>
      <Subtitulo texto="Nuestro álbum" />
      <div className={styles.contenedor}>
        <iframe
          title="Album"
          width="100%"
          height="550"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1020223804&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
      </div>
    </div>
  );
}

export default Album;
