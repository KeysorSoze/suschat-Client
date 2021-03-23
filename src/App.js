import logo from './logo.svg';
import './App.css';
import React from "react";

//import views
import Home from "./views/Home.js";
import Header from "./views/Header.js"

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
