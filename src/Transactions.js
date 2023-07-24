import React from "react";
import { useEffect, useState } from 'react';


function Transactions(){


    const searchBarStyle = {
        width: "100%",
        height: "50px" 
    }

    const [transactions, setTransactions]= useState([])
    const [input, setInput] = useState('')
    const [filteredTransactions, setFilteredTransactions] = useState('')

    useEffect(function(){
        console.log("useEffect");
        fetch("http://localhost:4000/transactions")
          .then((r) => r.json())
          .then((data) => {
            console.log("setState");
            setTransactions(data);
          });
     },[]) 
     
/*      const filterBySearch = (event) =>{
        const query = event.target.value;
        let updatedList = [...transactions];
        updatedList = updatedList.filter((item)=>{
            return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        })
        setFilteredList(updatedList)
        console.log(filteredList)
     } */

     function handleOnSearching(event){
        setInput(event.target.value)
        console.log(input)
        let filteredTransactions = [...transactions];
        setFilteredTransactions(filteredTransactions=>filteredTransactions.filter(transaction=>transaction.description.includes(input)))
    }
    

    return(
            <div>
                <input value ={input} onChange={handleOnSearching} style={searchBarStyle} type="text" placeholder="Search Your Transactions" ></input>
                
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