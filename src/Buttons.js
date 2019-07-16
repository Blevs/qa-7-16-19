import React from 'react';

function Buttons(props) {
  console.log('props', props)
  return (
    <>
      <button onClick={() => props.homeTD()}>Home TD</button>
      <button onClick={() => props.homeFG()}>Home FG</button>
      <button onClick={() => props.awayTD()}>Away TD</button>
      <button onClick={() => props.awayFG()}>Away FG</button>
    </>
  );
}

export default Buttons;
