import React, { Fragment } from "react";
import image1 from '../data/cine.jpg'

import films from "../data/films"
import cinema from "../data/cinema"


export const Accueil =(props)=>{
    const styleObj = {
        fontSize: 40,
        color: "yellow",
        textAlign: "center",
        paddingTop: "100px",
    }
return(

<Fragment>
    <h1 style={styleObj}  > Bienvenue sur mon cinema &#127910;  </h1>
    <br />
    <img src={image1}alt="cinema" />
<br />
    Nom du cinéma : {cinema.nom}
    <br />
    Adresse du cinéma : {cinema.adresse}
    <br />
    Horaire du cinéma : {cinema.horaire}
    <br />
    Nombre de salles : {cinema.nbSalle}

  

    <ul>
          <h1 > Mes films présents dans mon cinéma 🎬  </h1>
          {films.map((unfilm) => {
            return (
              <li> 
                  Numero du film : {unfilm.id} {<br></br>} 
                  Image du film : <img src= {unfilm.image} width="100px" alt="img film"/>  {<br></br>} 
                Titre du film : {unfilm.titre}{<br></br>}Acteur du film : {unfilm.acteur}
                {<br></br>} Duree: {unfilm.duree}{<br></br>} Resume : {unfilm.resume} {<br></br>} {<br></br>} 
              </li>
            );
          })}
        </ul>


    <br />

    

</Fragment>


)
}

export default Accueil