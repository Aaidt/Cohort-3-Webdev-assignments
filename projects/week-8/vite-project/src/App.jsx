import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function increaseCount(){
    setCount(count => count + 1);
  }

  function decreaseCount(){
    setCount2(count2 => count2 - 1);
  }

  return <div>
    <Counter count={count} count2={count2}/>
    <button onClick={increaseCount}>Increase count</button>
    <button onClick={decreaseCount}>Decrease count</button>
  </div>

}

function Counter(props) {
  useEffect(function(){
    console.log("mount");

    return function() {
      console.log("unmount");
    }
  }, [])

  useEffect(function(){
    console.log("count has changed.");

    return function(){
      console.log("cleanup inside second effect");
    }
  }, [props.count]);


  return <div>
    Counter1 {props.count} <br />  
    Counter2 {props.count2} <br />  
  </div>
}

export default App
