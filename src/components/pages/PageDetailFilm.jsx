import React, { Fragment } from "react";
import filmsDetails from "../data/filmsDetails";
import image1 from "../commons/movie.jpg";

export const PageDetailFilm = (props) => {
  const styleObj = {
    fontSize: 40,
    color: "yellow",
    textAlign: "center",
    paddingTop: "100px",
  };
  return (
    <Fragment>
      <h1 style={styleObj}> Page details films </h1>
      <h3>Ajout de la date du tournage pour tous les films </h3>
      <ul>
        {filmsDetails.map((unfilm) => {
          return (
            <li>
              Titre du film : {unfilm.titre}
              {<br></br>}Date de tournage du film : {unfilm.DateTournage}
            </li>
          );
        })}
      </ul>

      <img src={image1} alt="movie " />
    </Fragment>
  );
};

export default PageDetailFilm;
