import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Search from './Search';
import AddTransaction from './AddTransactions';
import Transactions from './Transactions';
import { useEffect, useState } from 'react';

function App() {

  const pull_data = (data)=>{
    console.log(data); //Logs data from child
  }

  return (
    <>      
      <NavBar />
      <AddTransaction
        func={pull_data}
      />
      <Transactions />
    </>

  );
}

export default App;
