import React from "react";

import styles from "./Copyright.module.css";

const currentYear = new Date().getFullYear();

function Copyright() {
  return (
    <div>
      <p className={styles.copyright}>Tuna Universidad de La Sabana © {currentYear}</p>
    </div>
  );
}

export default Copyright;
