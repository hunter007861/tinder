import React from 'react';
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import Entry from "./Entry";

function App() {
  return (
      <div className="App">

          <Router>
              <Switch>
                  <Route path="/chats/:person">
                      <Header backButton="/chats" />
                      <ChatScreen />

                  </Route>

                  <Route path="/chats">
                      <Header backButton="/"/>
                      <Chats />
                  </Route>

                  <Route path="/Id-Entry">
                      <Header backButton="/"/>
                          <Entry />
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
