import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import { LogIn } from './components/LogIn';
import { SignUp } from './components/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';



function App() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
        <Route path="/" exact component={LogIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/app">
      <div className="container">
        <Header />
        <Balance />
        <IncomeExpenses />
        </div>
      <div className="history">
      <AddTransaction />
        <TransactionList />

      </div>
        </Route>
      </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
