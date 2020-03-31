import React from "react";

import styles from "./Contacto.module.css";
import stylesBoton from "../inicio/Boton.module.css";
import Header from "../header/Header";
import Subtitulo from "../musica/Subtitulo";
import Texto from "./Texto.jsx";
import Campo from "./Campo.jsx";
// import Drop from "./Drop.jsx";
import Boton from "../inicio/Boton";
import Footer from "../footer/Footer";
function Contacto() {
  return (
    <div className={styles.contacto}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.formContainer}>
        <div className={styles.subtitulo}>
          <Subtitulo texto="Para contactos puedes comunicarte a los números 3041030702 - 3214175886" />
        </div>
        <div className={styles.form}>
          <div className={styles.container}>
            <Texto texto="Nombre *" />
            <div className={styles.nombre}>
              <Campo placeholder="Tu nombre" />
              <Campo placeholder="Tu apellido" />
            </div>
          </div>
          <div className={styles.container}>
            <Texto texto="Correo electrónico *" />
            <div className={styles.correo}>
              <Campo placeholder="alguien@ejemplo.com" className={styles.correo} />
            </div>
          </div>
          <div className={styles.smallContainer}>
            <Texto texto="Propósito" />
            <Campo placeholder="Contratar" className={styles.drop} />
          </div>
          <div className={styles.messageContainer}>
            <Texto texto="Mensaje *" />
            <Campo placeholder="Tu mensaje" className={styles.mensaje} />
          </div>
          <div className={stylesBoton.boton}>
            <Boton texto="Enviar" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contacto;
