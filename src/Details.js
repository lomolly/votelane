import React from "react";
import { Link, useNavigate } from "react-router-dom";

import './App.css';

function Details() {

const [click, setClick] = React.useState(false);
const [name, setName] = React.useState('');
const navigate = useNavigate();

const saveDetails = () => {
    setClick(true);
    if(name !== ''){
     navigate('/home');
    }
}

  return (
    <div className="App">
      <div className="App-container">
      <div className="title-div">
      <h3>Vote<span>lane</span></h3>
        <p>My name is Oreoluwa and I am very happy to welcome you on board!</p>
        <br />

        <div className="form-part">
            <h5>Enter your name</h5>
            <input type="text" className="formdata" name="name" onChange={event => setName(event.target.value)}/>
            {click == true && name == '' &&
                <h6 className="validation">Name is required</h6>
            } 
            <br />
        </div>
 
        <button onClick={(() => { saveDetails()})} className="backhome">Continue</button>
      </div>
      <header className="App-header">
      </header>
      </div>
    </div>
  );
}

export default Details;