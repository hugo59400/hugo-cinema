// importer react
import React from "react";
// import css ici de App
import "./App.css";
//  importes tous les composant crées

import Routing from "../commons/Routing";
import pages from "../data/constante";


// creer classe composant
export class App extends React.Component {
  render() {
    return (
      <div>
        {/* appel composants qui ont ete importes */}
        <Routing pages={pages}> </Routing>

      
      </div>
    );
  }
}

// exporter classe entiere
export default App;
