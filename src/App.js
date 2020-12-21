import React from 'react';
import './App.css';
import Header from './components/Header'
import TinderCards from './components/TinderCards'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/profile">
            <h1>I am the profile page</h1>
          </Route>
          <Route path="/chat">
            <h1>I am the chat page</h1>
          </Route>
          <Route path="/">
            <TinderCards />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;