import React, { Fragment } from "react";
//importer des outils routing ci dessous
import {
  BrowserRouter as Router, Routes, Route,Navigate} from "react-router-dom";
import Accueil from "../pages/Accueil";
import Page404 from "../pages/Page404";
import PageListeFilms from "../pages/PageListeFilms";
import PageFormulaire from "../pages/PageFormulaire";
import PageDetailFilm from "../pages/PageDetailFilm";
import NavBar from "./NavBar";
// Router=permet de definir tout le routing de l'appli



export const Routing = (props) => {
  return (
    <Fragment>
      <Router>
        {/* liens vers differente destination  */}
        {/* les differente route pr y acceder a ces dest  */}
      <NavBar pages={props.pages}/>
        <Routes>
{/* redirection du / vers accueil  */}
          <Route path="/" element={ <Navigate to="/accueil"/> }/>
        
          <Route path="/accueil" element={<Accueil />} ></Route>
          <Route path="/listeFilms" element={<PageListeFilms />}></Route>
          <Route path="/add" element={<PageFormulaire />}></Route>
          <Route path="/details" element={<PageDetailFilm />}></Route>
          <Route path="*" element={<Page404  />} /> 

        </Routes>
      </Router>
    </Fragment>
  );
};
export default Routing;
