import React from 'react';
import './App.css';
import Header from './components/Header'
import TinderCards from './components/TinderCards'
import SwipeButtons from './components/SwipeButtons'
import Chats from './components/Chats';
import ChatScreen from './components/ChatScreen';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/profile">
            <Header backButton="/" />
            <h1>I am the profile page</h1>
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;