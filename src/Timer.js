import React, { useState, useEffect } from 'react';

function Timer({incQuarter, startTime, ...props}) {
  console.log(props);
  console.log("render");
  const [time, setTime] = useState(props.startTime);
  const seconds = (time % 60).toString().padStart(2, '0');
  const minutes = Math.floor(time / 60).toString().padStart(2, '0');
  useEffect(() => {
    console.log("first");
    setInterval(() => {
      console.log("interval", time);
      setTime(newTime => {
        return newTime - 1;
      });
    }, 1000);
  }, []);
  if (time <= 840) {
    setTime(props.startTime);
    incQuarter();
  }
  return (
    <div>
      {minutes}:{seconds}
    </div>
  );
}

export default Timer;
