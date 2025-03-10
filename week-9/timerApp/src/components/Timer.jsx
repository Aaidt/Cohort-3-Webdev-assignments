import React, { useState } from 'react'
import "./Timer.module.css" 


const Timer = () => {

  const [Time, setTime] = useState("00");
  const [TimerState, setTimerState] = useState(false);

  const startTimer = () => {
    const start = setInterval(setTime(
      time => time =+ 1
    ), 1000);
  }

  const stopTimer = (start) => {
    clearInterval(start)
  }



  return (
    <div className="timerApp">
      Timer
      <button onClick={startTimer}>START</button>
      <button onClick={stopTimer}>STOP</button>
    </div>
  )
}




export default Timer