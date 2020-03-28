import React from "react";
import styles from "./Header.module.css";
import logo from "../images/logo.png";
import Navbar from "./Navbar.jsx";

function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} alt="Escudo Tuna Universidad de La Sabana" width="200px" />
      <Navbar />
    </div>
  );
}

export default Header;
