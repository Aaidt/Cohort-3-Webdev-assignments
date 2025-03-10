import React, { useState } from 'react'
import "./Timer.module.css" 


const Timer = () => {

  const [Time, setTime] = useState(0);
  const [TimerState, setTimerState] = useState(false);
  let start;

  const startTimer = () => {
    start = setInterval(() => {
      setTime(time => time + 1)
    }, 1000);
  }
  

  const stopTimer = () => {
    setTime(clearInterval(start))
  }



  return (
    <div className="timerApp">
      <div className="timerCircle">
        {Time}<br />
      </div>
      <button onClick={startTimer}>START</button>
      <button onClick={stopTimer}>STOP</button>
    </div>
  )
}




export default Timer