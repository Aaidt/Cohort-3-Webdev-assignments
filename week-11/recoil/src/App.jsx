import React, { createContext, useContext, useState, useEffect, memo } from "react";
import { useSetRecoilState, useRecoilValue, RecoilRoot, atom } from "recoil";
import { counterAtom } from "./store/atom/counter.js"

// const CountContext = createContext();

// const CountContextProvider = ({ children }) => {
//   const [count, setCount] = useState(0);
//   return (
//     <CountContext.Provider value={{ count, setCount }}>
//       {children}
//     </CountContext.Provider>
//   )

// }

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(count => count+1)
    }, 3000)
  }, [])
  return (
    <div>
      <Count />
      <Increase />
      <Decrease />
    </div>
  )
}

const Count = memo(function () {
  // const { count } = useContext(CountContext);
  // const count = useRecoilValue(counterAtom)
  // return <div>{count}</div>
  return <div>
    1
  </div>
})


const Increase = memo(function () {
  // const { count, setCount } = useContext(CountContext);
  // const setCount = useSetRecoilState(counterAtom);

  function Increase() {
    // setCount(c => c + 1)
  }

  return <button onClick={Increase}>Increase</button>
})


const Decrease = memo(function () {
  // const { count, setCount } = useContext(CountContext);
  // const setCount = useSetRecoilState(counterAtom);

  function Decrease() {
    // setCount(c => c - 1);
  }
  return <button onClick={Decrease} >Decrease</button>
})


function App() {
  return (
    <div>
      <RecoilRoot>
        <Counter />
      </RecoilRoot>
    </div>
  )
}


export default App;