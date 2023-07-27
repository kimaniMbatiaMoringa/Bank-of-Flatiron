import React from "react";
import { useEffect, useState } from 'react';


function Transactions({transactionList, filterTransactions}){

    const searchBarStyle = {
        width: "100%",
        height: "50px" 
    }

    //let [transactions, setTransactions]= useState(transactionList) 
    //let transactions = props.transactionList                              //Sets the initial state of the transaction variable to empty
    const [input, setInput] = useState('')
    //const [filteredTransactions, setFilteredTransactions] = useState('')
    const [searchList, setSearchList] = useState(transactionList)

    console.log(searchList)

     function handleOnSearching(event){                                                 //A function triggered with a change in <input> is detected
        setInput(event.target.value)                                                    //Whatever is typed in in the search input is set to the variable "input"
        console.log(input)
        //let filteredTransactions = [...transactionList];                                   //Copies the transactions array and sets it to a new array called "filteredTransactions" (We need the original transactions so that the search query can restart with the original values)
        filterTransactions(input)
        /* setSearchList(transactionList.filter((transaction)=>{                      //creats a variable called "searchList" and sets its value to 
            return transaction.description.toLowerCase().includes(input)                //whatever is returned when "filteredTransactions" is filtered for content matching the search input
        })) */
    }

    return(
            <div>
                <input onChange={handleOnSearching} style={searchBarStyle} type="text" placeholder="Search Your Transactions" ></input>
                
                <table class="table table-striped">
                {transactionList.map((transaction)=>(                                      //Prints every object in the transactions array using the .map method
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