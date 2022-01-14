import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const NavBar =(props)=>{
    const styleObj = {
        fontSize: 40,
        color: "black",
        textAlign: "left",
        paddingTop: "20px",
        borderColor: "red",
        
    }
return(

<Fragment>
<nav style={styleObj} >
{props.pages && props.pages.map( (page, index) =>{
    return (

<Link key={index} to={page.to}> {page.nom} </Link>

        
    )
}) }

</nav>


</Fragment>


)
}

export default NavBar