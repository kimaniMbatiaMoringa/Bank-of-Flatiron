import React from "react";
import { useEffect, useState } from 'react';


function Transactions(){


    const searchBarStyle = {
        width: "100%",
        height: "50px" 
    }

    const [transactions, setTransactions]= useState([])

    const [filterTerm, setFilterTerm] = useState([])

    useEffect(function(){
        console.log("useEffect");
        fetch("http://localhost:4000/transactions")
          .then((r) => r.json())
          .then((data) => {
            console.log("setState");
            setTransactions(data);
          });
     },[]) 
     
     const startSearch = (e) =>{
        setFilterTerm(e.target.value)
        let filteredItems = transactions.filter(function(filterTerm){
            return content.test(filterTerm)
        })
        console.log(filteredItems)
     }
    

    return(
            <div>
                <input style={searchBarStyle} type="text" value={filterTerm} placeholder="Search Your Transactions" onChange={startSearch} ></input>
                
                <table class="table table-striped">
                {transactions.map((transaction)=>(
                    <>
                    <tr>
                     <th scope="row">{transaction.id}</th>
                     <td>{transaction.date}</td>
                     <td key={transaction}>{transaction.description}</td>
                     <td>{transaction.category}</td>
                     <td>{transaction.amount}</td>
                     </tr> 
                    </>
                   
                ))}
                </table>

                <h3>Search Results</h3>
                <startSearch />

            </div>
        
    )
    
}

export default Transactions