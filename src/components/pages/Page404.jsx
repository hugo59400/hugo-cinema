import React, { Fragment } from "react";
import image1 from '../data/warn.png'

export const Page404 =(props)=>{
   


return(

<Fragment>
<h1> Page 404 erreur </h1>
<h3>Vous vous êtes trompé dans l'url attention veuillez réessayer avec un url valide  </h3>


<img src={image1} alt="img error" />

</Fragment>


)
}

export default Page404