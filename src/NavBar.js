import userEvent from "@testing-library/user-event";
import React from "react";
import { useEffect } from "react";

const NavBarStyle ={
    backgroundColor:"rgb(90,16,191)",
    height:"50px"
}

function NavBar(){

    return(
        <div style={NavBarStyle}>
            <h2 style={{color:"white",textAlign:"center"}}>Bank of Flatiron</h2>
        </div>
    ) 
}

export default NavBar;