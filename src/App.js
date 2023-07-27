import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import AddTransaction from './AddTransactions';
import Transactions from './Transactions'
import { useEffect, useState } from 'react';

function App() {

const [transactions, setTransactions]= useState([])
const [searchFilter, setSearchFilter] = useState("")

  useEffect(()=>{                                                              //Starts a side effect after the document loads
    //console.log("useEffect");
    fetch("http://localhost:4000/transactions")                                  //Fetches the transactions object from the local server
    .then((r) => r.json())                                                      //Converts it to a json
    .then((data) =>  setTransactions(data))                                    //sets the transactions variable to contain the array of objects in the json object fetched (Original database)                                               
  },[])

  console.log(transactions)

   function pushTransaction(form){
      alert(form.date +"" + form.description + "" + form.category + "" + form.amount)
      setTransactions(transactions=>[...transactions, form])
       const serverOptions={
          method:"POST",
          headers:{
              "Content-Type": "application/json"
          },
          body:JSON.stringify(form)
      }
      fetch("http://localhost:4000/transactions", serverOptions) 
  }

  const filteredTransactions = transactions.filter(transaction => searchFilter === ""?true:transaction.description.toLowerCase().includes(searchFilter))

/*   function filterTransactions(query){
     (transactions.filter((transaction)=>{                      //creats a variable called "searchList" and sets its value to 
      return transaction.description.toLowerCase().includes(query)                //whatever is returned when "filteredTransactions" is filtered for content matching the search input
    }))
  } */

  function startSearch(query){
    setSearchFilter(query)
  }




  return (
    <>
      <NavBar />
      <AddTransaction  onSubmission={pushTransaction} />
      <Transactions transactionList={filteredTransactions} filterTransactions={startSearch} />
    </>

  );
}

export default App;
