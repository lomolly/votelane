import React from 'react';
import img1 from './assets/img3.jpeg';
import img2 from './assets/img4.jpeg';
import { useNavigate} from 'react-router-dom';


import './App.css';


function Home() {

  const [vote, setVote] = React.useState(0);

  const [voteArray, setVoteArray] = React.useState([
      { 
          id: 1,
          name : 'Silver James',
          job :  'Architect & Engineer',
          img :  img1,
          vote : 0
      },
      { 
        id: 2,
        name : 'Glory Dickson',
        job :  'English Professor',
        img :  img2,
        vote : 0
    },
    { 
        id: 3,
        name : 'Faith May',
        job :  'Architect & Engineer',
        img :  img1,
        vote : 0
    },
    { 
        id: 4,
        name : 'Kate Kolapo',
        job :  'Building & Construction',
        img :  img1,
        vote : 0
    }
  ])

  const navigate = useNavigate();
  // React.useEffect(() => {
    
  // },[])

  const voteCandidate = (selected) => {
    let array = voteArray;
    if(selected){
        for(let i = 0; i <= array.length; i++){
            if(array[i].name === selected.name){
                selected.vote = selected.vote + 1;
                console.log('selected', selected.vote + 1);
                setVote(selected.vote + 1);
                setVoteArray(array);
                navigate('/appreciation');
            }
        }
        
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
      {voteArray?.map((item) => (
                <div className="card" key={item.name}>
                <div className="count" >{item.vote}</div>
                  <img src={item.img} className="App-logo" alt="logo" />
                  <div className="container">
                    <div>
                      <h4><b>{item.name}</b></h4>
                      <p>{item.job}</p>
                    </div>
                    <button className="vote-btn" onClick={(() => {voteCandidate(item)})}>Vote</button>
                  </div>
              </div>
      ))}
  
        {/* <div className="card">
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
        </div> */}
      </header>
 
      </div>
  
    </div>
  );
}

export default Home;
