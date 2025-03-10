import React, { useState, useRef } from 'react'
import "./Timer_module.css" 


const Timer = () => {

  const [Time, setTime] = useState(0);
  const [TimerState, setTimerState] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if(intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      setTime(time => time + 1)
    }, 1000);
  }
  

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }



  return (
    <div className="timerApp">
      <div style={{padding: 10}} className="timerDisplay">
        <p className="timerCircle">Time: {Time}</p><br />
      </div>
      <button style={{margin: 10}} onClick={startTimer}>START</button>
      <button onClick={stopTimer}>STOP</button>
    </div>
  )
}




export default Timer