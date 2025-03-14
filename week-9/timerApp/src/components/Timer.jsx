import React, { useState, useRef } from 'react'
import "./Timer_module.css" 
import { formatTime, calculateTime } from "../utils/auxiliaryFunctions"


const Timer = () => {

  const [Time, setTime] = useState(0);
  // const [TimerState, setTimerState] = useState(false);
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

  const resetTimer = () => {
    setTime(0);
    intervalRef.current = null;
    clearInterval(intervalRef.current);
  } 

  const editTimer = () => {
    const inputHours = prompt("Enter the hour:");
    const inputMinutes = prompt("Enter the minutes:");
    const inputSeconds = prompt("Enter the seconds:");

    const newTime = calculateTime(inputHours, inputMinutes, inputSeconds)
    setTime(newTime);
  }

  const { hours, minutes, seconds } = formatTime(Time);
 

  return (
    <div className="timerApp">
      <div style={{padding: 10}} className="timerDisplay">
        <div className="timerCircle">
          <p className="timerTime"> {hours}:{minutes}:{seconds}</p>
        </div><br />
      </div>
      <div className="actionButtons">
        <button className="actionButton" onClick={startTimer}>START</button>
        <button className="actionButton" onClick={stopTimer}>STOP</button>
        <button className="actionButton" onClick={resetTimer}>RESET</button>
        <button className="actionButton" onClick={editTimer}>EDIT</button>
      </div>
    </div>
  )
}




export default Timer