import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Search from './Search';
import AddTransaction from './AddTransactions';
import Transactions from './Transactions';
import { useEffect, useState } from 'react';

function App() {

  return (
    <>
      <NavBar />
      <Search />
      <AddTransaction />
      <Transactions />
    </>

  );
}

export default App;
