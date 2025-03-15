import React, { createContext, useContext, useState } from "react";
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
  return (
    <div>
      <Count />
      <Increase />
      <Decrease />
    </div>
  )
}

function Count() {
  // const { count } = useContext(CountContext);
  const count = useRecoilValue(counterAtom)
  return <div>{count}</div>
}


function Increase() {
  // const { count, setCount } = useContext(CountContext);
  const setCount = useSetRecoilState(counterAtom);

  function Increase() {
    setCount(c => c + 1)
  }

  return <button onClick={Increase}>Increase</button>
}


function Decrease() {
  // const { count, setCount } = useContext(CountContext);
  const setCount = useSetRecoilState(counterAtom);

  function Decrease() {
    setCount(c => c - 1);
  }
  return <button onClick={Decrease} >Decrease</button>
}


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