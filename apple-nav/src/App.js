import React from 'react';
import { Route } from "react-router-dom";
import './App.css';

import NavWrapper from "./Navigation/NavWrapper.js";

function App(props) {
  return (
    <div className="App">
      <Route path="/" render={(props) => <NavWrapper />} />
    </div>
  );
}

export default App;
