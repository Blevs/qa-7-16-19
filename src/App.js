import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Buttons from './Buttons.js';
import Timer from './Timer.js';

function App(props) {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [quarter, setQuarter] = useState(1);

  const [scores, setScores] = useState({home: 0, away: 0});

  const scoreChangeFactory = (setScore, change) => {
    return () => setScore(score => score + change);
  };

  // const scoreChangeFactory = (teamName, change) => {
  //   return () => setScores(scores => {
  //     const newScores = {...scores};
  //     newScores[teamName] += change;
  //     return newScores;
  //   });
  // };

  return (
    <div className="App">
      <Timer
        className="timer"
        startTime={900}
        incQuarter={() => (
        setQuarter(quarter => quarter >= 4 ? 1 : quarter + 1)
      )}/>
      <div>{homeScore} {awayScore}</div>
      {/* {Buttons({home: homeScore})} */}
      Quarter: {quarter}
      <Buttons
        homeTD={() => setHomeScore(homeScore+7)}
        homeFG={() => setHomeScore(homeScore+3)}
        awayTD={() => setAwayScore(awayScore+7)}
        awayFG={() => setAwayScore(awayScore+3)}
      />
    </div>
  );
}

export default App;
