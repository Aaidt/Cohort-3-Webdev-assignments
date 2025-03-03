import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div>
      <Counter></Counter>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);

  console.log("counter");

  useEffect(function(){
    setInterval(function (){
      setCount(count => count + 1);
    }, 1000)
    console.log("mounted");
  }, []);


  // function increaseCount(){
  //   setCount(count + 1);
  // }
  // function decreaseCount(){
  //   setCount(count - 1);
  // }
  // function resetCount(){
  //   setCount(0);
  // }

  return <div>
    <h2>{count}</h2>
    {/* <button onClick={increaseCount}>Increase Count</button>
    <button onClick={decreaseCount}>Decrease Count</button>
    <button onClick={resetCount}>Reset Count</button> */}
  </div>
}

export default App
