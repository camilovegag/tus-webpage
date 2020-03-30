import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./App.module.css";

import Inicio from "./inicio/Inicio.jsx";
import Musica from "./musica/Musica.jsx";
// import Galeria from "../galeria/Galeria.jsx";
// import Integrantes from "../integrantes/Integrantes.jsx";
// import Contacto from "../contacto/Contacto.jsx";

function App() {
  return (
    <Router>
      <div className={styles}>
        <Switch>
          <Route path="/" exact component={Inicio} />
          <Route path="/musica" component={Musica} />
          {/* <Route path="/galeria" component={Galeria} />
        <Route path="/integrantes" component={Integrantes} />
        <Route path="/contacto" component={Contacto} />  */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
