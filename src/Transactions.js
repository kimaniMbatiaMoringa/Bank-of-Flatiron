import React from "react";
import { useEffect, useState } from 'react';


function Transactions(props){

    const searchBarStyle = {
        width: "100%",
        height: "50px" 
    }

    const [transactions, setTransactions]= useState([])                                 //Sets the initial state of the transaction variable to empty
    const [input, setInput] = useState('')
    const [filteredTransactions, setFilteredTransactions] = useState('')

     useEffect(function(){                                                              //Starts a side effect after the document loads
        console.log("useEffect");
        fetch("http://localhost:4000/transactions")                                     //Fetches the transactions object from the local server
          .then((r) => r.json())                                                        //Converts it to a json
          .then((data) => {                                                     
            console.log("setState");
            setTransactions(data);                                                      //sets the trransactions variable to contain the array of objects in the json object fetched
          });
     },[transactions])                                                                  //this commands tells react to Re run this side effect every time the transactions state changes. ensuring the transactions array has the most up to date info
    

     function handleOnSearching(event){                                                 //A function triggered bo a change in the input area of the search input
        setInput(event.target.value)                                                    //Gets whatever was typed in in the search input and sets it to the variable "input"
        console.log(input)
        let filteredTransactions = [...transactions];                                   //Copies the transactions array and sets it to a new array called "filteredTransactions"
        let searchList = filteredTransactions.filter((transaction)=>{                   //creats a variable called "searchList" and sets its value to 
            return transaction.description.includes(input)                              //whatever is returned when "filteredTransactions" is filtered for content matching the search input
        })

        setTransactions(searchList)
    }
    

    return(
            <div>
                <input onChange={handleOnSearching} style={searchBarStyle} type="text" placeholder="Search Your Transactions" ></input>
                
                <table class="table table-striped">
                {transactions.map((transaction)=>(                                      //Prints every object in the transactions array using the .map method
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