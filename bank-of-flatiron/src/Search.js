import React from "react";

const searchBarStyle = {
    width: "100%",
    height: "50px" 
}

function Search(){


    return(
        <div>
            <input style={searchBarStyle} type="text" placeholder="Search Your Transactions" ></input>
        </div>
        
    )
}
export default Search