import React from 'react';
import Header from './components/Header';  // Correct import
import Balance from './components/Balance';  // Correct import
import IncomeExpenses from './components/IncomeExpenses';  // Correct import
import TransactionList from './components/TransactionList';  // Correct import
import AddTransaction from './components/AddTransaction';  // Correct import
import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;