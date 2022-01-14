import React, { Fragment, useState } from "react";
import AjoutFilm from "./AjoutFilm";

export const ListeFilm = () => {
  // etat : tab nommé utilisateurs  via un hook
  let [films, setFilm] = useState([]);

  // ajout user dans tab utilisateurs avec fonction hndlesubmit
  const handleSubmit = (film) => {
    let newFilm = [...films];
    newFilm.push(film);
    setFilm((film = newFilm));
  };
// SUPPRIMER ELEM DANS TAB
  const handleEffacer = (e) => {
    e.stopPropagation()
    setFilm([])
  };


 

  const styleObj = {
    fontSize: 40,
    color: "red",
    textAlign: "center",
    paddingTop: "100px",
}
  return (
    <Fragment>
        <h1 style={styleObj} >Liste des films qui vont etre ajoutés dans le cinéma  </h1>
      
      <button onClick={handleEffacer} style={{fontWeight: "bold",  width: 120, height: 50}} >Supprimer tous les films  </button>
      <ul>
        {films.map((item, index) => (
          <li key={index}> Titre : {item.titre} {<br></br>}Acteur : {item.acteur} {<br></br>} Duree : {item.duree} {<br></br>} Resume : {item.resume} {<br></br>} </li> 
        
        ))}
        
      </ul> 
 
      <AjoutFilm handleSubmit={handleSubmit} />
    </Fragment>
  );
};

export default ListeFilm;
