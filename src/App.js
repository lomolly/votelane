import React from 'react';
import { Routes, Route } from "react-router-dom"

import './App.css';
import Appreciation from './Appreciation';
import Home from './Home';
import Details from './Details';

function App() {

  return(
    <div className="App">
      <Routes>
        <Route path="/home" element={ <Home/> } />
        <Route path="/" element={ <Details/> } />
        <Route path="appreciation" element={ <Appreciation/> } />
      </Routes>
    </div>
  );
}

export default App;
