import React from "react";

import styles from "./Footer.module.css";
import Redes from "./Redes.jsx";
import Copyright from "./Copyright.jsx";

function Footer() {
  return (
    <div className={styles.footer}>
      <Redes />
      <Copyright />
    </div>
  );
}

export default Footer;
