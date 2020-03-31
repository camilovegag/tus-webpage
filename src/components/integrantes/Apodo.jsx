import React from "react";
import styles from "./Apodo.module.css";

function Apodo(props) {
  return (
    <div className={styles.apodo}>
      <p>{props.name}</p>{" "}
    </div>
  );
}

export default Apodo;
