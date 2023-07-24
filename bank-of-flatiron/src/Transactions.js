import React from "react";
import { useEffect, useState } from 'react';


function Transactions(){

    const [transactions, setTransactions]= useState([])

    useEffect(function(){
        console.log("useEffect");
        fetch("http://localhost:4000/transactions")
          .then((r) => r.json())
          .then((data) => {
            console.log("setState");
            setTransactions(data);
          });
     },[])  

    return(
            <div>
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

            </div>
        
    )
    
}

export default Transactions