import React from "react";
import { Link } from "react-router-dom";

import './App.css';

function Appreciation() {

  return (

    <div className="App">
      <div className="App-container">
      <div className="title-div">
        <h3>Thank You!</h3>
        <p>We really appreciate you taking your time to vote for your desired candidate on <span>Votelane.</span></p>
        <br /><br />
        <Link to="/" className="backhome">Go back Home</Link>
      </div>
      <header className="App-header">
          {/* <button>Vote for a candidate</button> */}
      </header>
      </div>
    </div>
  );
}

export default Appreciation;