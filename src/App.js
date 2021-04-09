import './App.css';
import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

//import views
import Home from "./views/Home.js";
import Header from "./views/Header.js"
import Room from "./views/Room.js"
import NoMatch from "./views/NoMatch.js"
import ToS from "./views/ToS.js"
import VPN from "./views/VPN.js"

const App = () => (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/room">
            <Room />
          </Route>

          <Route path="/vpn">
            <VPN />
          </Route>

          <Route path="/tos">
            <ToS />
          </Route>

          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );


export default App;
