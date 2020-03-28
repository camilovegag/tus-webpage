import React from "react";
import styles from "./App.module.css";

import Inicio from "./inicio/Inicio.jsx";
// import Musica from "../musica/Musica.jsx";
// import Galeria from "../galeria/Galeria.jsx";
// import Integrantes from "../integrantes/Integrantes.jsx";
// import Contacto from "../contacto/Contacto.jsx";

function App() {
  return (
    <div className={styles}>
      <Inicio />
    </div>
  );
}

export default App;
