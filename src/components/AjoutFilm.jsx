import React, { Fragment, useState } from "react";

export const AjoutFilm = (props) => {
  // defini tableau films  via un hook avec les 4 attributs
  const [film, setFilm] = useState({
    titre: "",
    acteur: "",
    duree: "",
    resume:""
  });
// gere le champ titre
  const handleChangeTitre = (e) => {
    setFilm({
      ...film,
      titre: e.target.value,
    });
  };
  // gere le champ acteur

  const handleChangeActeur = (e) => {
    setFilm({
      ...film,
      acteur: e.target.value,
    });
  };
// gere le champ duree

  const handleChangeDuree = (e) => {
    setFilm({
      ...film,
      duree: e.target.value,
    });
  };

// gere le champ resume

  const handleChangeResume = (e) => {
    setFilm({
      ...film,
      resume: e.target.value,
    });
  };
// fonction submit
  const handleSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    props.handleSubmit(film);
  };



  return (
    <Fragment>
      <h1>Ajouter un Film &#10004;&#65039; </h1>
      <form onSubmit={handleSubmit}>
        <label>Entrer un titre:</label>
        <input
          type="text"
          name="titre"
          defaultValue={film.titre}
          onChange={handleChangeTitre}
          required
        />
        <br />

        <label>Entrer un acteur:</label>
        <input
          type="text"
          name="acteur"
          defaultValue={film.acteur}
          onChange={handleChangeActeur}
          required
        />
        <br />

        <label>Entrer une durée:</label>
        <input
          type="text"
          name="duree"
          defaultValue={film.duree}
          onChange={handleChangeDuree}
          required
        />
        <br />


        <label>Entrer un résumé:</label> 
        <input
          type="text"
          name="resume"
          defaultValue={film.resume}
          onChange={handleChangeResume}
          required
        />
{<br></br>}
{<br></br>}
        <button type="submit" style={{fontWeight: "bold",  width: 120, height: 50}}  > Valider Formulaire  </button>
      </form>
    </Fragment>
  );
};

export default AjoutFilm;
