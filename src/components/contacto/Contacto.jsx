import React from "react";
import styles from "./Contacto.module.css";
import stylesBoton from "../inicio/Boton.module.css";
import Boton from "../inicio/Boton.jsx";
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";

const Contacto = () => {
  return (
    <div>
      <div className={styles.header}>
        <Header />
      </div>
      {/* form */}
      <div className={styles.form}>
        {/* titulo */}
        <div className={styles.titulo}>
          <p>Para contactos puedes comunicarte a los números 3041030702 - 3214175886</p>
        </div>
        {/* campos */}
        <div className={styles.campos}>
          <div className={styles.nombre}>
            <p>Nombre *</p>
            <div className={styles.inputs}>
              <input id="nombre" type="text" placeholder="Tu nombre" />
              <input id="apellido" type="text" placeholder="Tu apellido" />
            </div>
          </div>
          <div className={styles.mail}>
            <p>Correo electrónico *</p>
            <input type="text" placeholder="alguien@ejemplo.com" />
          </div>
          <div className={styles.proposito}>
            <p>Propósito</p>
            <select name="proposito" id="">
              <option value="contratacion">Contratación</option>
              <option value="festival">Festival</option>
              <option value="otro">Otro</option>
            </select>
          </div>
          <div className={styles.mensaje}>
            <p>Mensaje *</p>
            <textarea name="" id="" cols="30" rows="10" placeholder="Tu mensaje" maxLength="500" />
          </div>
          <div className={stylesBoton.botonC}>
            <Boton texto="Contáctanos" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacto;
