import React from "react";
import styles from "./Campo.module.css";

function Campo(props) {
  return (
    <div className={styles.campo}>
      <input type="text" placeholder={props.placeholder} />
    </div>
  );
}

export default Campo;
