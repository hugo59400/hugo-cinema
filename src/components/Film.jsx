import React, { Fragment } from "react";
import PropTypes from "prop-types";
import films from "./data/films"

export const Film = (props) => {
  return (
    <Fragment>
      <h1>Les Films à l'affiche dans vos salles </h1>
      <p>Titre du film: {props.titre}</p>
      <p>Acteur: {props.acteur}</p>
      <p>Durée: {props.duree} </p>
      <p>Résumé: {props.resume} </p>
   
    </Fragment>
  );
};
// type les variables et les rendree obligatoire si on veut
Film.propTypes = {
  titre: PropTypes.string.isRequired,
  acteur: PropTypes.string.isRequired,
  duree: PropTypes.number.isRequired,
  resume: PropTypes.string.isRequired,
};
// verifier le type dune donnee dans un composant ici user
// verifier dans la console navigateur
Film.propTypes = {
  // param de la fonction nom du champ , props , composantName
  nom: function (props, titre, Film) {
    if (typeof props[titre] == "number") {
      return new Error(` prop invalide  ${titre} pour ${Film} `);
    }
  },
};

// affiche sur chrome les infos ci dessous pas besoin de remplir les champs dans <User> lors de l'appel dans App.jsx
Film.defaultProps = {
  titre: "Harry Potter",
  acteur: "Daniel Radcliffe",
  duree: 220,
  resume: "Magie noire ",
};

export default Film;
