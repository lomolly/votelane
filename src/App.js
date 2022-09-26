import React from 'react';
import logo from './logo.svg';
import img1 from './assets/img3.jpeg';
import img2 from './assets/img4.jpeg';
import img3 from './assets/img6.jpeg';

import './App.css';

function App() {

  const [voteOne, setVoteOne] = React.useState(0);
  const [voteTwo, setVoteTwo] = React.useState(0);
  const [voteThree, setVoteThree] = React.useState(0);
  const [voteFour, setVoteFour] = React.useState(0);

  // React.useEffect(() => {
    
  // },[])

  const voteCandidate = (selected) => {
    console.log('selected', selected);
    if(selected == 1){
      setVoteOne(voteOne + 1);
    }
    else if(selected == 2){
      setVoteTwo(voteTwo + 1)
    }
    else if(selected == 3){
      setVoteThree(voteThree + 1)
    }
    else if(selected == 4){
      setVoteFour(voteFour + 1)
    }
  }

  return (

    <div className="App">
      <div className="App-container">
      <div className="title-div">
        <h3>Vote<span>lane</span></h3>
        <p>Vote for your favorite candidate. <br />While you might believe your one vote out of the hundreds or thousands cast will not make much of a difference, understand that every vote counts.</p>
      </div>
      <header className="App-header">
        <div className="card">
          <div className="count">{voteOne}</div>
            <img src={img1} className="App-logo" alt="logo" />
            <div className="container">
              <div>
                <h4><b>Kate Kolapo</b></h4>
                <p>Architect & Engineer</p>
              </div>
              <button className="vote-btn" onClick={(() => {voteCandidate(1)})}>Vote</button>
            </div>
        </div>
        <div className="card">
        <div className="count">{voteTwo}</div>
            <img src={img2} className="App-logo" alt="logo" />
            <div className="container">
              <div>
                <h4><b>Glory Dickson</b></h4>
                <p>Architect & Engineer</p>
              </div>
              <button className="vote-btn" onClick={(() => {voteCandidate(2)})}>Vote</button>
            </div>
        </div>
        <div className="card">
        <div className="count">{voteThree}</div>
            <img src={img1} className="App-logo" alt="logo" />
            <div className="container">
              <div>
                <h4><b>Faith May</b></h4>
                <p>Architect & Engineer</p>
              </div>
              <button className="vote-btn"onClick={(() => {voteCandidate(3)})} >Vote</button>
            </div>
        </div>
        <div className="card">
        <div className="count">{voteFour}</div>
            <img src={img1} className="App-logo" alt="logo" />
            <div className="container">
              <div>
                <h4><b>Tess Black</b></h4>
                <p>Architect & Engineer</p>
              </div>
              <button className="vote-btn" onClick={(() => {voteCandidate(4)})}>Vote</button>
            </div>
        </div>
      </header>
 
      </div>
  
    </div>
  );
}

export default App;
